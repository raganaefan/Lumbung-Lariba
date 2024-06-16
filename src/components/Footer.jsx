import Logo from "@/images/logo.webp";
import Image from "next/image";

export default function Footer() {
  return (
    <>
      <footer className="h-30 flex flex-row items-center justify-center gap-10 bg-cyan-950 p-5">
        <Image
          src={Logo}
          alt="Logo Lumbung Lariba"
          className="ml-3 w-20 bg-cover opacity-50 sm:w-20"
        />
        <p className="text-center text-white sm:mr-10">
          © 2024 Lumbung Lariba
        </p>
      </footer>
    </>
  );
}
