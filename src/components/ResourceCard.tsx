import React from "react";

interface SummaryCardProps {
    href: string;
    title: string;
    description: string;
    children?: React.ReactNode;
}

/**
 * Resource Card Component
 * 
 * Displays a card linking to an external resource with:
 * - Title and description
 * - Hover effects for interactivity
 * - Accessibility features for screen readers
 * 
 * @component
 */
export function ResourceCard({
    href,
    title,
    description,
    children
}: SummaryCardProps) {
    return (
        <div className="rounded-lg border border-gray-200 dark:border-gray-700 hover:border-purple-500 dark:hover:border-purple-500 transition-colors group"
            role="listitem"
        >
            <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="block p-6 focus:outline-none focus:ring-2 focus:ring-purple-500 rounded-lg focus-visible:ring-2 focus-visible:ring-purple-500 focus-visible:ring-offset-4 dark:focus-visible:ring-offset-gray-900"
            aria-label={`Visit ${title} (opens in new tab)`}
            >
            <h3 className="text-xl font-medium mb-2 text-purple-500 group-hover:text-purple-600 transition-colors">
                {title}
            </h3>
            <p className="text-gray-600 dark:text-gray-300">{description}</p>
            {children}
            </a>
        </div>
    );
}
