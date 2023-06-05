import ClientComponent from "../../components/client-component";
import ServerComponent from "../../components/server-component";

export const runtime = "edge";

export default function Home() {
  return (
    <>
      <ServerComponent />
      <ClientComponent />
      <p>
        ☝️ Clicking this with an <code>edge</code> runtime will work. ❌
      </p>
    </>
  );
}
