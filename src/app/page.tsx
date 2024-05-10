import Link from "next/link";

export default async function Page() {
  return (
    <div>
      <h1>Page</h1>
      
      <Link href="/product/t-shirt?id=1">Click me</Link>
    </div>
  );
}
