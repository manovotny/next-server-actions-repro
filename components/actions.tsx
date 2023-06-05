"use server";

import { cookies } from "next/headers";

export async function setCookie(formData) {
  console.log("SET COOKIE");
  cookies().set({
    name: "name",
    value: "value",
    path: "/",
  });
  const name = cookies().get("name")?.value;
  console.log("name", name);
}
