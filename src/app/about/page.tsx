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

/**
 * About Page Component
 * 
 * Personal biography page featuring:
 * - Two-column layout with text and image on desktop
 * - Responsive design that stacks on mobile
 * - Optimized profile image with priority loading
 * - Dark mode compatible styling
 * 
 * @component
 */
export default function AboutPage() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-12">
      <div className="mb-12 space-y-4">
        <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-br from-gray-900 to-gray-600 dark:from-white dark:to-gray-400">
          About Me
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed max-w-3xl">
          Get to know the person behind the stories.
        </p>
      </div>
      <div className="grid md:grid-cols-[2fr_1fr] gap-12">
        <article className="space-y-6">
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-justify">
            Hi, I&apos;m Kayla Van Bortel! I&apos;m a lifelong storyteller from upstate New York, where I&apos;m
            pursuing a Creative Writing minor and engaging with writing communities whereever I go.
          </p>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-justify">
            I&apos;m dedicated to crafting immersive narratives with dynamic characters and explorations
            of the gripping questions that unfold. Though I&apos;m primarily a fantasy writer, I love
            weaving elements of horror, suspense, and gothic fiction into my stories, balancing eerie atmospheres with
            softer moments.
          </p>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-justify">
            When I&apos;m not writing, you can find me exploring bookstores, camping in the
            Adirondacks, skiing (on snow or water, depending on the season), or sitting in front of a glowing screen,
            a blanket wrapped around my shoulders, programming in my IDE of choice. I believe every
            experience feeds into the stories we tell, and embracing that idea makes life all the more exciting.
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
