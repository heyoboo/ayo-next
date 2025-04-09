import { Metadata } from "next";

type Props = {
  params: Promise<{ id: string }>;
};

export async function generateMetadata(
  { params }: Props,
): Promise<Metadata> {
  const { id } = await params
  const title = `blog post ${id}`;
  const description = `the blog post ${id}`;
  
  return {
    title,
    description,
    openGraph: {
      type: "website",
      title,
      description,
      siteName: title,
    },
  };
}

export default async function Blog({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  return <div>blog: {id}</div>;
}
