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
          <div className="prose dark:prose-invert">
            <p className="text-gray-600 dark:text-gray-300">
              Currently working through the first draft, focusing on getting the main plot points 
              and character arcs established. The story follows a young woman who discovers she 
              has the ability to travel through parallel universes, but each jump comes with 
              unexpected consequences.
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
