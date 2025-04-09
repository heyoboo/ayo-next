export default async function TestDynamic({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const data = await fetch(`https://dummyjson.com/posts/${id}`, { cache: "no-cache" })
  const post = await data.json()
  return <div>Dynamic: {post.title} - Lets see if this works on gh pages lol</div>;
}
 