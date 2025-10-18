import { Target, Calendar, BookOpen } from 'lucide-react';
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fantasy Novel - Out of Nowhere",
  description: "Follow the progress of 'Out of Nowhere (OON)', a fantasy novel about a young scholar and a magic academy professor.",
  openGraph: {
    title: "Fantasy Novel - Out of Nowhere | Kayla Writes",
    description: "Follow the progress of 'Out of Nowhere (OON)', a fantasy novel about a young scholar and a magic academy professor.",
  }
};

/**
 * Fantasy Novel Page Component
 * 
 * Dedicated page for the "Out of Nowhere" fantasy novel project:
 * - First draft completion status with exceeded word count
 * - Developmental editing progress tracking
 * - Detailed project information and timeline
 * - Responsive layout with progress visualization
 * 
 * @component
 */
export default function FantasyNovelPage() {
  // Project variables
  const currentWordCount = 134675;
  const targetWordCount = 120000;
  const progressPercentage = Math.round((currentWordCount / targetWordCount) * 100);
  
  // Developmental editing variables
  const currentChapter = 23;
  const totalChapters = 66;
  const editingProgressPercentage = Math.round((currentChapter / totalChapters) * 100);

  return (
    <main className="max-w-4xl mx-auto px-6 py-12">
      <div className="mb-12 space-y-4">
        <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-br from-gray-900 to-gray-600 dark:from-white dark:to-gray-400">
          Out of Nowhere
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed max-w-3xl">
          A fantasy novel following a young scholar in over her head and a magic academy professor 
          facing the return of one of his greatest students... turned murderer.
        </p>
      </div>
      
      {/* Story Overview */}
      <article className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 mb-8">
        <div className="space-y-6">
          <h2 className="text-3xl font-bold">Story Overview</h2>
          <div className="prose dark:prose-invert max-w-none space-y-4">
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-justify">
              This fantasy novel follows a young scholar in over her head in the city of her dreams
              and a magic academy professor facing the return of one of his greatest students...
              turned murderer. Welcome to the drama and banter of 250-years-young
              legendary oligarchs, a city as perilous as it is full of promise, and characters who run
              as deep as their secrets.
            </p>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-justify">
              The story explores themes of grief, betrayal, obsession, and control. But in Lucium,
              sometimes the best connections are found in the dark.
            </p>
          </div>
        </div>
      </article>

      {/* First Draft Section */}
      <article className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 mb-8">
        <div className="space-y-8">
          {/* Header Section */}
          <div className="space-y-4">
            <h2 className="text-3xl font-bold">First Draft (Rewrite)</h2>
            <div className="flex flex-wrap items-center gap-4">
              <div className="bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-100 px-4 py-1.5 rounded-full text-sm font-medium" role="status">
                ✓ Complete
              </div>
              <div className="text-gray-600 dark:text-gray-300 font-mono text-sm tracking-tight" aria-label={`Final word count: ${currentWordCount.toLocaleString()} words`}>
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
              className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 relative"
            >
              <div 
                className="bg-purple-500 h-3 rounded-full transition-all duration-500" 
                style={{ width: `${Math.min(progressPercentage, 100)}%` }}
              />
              {progressPercentage > 100 && (
                <div 
                  className="bg-purple-700 h-3 rounded-full transition-all duration-500 absolute top-0 left-0" 
                  style={{ width: `${Math.min(progressPercentage - 100, 100)}%` }}
                />
              )}
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-purple-600 dark:text-purple-300 font-medium">
                {progressPercentage}% complete {progressPercentage > 100 ? `(+${(currentWordCount - targetWordCount).toLocaleString()} words)` : ''}
              </span>
              <span className="text-gray-500 dark:text-gray-400">
                {progressPercentage >= 100 ? 'Target exceeded!' : `${(targetWordCount - currentWordCount).toLocaleString()} words remaining`}
              </span>
            </div>
          </div>

          {/* Project Description */}
          <div className="prose dark:prose-invert max-w-none space-y-4">
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-justify">
              The first draft totaled 138,000 words, and then I tore it apart over the course of a month.
              Tweaks didn&apos;t cut the grand image I had in mind, so I worked on a complete rewrite
              and ended up loving every moment.
            </p>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-justify">
              I was knee-deep in balancing carefully planned character arcs, layered themes, immersive settings,
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

      {/* Developmental Editing Section */}
      <article className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">
        <div className="space-y-8">
          {/* Header Section */}
          <div className="space-y-4">
            <h2 className="text-3xl font-bold">Developmental Editing</h2>
            <div className="flex flex-wrap items-center gap-4">
              <div className="bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-100 px-4 py-1.5 rounded-full text-sm font-medium" role="status">
                In Progress
              </div>
              <div className="text-gray-600 dark:text-gray-300 font-mono text-sm tracking-tight" aria-label={`Chapter progress: ${currentChapter} of ${totalChapters} chapters`}>
                Chapter {currentChapter} of {totalChapters}
              </div>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="space-y-2">
            <div 
              role="progressbar" 
              aria-valuenow={editingProgressPercentage} 
              aria-valuemin={0} 
              aria-valuemax={100}
              aria-label={`Editing progress: ${editingProgressPercentage}% of chapters completed`}
              className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3"
            >
              <div 
                className="bg-purple-500 h-3 rounded-full transition-all duration-500" 
                style={{ width: `${editingProgressPercentage}%` }}
              />
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-purple-600 dark:text-purple-300 font-medium">{editingProgressPercentage}% complete</span>
              <span className="text-gray-500 dark:text-gray-400">{totalChapters - currentChapter} chapters remaining</span>
            </div>
          </div>

          {/* Editing Description */}
          <div className="prose dark:prose-invert max-w-none space-y-4">
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-justify">
              I had never seriously edited a project before, so this was new ground. It&apos;s satisfying to imagine
              shaping a sculpture in the editing phase. I need to get the larger features right before the fine
              detail work and eventually the final polish.
            </p>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-justify">
              I started by rereading the whole draft on my eReader and took notes as a reader. For each chapter, I
              recorded my impressions and my reactions/ideas, using pencil and paper. Switching up the medium
              helps me take off my critical editor hat who told me last time to throw the whole thing out and
              restart. I did not want to throw the whole thing out and restart again.
            </p>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-justify">
              Huzzah! It wasn&apos;t bad! I expanded on some ideas, named and color-coded some plot threads I wanted
              to add or strengthen, and created broad notes for things I wanted to change in each chapter. At the
              same time, I struck out chapters and added new ones in this new outline.
            </p>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-justify">
              So here I go! I&apos;m also trying to cut a few tens of thousands of words. It can be really satisfying
              to cut, cut, cut &mdash; Hah! I don't have to edit you later because you're <i>gone!</i> But as nice as
              that is... I also really like to <i>write.</i> It's a balance.
            </p>
          </div>

          {/* Editing Details */}
          <div className="grid sm:grid-cols-2 gap-6 pt-4 border-t border-gray-200 dark:border-gray-700">
            <div className="flex items-center gap-3">
              <div className="p-2.5 bg-purple-50 dark:bg-purple-900/30 rounded-lg">
                <BookOpen className="w-5 h-5 text-purple-500" aria-hidden="true" />
              </div>
              <div>
                <dt className="text-sm text-gray-500 dark:text-gray-400">Total Chapters</dt>
                <dd className="font-medium text-purple-600 dark:text-purple-300">{totalChapters}</dd>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="p-2.5 bg-purple-50 dark:bg-purple-900/30 rounded-lg">
                <Calendar className="w-5 h-5 text-purple-500" aria-hidden="true" />
              </div>
              <div>
                <dt className="text-sm text-gray-500 dark:text-gray-400">Started</dt>
                <dd className="font-medium text-purple-600 dark:text-purple-300">July 2025</dd>
              </div>
            </div>
          </div>
        </div>
      </article>
    </main>
  );
}
