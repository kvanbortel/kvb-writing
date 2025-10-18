import Image from 'next/image';
import type { Metadata } from "next";
import { CharacterCard } from '@/components/CharacterCard';

export const metadata: Metadata = {
  title: "Fantasy Novel Characters - Out of Nowhere",
  description: "Meet the characters from 'Out of Nowhere' - Kate, Luko, and Nikolas. Explore their visual development and character descriptions.",
  openGraph: {
    title: "Fantasy Novel Characters - Out of Nowhere | Kayla Writes",
    description: "Meet the characters from 'Out of Nowhere' - Kate, Luko, and Nikolas. Explore their visual development and character descriptions.",
  }
};

/**
 * Fantasy Novel Characters Page Component
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
export default function FantasyNovelCharactersPage() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-12">
      <div className="mb-12 space-y-4">
        <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-br from-gray-900 to-gray-600 dark:from-white dark:to-gray-400">
          Out of Nowhere Characters
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed max-w-3xl">
          Sometimes I imagine I&apos;ll turn the corner and they&apos;ll be there...
        </p>
      </div>

      {/* Character Cards Grid */}
      <div className="grid gap-24">
        {/* Kate */}
        <CharacterCard
          name="Kate"
          role="The Student"
          description="A young scholar whose ambition leads her into a world of danger and discovery. 
          She wants acceptance, but she&apos;s forced to cross the line."
          imageSrc="/kvb-writing/characters/Kate.png"
          imageAlt="Kate, a determined student, in a character portrait"
        />
        {/* Luko */}
        <CharacterCard
          name="Luko"
          role="The Professor / The Lord of Illusion"
          description="A respected professor at the magic academy whose greatest student returns with deadly intent.
          He&apos;s dutiful but petty, protective but strict, and forced to face the hardest decision of his life."
          imageSrc="/kvb-writing/characters/Luko.png"
          imageAlt="Luko, a distinguished professor, in a character portrait"
        />
        {/* Nikolas */}
        <CharacterCard
          name="Nikolas"
          role="The Mentor / The Lord of the Dead"
          description="Wholesome at times and frightening at others. Nikolas is deeply entangled with
          Luko and his former student. He&apos;s the greatest protector the city has left, but he&apos;s
          haunted... and afraid to admit that he might not be enough to save them."
          imageSrc="/kvb-writing/characters/Nikolas.png"
          imageAlt="Nikolas, the Lord of the Dead, in a detailed character portrait"
        />
      </div>
    </main>
  );
}
