export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold mb-8">About Me</h1>
      <div className="grid md:grid-cols-[2fr_1fr] gap-12">
        <div className="space-y-6">
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            Hi, I&apos;m Kayla! I&apos;m a writer passionate about storytelling and creative expression. 
            With a background in literature and creative writing, I&apos;ve dedicated my career to 
            crafting compelling narratives that resonate with readers.
          </p>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            When I&apos;m not writing, you can find me exploring local bookstores, hiking in nature, 
            or experimenting with new recipes in my kitchen. I believe that every experience 
            feeds into the stories we tell.
          </p>
          <div className="space-y-2">
            <h2 className="text-2xl font-semibold">What I Do</h2>
            <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2">
              <li>Creative Writing</li>
              <li>Content Strategy</li>
              <li>Editorial Services</li>
              <li>Writing Workshops</li>
            </ul>
          </div>
        </div>
        <div className="relative h-64 md:h-auto rounded-lg overflow-hidden bg-gray-100 dark:bg-gray-800">
          <div className="absolute inset-0 flex items-center justify-center text-gray-400">
            [Profile Photo]
          </div>
        </div>
      </div>
    </div>
  );
} 
