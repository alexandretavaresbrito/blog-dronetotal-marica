import { Metadata } from "next/types";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Posts",
};

export default function Post() {
  return (
    <div>
      <h1>Post</h1>
    </div>
  );
}
