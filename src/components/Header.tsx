import Link from "next/link";
import { Navigation } from "./Navigation";

/**
 * Header Component
 * 
 * Site-wide header component featuring:
 * - Sticky positioning with shadow effect
 * - Brand link with hover states
 * - Navigation menu integration
 * - Responsive padding and max width
 * - Accessible landmark role
 * 
 * @component
 */
export function Header() {
  return (
    <header className="sticky top-0 w-full bg-[#7a4877] text-white z-50 shadow-lg shadow-[#7a4877]/10" role="banner">
      <div className="max-w-7xl mx-auto px-8 sm:px-20">
        <div className="flex justify-between items-center py-4">
          <Link 
            href="/" 
            className="text-xl font-semibold hover:opacity-80 outline-none focus-visible:ring-2 focus-visible:ring-white/50 rounded-md px-2 py-1 transition-all"
            aria-label="Home"
          >
            Kayla Writes
          </Link>
          <Navigation />
        </div>
      </div>
    </header>
  );
} 
