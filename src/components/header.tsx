import Image from "next/image";
import Link from "next/link";
import Logo from "@/assets/logo.png";
import { CATEGORIES } from "@/types";

/**
 * TODO:
 * 1. Static Image (& Crop)
 * 2. Search bar
 * 3. Responsive design
 * 4. GitHub link
 * 5. Subcategories hover menu
 * 6. Theme toggle
 * @returns
 */
export default function Header() {
  return (
    <header className="flex sticky top-0 z-10 p-4 border-b-1 border-b-black bg-white">
      <Link href="/">
        <Image src={Logo} alt="logo" width={96} height={96} />
      </Link>

      <nav className="flex gap-2">
        {Object.keys(CATEGORIES).map((category) => (
          <Link key={category} href={`/category/${category}`}>
            {category}
          </Link>
        ))}
      </nav>
    </header>
  );
}
