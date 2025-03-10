'use client';

import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';

const MENU_ITEMS = [
  { href: '/projects', label: 'Projects' },
  { href: '/resources', label: 'Resources' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  // Close menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Close menu when pressing Escape
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsOpen(false);
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, []);

  return (
    <nav className="flex items-center" role="navigation" aria-label="Main navigation">
      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center gap-8">
        {MENU_ITEMS.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={`text-sm font-medium hover:text-gray-200 transition-colors outline-none focus-visible:ring-2 focus-visible:ring-white/50 rounded-md px-2 py-1 ${
              pathname === item.href ? 'text-white' : 'text-gray-300'
            }`}
            aria-current={pathname === item.href ? 'page' : undefined}
          >
            {item.label}
          </Link>
        ))}
      </div>

      {/* Mobile Navigation */}
      <div className="md:hidden">
        <button
          className="p-2 hover:bg-white/10 rounded-lg transition-colors text-white outline-none focus-visible:ring-2 focus-visible:ring-white/50"
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
        </button>

        {isOpen && (
          <div 
            id="mobile-menu"
            className="absolute top-16 right-8 w-48 bg-white dark:bg-gray-800 rounded-lg shadow-lg py-2 z-50"
            role="menu"
            aria-orientation="vertical"
          >
            {MENU_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`block px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors outline-none focus-visible:bg-gray-100 dark:focus-visible:bg-gray-700 ${
                  pathname === item.href ? 'text-black dark:text-white font-medium' : 'text-gray-600 dark:text-gray-400'
                }`}
                onClick={() => setIsOpen(false)}
                role="menuitem"
                aria-current={pathname === item.href ? 'page' : undefined}
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
