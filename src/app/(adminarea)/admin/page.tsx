import { Metadata } from "next/types";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Área administrativa",
};

export default function Admin() {
  return (
    <div>
      <h1>Admin</h1>
    </div>
  );
}
