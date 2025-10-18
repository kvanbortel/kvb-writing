import { ResourceCard } from "@/components/ResourceCard";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Writing Resources",
  description: "A curated collection of writing tools and resources, from thesauri to name generators, that help shape my creative process.",
  openGraph: {
    title: "Writing Resources | Kayla Writes",
    description: "A curated collection of writing tools and resources, from thesauri to name generators, that help shape my creative process.",
  }
};

/**
 * Resources Page Component
 * 
 * Showcases writing tools and resources:
 * - Curated collection of writing aids
 * - Interactive resource cards with hover states
 * - Categorized sections for easy navigation
 * - Accessible external links
 * - Dark mode compatible styling
 * 
 * @component
 */
export default function ResourcesPage() {
  const thesauri = [
    {
      name: "Historical Thesaurus of English",
      url: "https://ht.ac.uk/",
      description: "A unique resource mapping the evolution of English words throughout history, perfect for historical accuracy in writing."
    },
    {
      name: "Word Associations Network",
      url: "https://wordassociations.net/en",
      description: "Find word associations and related concepts, great for brainstorming and expanding vocabulary."
    },
    {
      name: "OneLook Thesaurus",
      url: "https://onelook.com/thesaurus/",
      description: "A versatile tool that finds synonyms, related words, and even lets you search by word descriptions."
    },
    {
      name: "Related Words",
      url: "https://relatedwords.org/",
      description: "Discover words connected by meaning and context, helpful for finding the perfect word choice."
    },
    {
      name: "WordHippo",
      url: "https://www.wordhippo.com/",
      description: "A comprehensive word tool for synonyms, antonyms, and word forms."
    }
  ];

  const nameGenerators = [
    {
      name: "Baby Names Pedia",
      url: "https://www.babynamespedia.com/",
      description: "Extensive database of names with meanings and origins, great for contemporary character names."
    },
    {
      name: "Behind the Name",
      url: "https://www.behindthename.com/",
      description: "Detailed etymological history of names from various cultures and time periods."
    },
    {
      name: "Fantasy Name Generators",
      url: "https://www.fantasynamegenerators.com/",
      description: "Generate names for any genre or setting, from fantasy to sci-fi."
    }
  ];

  return (
    <main className="max-w-4xl mx-auto px-6 py-12">
      <div className="mb-12 space-y-4">
        <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-br from-gray-900 to-gray-600 dark:from-white dark:to-gray-400">
          Writing Resources
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed max-w-3xl">
          Discover some of my favorite writing tools. From finding the perfect word to naming characters,
          these resources are valuable for my creative process, and perhaps you&apos;ll find them useful too.
        </p>
      </div>

      <section className="mb-12" aria-labelledby="thesauri-heading">
        <h2 id="thesauri-heading" className="text-2xl font-semibold mb-6">Thesauri & Word Tools</h2>
        <div className="grid gap-6" role="list">
          {thesauri.map((tool) => (
            <ResourceCard
              key={tool.name}
              href={tool.url}
              title={tool.name}
              description={tool.description}
            />
          ))}
        </div>
      </section>

      <section aria-labelledby="names-heading">
        <h2 id="names-heading" className="text-2xl font-semibold mb-6">Character Name Resources</h2>
        <div className="grid gap-6" role="list">
          {nameGenerators.map((tool) => (
            <ResourceCard
              key={tool.name}
              href={tool.url}
              title={tool.name}
              description={tool.description}
            />
          ))}
        </div>
      </section>
    </main>
  );
} 
