import Image from 'next/image';
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Character Art | Kayla Writes",
  description: "Explore the visual development of characters from 'Out of Nowhere' and other writing projects through original artwork and sketches.",
  openGraph: {
    title: "Character Art | Kayla Writes",
    description: "Explore the visual development of characters from 'Out of Nowhere' and other writing projects through original artwork and sketches.",
  }
};

/**
 * Characters Page Component
 * 
 * Displays character artwork and descriptions for the "Out of Nowhere" project.
 * Layout is responsive with different arrangements for mobile and desktop:
 * - Mobile: Text above, image below
 * - Desktop: Image left (fixed), text right
 * 
 * Images use Next.js Image component with aspect ratio 3:4 for consistent sizing.
 * 
 * @component
 */
export default function CharactersPage() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-12">
      <div className="mb-12 space-y-4">
        <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-br from-gray-900 to-gray-600 dark:from-white dark:to-gray-400">
          Character Art
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed max-w-3xl">
          Meet the characters that bring my stories to life. Visual development is an essential part of my creative process,
          helping me connect with each character on a deeper level.
        </p>
      </div>

      {/* Project Section with Status Badge */}
      <section className="space-y-16" aria-labelledby="oon-heading">
        <div className="text-center">
          <div className="inline-flex items-center gap-4 px-6 py-2 rounded-2xl bg-purple-50 dark:bg-purple-900/10">
            <h2 id="oon-heading" className="text-2xl font-semibold">Out of Nowhere</h2>
            <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-100 rounded-full text-sm font-medium">
              In Progress
            </span>
          </div>
        </div>

        {/* Character Cards Grid */}
        <div className="grid gap-24">
          {/* Kate */}
          <article className="relative">
            <div className="grid md:grid-cols-2 gap-12 items-start">
              <div className="relative aspect-[3/4] rounded-xl overflow-hidden bg-gray-100 dark:bg-gray-800 shadow-xl order-2 md:order-1">
                <Image
                  src="/kvb-writing/characters/Kate.png"
                  alt="Kate, a determined student, in a character portrait"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div className="space-y-6 order-1 md:order-2">
                <div className="space-y-2">
                  <h3 className="text-3xl font-medium text-purple-600 dark:text-purple-400">Kate</h3>
                  <span className="inline-block px-4 py-1 bg-purple-50 dark:bg-purple-900/20 text-purple-700 dark:text-purple-300 rounded-full text-sm">
                    The Student
                  </span>
                </div>
                <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed text-justify">
                  A young scholar whose ambition leads her into a world of danger and discovery. 
                  She wants acceptance, but she&apos;s forced to cross the line.
                </p>
              </div>
            </div>
          </article>

          {/* Luko */}
          <article className="relative">
            <div className="grid md:grid-cols-2 gap-12 items-start">
              <div className="relative aspect-[3/4] rounded-xl overflow-hidden bg-gray-100 dark:bg-gray-800 shadow-xl order-2 md:order-1">
                <Image
                  src="/kvb-writing/characters/Luko.png"
                  alt="Luko, a distinguished professor, in a character portrait"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="space-y-6 order-1 md:order-2">
                <div className="space-y-2">
                  <h3 className="text-3xl font-medium text-purple-600 dark:text-purple-400">Luko</h3>
                  <span className="inline-block px-4 py-1 bg-purple-50 dark:bg-purple-900/20 text-purple-700 dark:text-purple-300 rounded-full text-sm">
                    The Professor / The Lord of Illusion
                  </span>
                </div>
                <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed text-justify">
                  A respected professor at the magic academy whose greatest student returns with deadly intent.
                  He&apos;s dutiful but petty, protective but strict, and forced to face the hardest decision of his
                  life.
                </p>
              </div>
            </div>
          </article>

          {/* Nikolas */}
          <article className="relative">
            <div className="grid md:grid-cols-2 gap-12 items-start">
              <div className="relative aspect-[3/4] rounded-xl overflow-hidden bg-gray-100 dark:bg-gray-800 shadow-xl order-2 md:order-1">
                <Image
                  src="/kvb-writing/characters/Nikolas.png"
                  alt="Nikolas, the Lord of the Dead, in a detailed character portrait"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="space-y-6 order-1 md:order-2">
                <div className="space-y-2">
                  <h3 className="text-3xl font-medium text-purple-600 dark:text-purple-400">Nikolas</h3>
                  <span className="inline-block px-4 py-1 bg-purple-50 dark:bg-purple-900/20 text-purple-700 dark:text-purple-300 rounded-full text-sm">
                    The Mentor / The Lord of the Dead
                  </span>
                </div>
                <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed text-justify">
                  Wholesome at times and frightening at others. Nikolas is deeply entangled with
                  Luko and his former student. He&apos;s the greatest protector the city has left, but he&apos;s
                  haunted... and afraid to admit that he might not be enough to save them.
                </p>
              </div>
            </div>
          </article>
        </div>
      </section>
    </main>
  );
} 
