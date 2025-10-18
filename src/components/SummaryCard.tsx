import React from "react";
import Link from "next/link";

interface SummaryCardProps {
  href?: string;
  icon: React.ReactNode;
  title: string;
  subtitle?: string;
  description: string;
  footer?: React.ReactNode;
}

/**
 * Summary Card Component
 * 
 * Displays a summary card with:
 * - Optional link wrapping the entire card
 * - Icon, title, subtitle, description, and footer sections
 * - Hover effects for interactivity
 * - Responsive design with padding and rounded corners
 * 
 * @component
 */
export function SummaryCard({
  href,
  icon,
  title,
  subtitle,
  description,
  footer
}: SummaryCardProps) {
  const content = (
    <div className="space-y-4">
      <div className="flex items-center gap-3">
        <div className="p-3 bg-purple-100 dark:bg-purple-900/30 rounded-xl">
          {icon}
        </div>
        <div>
          <h3 className="text-xl font-bold group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
            {title}
          </h3>
          {subtitle && <p className="text-sm text-gray-500 dark:text-gray-400">{subtitle}</p>}
        </div>
      </div>
      <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{description}</p>
      {footer && <div className="flex items-center justify-between pt-2">{footer}</div>}
    </div>
  );

  if (href) {
    return (
      <Link
        href={href}
        className="group bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
      >
        {content}
      </Link>
    );
  }
  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 border-2 border-dashed border-gray-200 dark:border-gray-700">
      {content}
    </div>
  );
}
