import { Metadata } from "next/types";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Login",
};
export default function Login() {
  return (
    <div>
      <h1>Login</h1>
    </div>
  );
}
