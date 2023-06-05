"use client";

import { setCookie } from "./actions";

export default function ClientComponent() {
  return (
    <>
      <p>This is a client component with a Server Action below. 👇</p>
      <form>
        <button formAction={setCookie}>Set Cookie</button>
      </form>
    </>
  );
}
