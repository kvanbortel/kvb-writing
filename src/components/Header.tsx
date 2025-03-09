import Link from "next/link";
import { Navigation } from "./Navigation";

export function Header() {
  return (
    <header className="sticky top-0 w-full bg-[#7a4877] text-white z-50 shadow-lg shadow-[#7a4877]/10">
      <div className="max-w-7xl mx-auto px-8 sm:px-20">
        <div className="flex justify-between items-center py-4">
          <Link href="/" className="text-xl font-semibold hover:opacity-80">
            Kayla Writes
          </Link>
          <Navigation />
        </div>
      </div>
    </header>
  );
} 
