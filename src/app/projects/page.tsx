import { ArrowRight, BookOpen } from 'lucide-react';
import type { Metadata } from "next";
import { SummaryCard } from '@/components/SummaryCard';

export const metadata: Metadata = {
  title: "Projects",
  description: "Explore my current and upcoming writing projects, from fantasy novels to other creative works.",
  openGraph: {
    title: "Projects | Kayla Writes",
    description: "Explore my current and upcoming writing projects, from fantasy novels to other creative works.",
  }
};

/**
 * Projects Landing Page Component
 * 
 * Showcases all writing projects with project cards:
 * - Current active projects with progress tracking
 * - Responsive grid layout
 * - Interactive project cards with hover effects
 * - Dark mode support
 * 
 * @component
 */
export default function ProjectsPage() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-12">
      <div className="mb-12 space-y-4">
        <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-br from-gray-900 to-gray-600 dark:from-white dark:to-gray-400">
          Projects
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed max-w-3xl">
          Explore my writing projects and view my progress.
        </p>
      </div>
      
      {/* Current Projects */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-8">Current Projects</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* Fantasy Novel Card */}
          <SummaryCard
            href="/projects/fantasy-novel"
            icon={<BookOpen className="w-6 h-6 text-purple-500" />}
            title="Out of Nowhere"
            subtitle="Fantasy Novel"
            description="A fantasy novel following a young scholar in over her head and a magic academy professor 
            facing the return of one of his greatest students... turned murderer."
            footer={
              <>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  <span className="text-sm text-gray-600 dark:text-gray-400">First Draft Complete</span>
                </div>
                <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-purple-500 group-hover:translate-x-1 transition-all" />
              </>
            }
          />
        </div>
      </section>
    </main>
  );
} 
