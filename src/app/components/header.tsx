import Link from "next/link";

export default function Header() {
  return (
    <header className="flex justify-between items-center bg-yellow-50">
      <div>logo</div>
      <nav className="flex gap-2">
        <Link href="/">Home</Link>
        <Link href="/blog">Blog</Link>
      </nav>
    </header>
  );
}
