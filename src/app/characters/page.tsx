import { ArrowRight, Users } from 'lucide-react';
import type { Metadata } from "next";
import { SummaryCard } from '@/components/SummaryCard';

export const metadata: Metadata = {
  title: "Characters",
  description: "Explore the characters from my writing projects. Meet the personalities that bring my stories to life through visual development and detailed descriptions.",
  openGraph: {
    title: "Characters | Kayla Writes",
    description: "Explore the characters from my writing projects. Meet the personalities that bring my stories to life through visual development and detailed descriptions.",
  }
};

/**
 * Characters Landing Page Component
 * 
 * Showcases character collections from different writing projects:
 * - Current character collections with visual previews
 * - Responsive grid layout
 * - Interactive character cards with hover effects
 * - Dark mode support
 * 
 * @component
 */
export default function CharactersPage() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-12">
      <div className="mb-12 space-y-4">
        <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-br from-gray-900 to-gray-600 dark:from-white dark:to-gray-400">
          Characters
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed max-w-3xl">
          Meet the characters that bring my stories to life. Visual development is an essential part of my creative process,
          helping me connect with each character on a deeper level.
        </p>
      </div>
      
      {/* Current Character Collections */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-8">Character Collections</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* Fantasy Novel Characters Card */}
          <SummaryCard
            href="/characters/fantasy-novel"
            icon={
              <Users className="w-6 h-6 text-purple-500" />
            }
            title="Out of Nowhere"
            subtitle="Fantasy Novel"
            description="Meet Kate, Luko, and Nikolas: Three complex characters whose intertwined stories 
            drive this fantasy tale of obsession, betrayal, and legacy."
            footer={
              <>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  <span className="text-sm text-gray-600 dark:text-gray-400">3 Characters</span>
                </div>
                <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-purple-500 group-hover:translate-x-1 transition-all" />
              </>
            }
          />
        </div>
      </section>
    </main>
  );
} 
