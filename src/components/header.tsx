import Image from "next/image";
import Link from "next/link";
import Logo from "@/assets/logo.png";
import { CATEGORIES } from "@/types";

export default function Header() {
  return (
    <header className="border-b-1 border-b-black">
      <Link href="/">
        <Image src={Logo} alt="logo" width={100} height={100} />
      </Link>

      {/* TODO: search, github */}
      <nav className="flex gap-2">
        {Object.keys(CATEGORIES).map((category) => (
          <Link key={category} href={`/category/${category}`}>
            {category}
          </Link>
          // TODO: sub categories hover menu
        ))}
      </nav>
    </header>
  );
}
