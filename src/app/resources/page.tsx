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
    <div className="max-w-4xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold mb-8">Writing Resources</h1>
      <p className="text-gray-600 dark:text-gray-300 mb-12">
        Here are some of my favorite tools that help me in my writing journey. 
        From finding the perfect word to naming characters, these resources have 
        become an essential part of my creative process.
      </p>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6">Thesauri & Word Tools</h2>
        <div className="grid gap-6">
          {thesauri.map((tool) => (
            <div 
              key={tool.name}
              className="p-6 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-purple-500 dark:hover:border-purple-500 transition-colors"
            >
              <a 
                href={tool.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <h3 className="text-xl font-medium mb-2 text-purple-500">{tool.name}</h3>
                <p className="text-gray-600 dark:text-gray-300">{tool.description}</p>
              </a>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-6">Character Name Resources</h2>
        <div className="grid gap-6">
          {nameGenerators.map((tool) => (
            <div 
              key={tool.name}
              className="p-6 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-purple-500 dark:hover:border-purple-500 transition-colors"
            >
              <a 
                href={tool.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <h3 className="text-xl font-medium mb-2 text-purple-500">{tool.name}</h3>
                <p className="text-gray-600 dark:text-gray-300">{tool.description}</p>
              </a>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
} 
