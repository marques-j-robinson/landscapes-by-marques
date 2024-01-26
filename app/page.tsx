'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Home() {
  const pathname = usePathname();
  return (
    <>
        <header className="container mx-auto px-4 mt-8">
            <nav className="flex flex-row items-center space-between justify-between">
                <Link href="/"><h1 className="text-4xl font-bold">Landscapes by Marques</h1></Link>
                <ul>
                    <li className={`inline-block px-4 uppercase ${pathname === "/" ? "active" : ""}`}><Link href="/">Gallery</Link></li>
                    <li className={`inline-block px-4 uppercase ${pathname === "/blog" ? "active" : ""}`}><Link href="/blog">Blog</Link></li>
                    <li className={`inline-block px-4 uppercase ${pathname === "/about" ? "active" : ""}`}><Link href="/about">About</Link></li>
                </ul>
            </nav>
        </header>
    </>
  );
}
