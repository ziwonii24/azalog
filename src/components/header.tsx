import Image from "next/image";
import Link from "next/link";
import Logo from "@/assets/logo.png";

export default function Header() {
  return (
    <header className="border-b-1 border-b-black">
      <Link href="/">
        <Image src={Logo} alt="logo" width={100} height={100} />
      </Link>

      {/* TODO: categories, search, github */}
      {/* <nav className="flex gap-2">
        <Link href="/">Home</Link>
        <Link href="/blog">Blog</Link>
      </nav> */}
    </header>
  );
}
