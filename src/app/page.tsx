import Link from "next/link";

export default function Home() {
  return (
    <div className="grid grid-rows-[1fr_20px] items-center justify-items-center min-h-[calc(100vh-64px)] p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="max-w-4xl w-full mx-auto">
        <div className="space-y-8">
          <h1 className="text-5xl font-bold">Welcome to My Writing Journey</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
            I&apos;m Kayla, a writer exploring the intersection of traditional storytelling and visual media.
            I&apos;m a novelist at heart, but I also write short fiction, draw my characters a dozen times over,
            and dabble with interactive Twine stories. Through my work, I aim to inspire, connect, and share 
            meaningful stories with readers around the world.
          </p>
          <div className="flex gap-4">
            <a
              href="https://www.tumblr.com/kaylas-words"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#34526f] text-white rounded-lg hover:bg-[#2c4459] transition-colors"
            >
              <svg 
                viewBox="0 0 24 24" 
                className="w-5 h-5"
                fill="currentColor"
              >
                <path d="M17.04 21.28h-3.28c-2.84 0-4.94-1.37-4.94-4.85v-5.15H6.09V8.02c2.84-.73 4.12-3.17 4.26-5.27h3.03v4.79h3.54v3.74h-3.54v4.45c0 1.5.76 2.02 1.97 2.02h1.69v3.53z"/>
              </svg>
              Read My Blog
            </a>
            <Link
              href="/contact"
              className="inline-flex px-6 py-3 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </main>
      <footer className="text-sm text-gray-500">
        © {new Date().getFullYear()} Kayla Writes. All rights reserved.
      </footer>
    </div>
  );
}
