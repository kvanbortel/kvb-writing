'use client';

import { Menu, X, ChevronDown } from 'lucide-react';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';

const MENU_ITEMS = [
  { href: '/about', label: 'About' },
  { 
    href: '/projects', 
    label: 'Projects',
    dropdown: [
      { href: '/projects/fantasy-novel', label: 'Fantasy Novel' }
    ]
  },
  { 
    href: '/characters', 
    label: 'Characters',
    dropdown: [
      { href: '/characters/fantasy-novel', label: 'Fantasy Novel' }
    ]
  },
  { href: '/resources', label: 'Resources' },
  { href: '/contact', label: 'Contact' },
];

/**
 * Navigation Component
 * 
 * Main navigation menu featuring:
 * - Responsive desktop/mobile layouts
 * - Mobile hamburger menu with animations
 * - Active link highlighting
 * - Keyboard navigation support
 * - Escape key handling for mobile menu
 * - Focus management
 * 
 * @component
 */
export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState<string | null>(null);
  const [dropdownTimeout, setDropdownTimeout] = useState<NodeJS.Timeout | null>(null);
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
        setDropdownOpen(null);
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, []);


  // Handle keyboard navigation for dropdowns
  const handleDropdownKeyDown = (e: React.KeyboardEvent, item: typeof MENU_ITEMS[0]) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      if (dropdownOpen === item.href) {
        setDropdownOpen(null);
      } else {
        showDropdown(item.href);
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      showDropdown(item.href);
      // Make first dropdown item focusable and focus it
      setTimeout(() => {
        const firstDropdownItem = document.querySelector(`[data-dropdown="${item.href}"] a`);
        if (firstDropdownItem instanceof HTMLElement) {
          firstDropdownItem.setAttribute('tabIndex', '0');
          firstDropdownItem.focus();
        }
      }, 50);
    }
  };

  // Handle keyboard navigation within dropdown items
  const handleDropdownItemKeyDown = (e: React.KeyboardEvent, item: typeof MENU_ITEMS[0], index: number) => {
    if (!item.dropdown) return;
    const dropdownItems = item.dropdown;
    
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      const nextIndex = (index + 1) % dropdownItems.length;
      const nextItem = document.querySelector(`[data-dropdown="${item.href}"] a:nth-child(${nextIndex + 1})`);
      if (nextItem instanceof HTMLElement) {
        nextItem.setAttribute('tabIndex', '0');
        nextItem.focus();
      }
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      const prevIndex = index === 0 ? dropdownItems.length - 1 : index - 1;
      const prevItem = document.querySelector(`[data-dropdown="${item.href}"] a:nth-child(${prevIndex + 1})`);
      if (prevItem instanceof HTMLElement) {
        prevItem.setAttribute('tabIndex', '0');
        prevItem.focus();
      }
    } else if (e.key === 'Escape') {
      e.preventDefault();
      setDropdownOpen(null);
      // Return focus to the trigger button
      const triggerButton = document.querySelector(`[aria-haspopup="true"][aria-expanded="true"]`);
      if (triggerButton instanceof HTMLElement) {
        triggerButton.focus();
      }
    }
  };

  // Helper functions for dropdown management
  const showDropdown = (href: string) => {
    if (dropdownTimeout) {
      clearTimeout(dropdownTimeout);
      setDropdownTimeout(null);
    }
    setDropdownOpen(href);
  };

  const hideDropdown = () => {
    const timeout = setTimeout(() => {
      setDropdownOpen(null);
    }, 200);
    setDropdownTimeout(timeout);
  };

  const cancelHideDropdown = () => {
    if (dropdownTimeout) {
      clearTimeout(dropdownTimeout);
      setDropdownTimeout(null);
    }
  };

  return (
    <nav className="flex items-center" role="navigation" aria-label="Main navigation">
      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center gap-8">
        {MENU_ITEMS.map((item) => (
          <div key={item.href} className="relative flex items-center">
            {item.dropdown ? (
              <div
                className="relative"
                onMouseEnter={() => showDropdown(item.href)}
                onMouseLeave={hideDropdown}
              >
                <Link
                  href={item.href}
                  id={`menu-button-${item.href.replace('/', '-')}`}
                  className={`flex items-center gap-1 text-sm font-medium hover:text-gray-200 transition-colors outline-none focus-visible:ring-2 focus-visible:ring-white/50 rounded-md px-2 py-1 ${
                    pathname === item.href || pathname.startsWith(item.href + '/') ? 'text-white' : 'text-gray-300'
                  }`}
                  aria-expanded={dropdownOpen === item.href}
                  aria-haspopup="menu"
                  onFocus={() => showDropdown(item.href)}
                  onBlur={() => {
                    // Only close if focus is not moving to a dropdown item
                    setTimeout(() => {
                      const activeElement = document.activeElement;
                      const dropdownContainer = document.querySelector(`[data-dropdown="${item.href}"]`);
                      if (!dropdownContainer?.contains(activeElement)) {
                        setDropdownOpen(null);
                      }
                    }, 0);
                  }}
                  onKeyDown={(e) => handleDropdownKeyDown(e, item)}
                  tabIndex={0}
                >
                  {item.label}
                  <ChevronDown size={16} className="transition-transform duration-200" />
                </Link>
                {/* Invisible hover area to cover the gap */}
                {dropdownOpen === item.href && (
                  <div 
                    className="absolute top-full left-0 w-48 h-1 z-40"
                    onMouseEnter={cancelHideDropdown}
                    onMouseLeave={hideDropdown}
                  />
                )}
                {dropdownOpen === item.href && (
                  <div 
                    data-dropdown={item.href}
                    role="menu"
                    aria-labelledby={`menu-button-${item.href.replace('/', '-')}`}
                    className="absolute top-full left-0 w-48 bg-white dark:bg-gray-800 rounded-lg shadow-xl border border-gray-200 dark:border-gray-700 py-2 z-50"
                    style={{ marginTop: '1px' }}
                    onMouseEnter={cancelHideDropdown}
                    onMouseLeave={hideDropdown}
                  >
                    {item.dropdown.map((dropdownItem, index) => (
                      <Link
                        key={dropdownItem.href}
                        href={dropdownItem.href}
                        role="menuitem"
                        tabIndex={-1}
                        className={`block px-4 py-2.5 text-sm hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-colors outline-none focus-visible:bg-purple-50 dark:focus-visible:bg-purple-900/20 ${
                          pathname === dropdownItem.href 
                            ? 'text-purple-600 dark:text-purple-400 font-medium bg-purple-50 dark:bg-purple-900/20' 
                            : 'text-gray-700 dark:text-gray-300'
                        }`}
                        aria-current={pathname === dropdownItem.href ? 'page' : undefined}
                        onKeyDown={(e) => handleDropdownItemKeyDown(e, item, index)}
                      >
                        {dropdownItem.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                href={item.href}
                className={`text-sm font-medium hover:text-gray-200 transition-colors outline-none focus-visible:ring-2 focus-visible:ring-white/50 rounded-md px-2 py-1 ${
                  pathname === item.href ? 'text-white' : 'text-gray-300'
                }`}
                aria-current={pathname === item.href ? 'page' : undefined}
              >
                {item.label}
              </Link>
            )}
          </div>
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
              <div key={item.href}>
                {item.dropdown ? (
                  <div>
                    <div className="flex items-center justify-between">
                      <Link
                        href={item.href}
                        className={`flex-1 px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors outline-none focus-visible:bg-gray-100 dark:focus-visible:bg-gray-700 ${
                          pathname === item.href || pathname.startsWith(item.href + '/') ? 'text-black dark:text-white font-medium' : 'text-gray-600 dark:text-gray-400'
                        }`}
                        onClick={() => setIsOpen(false)}
                        role="menuitem"
                      >
                        {item.label}
                      </Link>
                      <button
                        className="px-2 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors outline-none focus-visible:bg-gray-100 dark:focus-visible:bg-gray-700"
                        onClick={() => setDropdownOpen(dropdownOpen === item.href ? null : item.href)}
                        aria-expanded={dropdownOpen === item.href}
                        aria-haspopup="true"
                      >
                        <ChevronDown size={16} className="transition-transform duration-200" />
                      </button>
                    </div>
                    {dropdownOpen === item.href && (
                      <div className="pl-4">
                        {item.dropdown.map((dropdownItem) => (
                          <Link
                            key={dropdownItem.href}
                            href={dropdownItem.href}
                            className={`block px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors outline-none focus-visible:bg-gray-100 dark:focus-visible:bg-gray-700 ${
                              pathname === dropdownItem.href ? 'text-black dark:text-white font-medium' : 'text-gray-600 dark:text-gray-400'
                            }`}
                            onClick={() => {
                              setIsOpen(false);
                              setDropdownOpen(null);
                            }}
                            role="menuitem"
                            aria-current={pathname === dropdownItem.href ? 'page' : undefined}
                          >
                            {dropdownItem.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
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
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
