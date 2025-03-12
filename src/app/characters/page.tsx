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
      <h1 className="text-4xl font-bold mb-8">Character Art</h1>
      <p className="text-gray-600 dark:text-gray-300 mb-12">
        Visual development is an important part of my writing process. 
        Here are a few of my characters from my writing.
      </p>

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
                  Her journey from student to key player in the unfolding events drives the story&apos;s 
                  central conflict.
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
                  A respected professor at the magic academy who faces the return of one of his 
                  greatest students with deadly intent. His complex relationship with both Kate and 
                  Nikolas adds layers of tension to the narrative.
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
                  Wholesome at times and scary at others. Nikolas&apos;s deep history and entanglement with
                  Luko and his past student drive much of the emotional conflict.
                </p>
              </div>
            </div>
          </article>
        </div>
      </section>
    </main>
  );
} 
