import { Target, Calendar } from 'lucide-react';
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Current Projects",
  description: "Follow the progress of 'Out of Nowhere (OON)', a fantasy novel about a young scholar and a magic academy professor, along with other upcoming writing projects.",
  openGraph: {
    title: "Current Projects | Kayla Writes",
    description: "Follow the progress of 'Out of Nowhere (OON)', a fantasy novel about a young scholar and a magic academy professor, along with other upcoming writing projects.",
  }
};

/**
 * Projects Page Component
 * 
 * Showcases current and future writing projects:
 * - Project card with detailed progress tracking
 * - Interactive progress bar with percentage
 * - Project metadata (word count, target, start date)
 * - Responsive layout with icon-based data display
 * - Dark mode support with themed status badges
 * 
 * @component
 */
export default function ProjectsPage() {
  // Project variables
  const currentWordCount = 105196;
  const targetWordCount = 120000;
  const progressPercentage = Math.round((currentWordCount / targetWordCount) * 100);

  return (
    <main className="max-w-4xl mx-auto px-6 py-12">
      <div className="mb-12 space-y-4">
        <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-br from-gray-900 to-gray-600 dark:from-white dark:to-gray-400">
          Current Projects
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed max-w-3xl">
          Follow along with my writing journey as I craft stories that blend magic, mystery, and human connection.
          Here you can track my progress and get insights into my creative process.
        </p>
      </div>
      
      {/* Project Card */}
      <article className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 mb-12">
        <div className="space-y-8">
          {/* Header Section */}
          <div className="space-y-4">
            <h2 className="text-3xl font-bold">Out of Nowhere</h2>
            <div className="flex flex-wrap items-center gap-4">
              <div className="bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-100 px-4 py-1.5 rounded-full text-sm font-medium" role="status">
                First Draft (Rewrite)
              </div>
              <div className="text-gray-600 dark:text-gray-300 font-mono text-sm tracking-tight" aria-label={`Current word count: ${currentWordCount.toLocaleString()} words`}>
                {currentWordCount.toLocaleString()} words
              </div>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="space-y-2">
            <div 
              role="progressbar" 
              aria-valuenow={progressPercentage} 
              aria-valuemin={0} 
              aria-valuemax={100}
              aria-label={`Writing progress: ${progressPercentage}% of target word count`}
              className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3"
            >
              <div 
                className="bg-purple-500 h-3 rounded-full transition-all duration-500" 
                style={{ width: `${progressPercentage}%` }}
              />
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-purple-600 dark:text-purple-300 font-medium">{progressPercentage}% complete</span>
              <span className="text-gray-500 dark:text-gray-400">{(targetWordCount - currentWordCount).toLocaleString()} words remaining</span>
            </div>
          </div>

          {/* Project Description */}
          <div className="prose dark:prose-invert max-w-none space-y-4">
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-justify">
              This fantasy novel follows a young scholar in over her head in the city of her dreams
              and a magic academy professor facing the return of one of his greatest students...
              who has the intent to kill. Welcome to the drama and human side 250-years-young
              legendary oligarchs, a city as perilous as it is full of promise, and characters who run
              as deep as their secrets. I hope you fall in love with them as much as I have.
            </p>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-justify">
              The first draft totaled 138,000 words, and then I tore it apart over the course of a month.
              Tweaks didn&apos;t cut the grand image I had in mind, so now I&apos;m working on a complete rewrite
              and loving every moment.
            </p>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-justify">
              I&apos;m knee-deep in balancing carefully planned character arcs, layered themes, immersive settings,
              and intimate emotions refined over years of dedication to this project. I&apos;m in love, I&apos;m
              obsessed, and this rewrite is the one.
            </p>
          </div>

          {/* Project Details */}
          <div className="grid sm:grid-cols-2 gap-6 pt-4 border-t border-gray-200 dark:border-gray-700">
            <div className="flex items-center gap-3">
              <div className="p-2.5 bg-purple-50 dark:bg-purple-900/30 rounded-lg">
                <Target className="w-5 h-5 text-purple-500" aria-hidden="true" />
              </div>
              <div>
                <dt className="text-sm text-gray-500 dark:text-gray-400">Target Word Count</dt>
                <dd className="font-medium text-purple-600 dark:text-purple-300">{targetWordCount.toLocaleString()}</dd>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="p-2.5 bg-purple-50 dark:bg-purple-900/30 rounded-lg">
                <Calendar className="w-5 h-5 text-purple-500" aria-hidden="true" />
              </div>
              <div>
                <dt className="text-sm text-gray-500 dark:text-gray-400">Started</dt>
                <dd className="font-medium text-purple-600 dark:text-purple-300">May 2024</dd>
              </div>
            </div>
          </div>
        </div>
      </article>

      {/* Future Projects Section */}
      <section className="border-t border-gray-200 dark:border-gray-700 pt-12">
        <h2 className="text-2xl font-semibold mb-6">Future Projects</h2>
        <p className="text-gray-600 dark:text-gray-300">
          More exciting projects coming soon! Stay tuned for updates.
        </p>
      </section>
    </main>
  );
} 
