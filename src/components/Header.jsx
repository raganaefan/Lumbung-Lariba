"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

import Logo from "@/images/logo.webp";

export default function Header() {
  const pathname = usePathname();
  return (
    <header className="sticky top-0 z-[100] flex min-w-fit flex-col items-center justify-between bg-cyan-950 p-6 pb-3 pt-2 text-white sm:flex-row">
      <Link href="/">
        <Image src={Logo} alt="Logo Lumbung Lariba" className="w-24 sm:w-32" />
      </Link>
      <nav>
        <ul className="flex flex-row gap-5 sm:gap-10 sm:text-2xl md:text-2xl 2xl:mr-20 2xl:text-4xl">
          <li>
            <Link
              href="/services"
              className={pathname === "/services" ? "active" : ""}
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className={pathname === "/about" ? "active" : ""}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="/teams"
              className={pathname === "/teams" ? "active" : ""}
            >
              Teams
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
