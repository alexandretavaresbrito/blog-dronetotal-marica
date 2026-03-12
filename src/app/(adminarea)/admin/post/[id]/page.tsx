import { Metadata } from "next";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Novo Post",
};

type AdminPostIdPageProps = {
  params: Promise<{
    id: string;
  }>;
};

export default async function UniquePost({ params }: AdminPostIdPageProps) {
  const { id } = await params;
  return (
    <div>
      <h1>Post</h1>
      <p>{id}</p>
    </div>
  );
}
