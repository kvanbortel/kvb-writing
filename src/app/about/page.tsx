import Image from 'next/image';

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold mb-8">About Me</h1>
      <div className="grid md:grid-cols-[2fr_1fr] gap-12">
        <div className="space-y-6">
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            Hi, I&apos;m Kayla Van Bortel! I&apos;m a writer passionate about storytelling and creative expression. 
            I have been writing and researching the craft for years and now I&apos;m pursuing a Creative Writing minor
            and hunting down any writing groups I can. I&apos;m dedicated to 
            crafting compelling narratives that resonate with readers and transport them to worlds as lively as the
            ones that live in my mind.
          </p>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            When I&apos;m not writing, you can find me exploring local bookstores, camping in the Adirondacks, 
            skiing (whether on snow or water), playing soccer, or sitting in front of a glowing screen, a blanket
            wrapped around my shoulders, typing into terminal windows and my IDE of choice.
            I believe that every experience feeds into the stories we tell—and what a freeing rule that is to live by.
          </p>
        </div>
        <div className="relative aspect-[2/3] rounded-lg overflow-hidden bg-gray-100 dark:bg-gray-800">
          <Image
            src="/kvb-writing/Kayla2023.jpg"
            alt="Kayla Van Bortel"
            fill
            sizes="(min-width: 768px) 33vw, 100vw"
            priority
          />
        </div>
      </div>
    </div>
  );
} 
