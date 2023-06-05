import ClientComponent from "../../components/client-component";
import ServerComponent from "../../components/server-component";

export const runtime = "nodejs";

export default function Home() {
  return (
    <>
      <ServerComponent />
      <ClientComponent />
      <p>
        ☝️ Clicking this with a <code>nodejs</code> runtime will work. ✅
      </p>
    </>
  );
}
