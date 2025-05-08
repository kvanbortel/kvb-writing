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
            Hi, I&apos;m Kayla Van Bortel, a fiction writer from upstate New York. I&apos;m currently
            pursuing a Creative Writing minor and love engaging with writing communities wherever I go.
          </p>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-justify">
            My stories blend fantasy with elements of horror, suspense, and the gothic, balancing eerie atmospheres
            and dark questions with softer moments and feet-kicking banter. I love crafting vivid worlds and 
            layered characters that linger long after the final page.
          </p>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-justify">
            When I&apos;m not writing, I&apos;m likely wandering indie and antiquarian bookstores, camping in the
            Adirondacks, or programming with a cozy blanket wrapped around my shoulders. I believe stories grow
            from curiosity, and that every strange, joyful, or quiet moment can shape the next great idea.
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
