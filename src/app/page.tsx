export default function Page({
  searchParams,
}: {
  searchParams: Record<string, string>;
}) {
  return (
    <div>
      <h1>Page</h1>
      {searchParams["id"]}
    </div>
  );
}
