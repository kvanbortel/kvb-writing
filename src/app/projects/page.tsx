export default function ProjectsPage() {
  // Project variables
  const currentWordCount = 82761;
  const targetWordCount = 110000;
  const progressPercentage = Math.round((currentWordCount / targetWordCount) * 100);

  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold mb-8">Current Projects</h1>
      
      {/* Project Card */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 mb-8">
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">Out of Nowhere (OON)</h2>
          
          {/* Progress Section */}
          <div className="flex items-center gap-4">
            <div className="bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-100 px-4 py-1 rounded-full text-sm font-medium">
              First Draft (Rewrite)
            </div>
            <div className="text-gray-600 dark:text-gray-300 font-mono">
              {currentWordCount.toLocaleString()} words
            </div>
          </div>

          {/* Progress Bar */}
          <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
            <div 
              className="bg-purple-500 h-2.5 rounded-full transition-all duration-500" 
              style={{ width: `${progressPercentage}%` }}
              title={`${progressPercentage}% of target word count`}
            />
          </div>

          {/* Current Stage Description */}
          <div className="prose dark:prose-invert, space-y-6">
            <p className="text-gray-600 dark:text-gray-300">
              This fantasy novel follows a young scholar in over her head in the city of her dreams
              and a magic academy professor facing the return of one of his greatest students...
              who has the intent to kill. Welcome to the drama and human side 250-years-young
              legendary oligarchs, a city as perilous as it is full of promise, and characters who run
              as deep as their secrets. I hope you fall in love with them as much as I have.
            </p>
            <p className="text-gray-600 dark:text-gray-300">
              The first draft totaled 138,000 words, and then I tore it apart over the course of a month.
              Tweaks didn&apos;t cut the grand image I had in mind, so now I&apos;m working on a complete rewrite
              and loving every moment.
            </p>
            <p className="text-gray-600 dark:text-gray-300">
              I&apos;m knee-deep in balancing carefully planned character arcs, layered themes, immersive settings,
              and intimate emotions refined over years of dedication to this project. I&apos;m in love, I&apos;m
              obsessed, and this rewrite is the one.
            </p>
          </div>

          {/* Project Details */}
          <dl className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <dt className="text-gray-500 dark:text-gray-400">Target Word Count</dt>
              <dd className="font-medium text-purple-600 dark:text-purple-300">{targetWordCount.toLocaleString()}</dd>
            </div>
            <div>
              <dt className="text-gray-500 dark:text-gray-400">Started</dt>
              <dd className="font-medium text-purple-600 dark:text-purple-300">May 2024</dd>
            </div>
          </dl>

          {/* Progress Stats */}
          <div className="text-sm text-gray-500 dark:text-gray-400">
            <span className="text-purple-600 dark:text-purple-300 font-medium">{progressPercentage}% complete</span> • {(targetWordCount - currentWordCount).toLocaleString()} words remaining
          </div>
        </div>
      </div>

      {/* Future Projects Section */}
      <div className="border-t border-gray-200 dark:border-gray-700 pt-8">
        <h2 className="text-2xl font-semibold mb-4">Future Projects</h2>
        <p className="text-gray-600 dark:text-gray-300">
          More exciting projects coming soon! Stay tuned for updates.
        </p>
      </div>
    </div>
  );
} 
