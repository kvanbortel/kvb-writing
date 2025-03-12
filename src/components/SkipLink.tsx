/**
 * Skip Link Component
 * 
 * Accessibility component featuring:
 * - Screen reader only visibility by default
 * - Visible on focus for keyboard navigation
 * - Styled to match site theme
 * - High contrast for visibility
 * - Z-index management for overlay
 * 
 * @component
 */
export function SkipLink() {
  return (
    <a
      href="#main-content"
      className="sr-only focus-visible:not-sr-only focus-visible:fixed focus-visible:top-4 focus-visible:left-4 bg-purple-500 text-white px-4 py-2 rounded-md z-50 outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
    >
      Skip to main content
    </a>
  );
} 
