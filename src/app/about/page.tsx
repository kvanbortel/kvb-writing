import Image from 'next/image';
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Me",
  description: "Learn about Kayla Van Bortel, a passionate writer exploring storytelling through fantasy novels, short fiction, and interactive narratives. Creative Writing student and avid storyteller.",
  openGraph: {
    title: "About Kayla Van Bortel | Kayla Writes",
    description: "Learn about Kayla Van Bortel, a passionate writer exploring storytelling through fantasy novels, short fiction, and interactive narratives. Creative Writing student and avid storyteller.",
  }
};

export default function AboutPage() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold mb-8">About Me</h1>
      <div className="grid md:grid-cols-[2fr_1fr] gap-12">
        <article className="space-y-6">
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            Hi, I&apos;m Kayla Van Bortel! I&apos;m a lifelong storyteller from upstate New York where I&apos;m 
            currently attending Rochester Institute of Technology.
            I have been writing and researching the craft for years and now I&apos;m pursuing a Creative Writing minor
            and hunting down any writing groups I can. I&apos;m dedicated to 
            crafting compelling narratives that resonate with readers and transport them to worlds as lively as the
            ones that live in my mind.
          </p>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            When I&apos;m not writing, you&apos;ll probably find me exploring local bookstores, camping in the
            Adirondacks, skiing (on snow or water, depending on the season), playing soccer, or sitting in front of a
            glowing screen, a blanket wrapped around my shoulders, typing into terminal windows and my IDE of choice.
            I believe every experience feeds into the stories we tell—and what a freeing rule that is to live by.
          </p>
        </article>
        <figure className="relative aspect-[2/3] rounded-lg overflow-hidden bg-gray-100 dark:bg-gray-800">
          <Image
            src="/kvb-writing/Kayla2023-small.png"
            alt="Portrait of Kayla Van Bortel, a writer passionate about storytelling and creative expression"
            fill
            sizes="(min-width: 768px) 33vw, 100vw"
            priority
            className="object-cover"
          />
        </figure>
      </div>
    </main>
  );
} 
