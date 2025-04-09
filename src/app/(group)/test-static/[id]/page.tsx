export default async function TestStatic({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  return <div>Static: {id}</div>;
}