'use client';

import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';
import { usePathname } from 'next/navigation';

const MENU_ITEMS = [
  { href: '/', label: 'Home' },
  { href: '/projects', label: 'Projects' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav className="flex items-center">
      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center gap-8">
        {MENU_ITEMS.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={`text-sm font-medium hover:text-gray-600 dark:hover:text-gray-300 transition-colors ${
              pathname === item.href ? 'text-black dark:text-white' : 'text-gray-500 dark:text-gray-400'
            }`}
          >
            {item.label}
          </Link>
        ))}
      </div>

      {/* Mobile Navigation */}
      <div className="md:hidden">
        <button
          className="p-2 hover:bg-black/[.05] dark:hover:bg-white/[.06] rounded-lg transition-colors"
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {isOpen && (
          <div className="absolute top-16 right-8 w-48 bg-white dark:bg-gray-800 rounded-lg shadow-lg py-2 z-50">
            {MENU_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`block px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors ${
                  pathname === item.href ? 'text-black dark:text-white font-medium' : 'text-gray-500 dark:text-gray-400'
                }`}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
