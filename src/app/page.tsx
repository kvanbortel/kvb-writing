import Link from "next/link";
import { Send } from 'lucide-react';

export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-[calc(100vh-64px)] p-8 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="max-w-4xl w-full mx-auto" role="main" aria-labelledby="main-heading">
        <div className="space-y-12">
          <div className="space-y-6">
            <h1 id="main-heading" className="text-4xl sm:text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-br from-gray-900 to-gray-600 dark:from-white dark:to-gray-400">
              Welcome to My Writing Journey
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-3xl">
              I&apos;m <span className="text-purple-600 dark:text-purple-400 font-medium">Kayla Van Bortel</span>, a writer exploring the intersection of traditional storytelling and visual media.
              I&apos;m a novelist at heart, but I also write short fiction, draw my characters a dozen times over,
              and dabble with interactive Twine stories. Through my work, I aim to inspire, connect, and share 
              meaningful stories with readers around the world.
            </p>
          </div>

          <nav className="flex flex-col sm:flex-row gap-4" aria-label="Primary call-to-action">
            <a
              href="https://www.tumblr.com/kaylas-words"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl hover:border-purple-200 dark:hover:border-purple-700 transition-all duration-300 outline-none focus-visible:ring-2 focus-visible:ring-purple-500 shadow-lg hover:shadow-xl"
              aria-label="Read My Blog on Tumblr (opens in new tab)"
            >
              <svg 
                viewBox="0 0 24 24" 
                className="w-5 h-5 text-purple-500 transition-transform duration-300 group-hover:scale-110"
                fill="currentColor"
                aria-hidden="true"
                role="img"
              >
                <path d="M17.04 21.28h-3.28c-2.84 0-4.94-1.37-4.94-4.85v-5.15H6.09V8.02c2.84-.73 4.12-3.17 4.26-5.27h3.03v4.79h3.54v3.74h-3.54v4.45c0 1.5.76 2.02 1.97 2.02h1.69v3.53z"/>
              </svg>
              <span className="font-medium text-gray-900 dark:text-white">Read My Blog</span>
            </a>
            <Link
              href="/contact"
              className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl hover:border-purple-200 dark:hover:border-purple-700 transition-all duration-300 outline-none focus-visible:ring-2 focus-visible:ring-purple-500 shadow-lg hover:shadow-xl"
              aria-label="Get in touch through the contact form"
            >
              <Send className="w-5 h-5 text-purple-500 transition-transform duration-300 group-hover:scale-110 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
              <span className="font-medium text-gray-900 dark:text-white">Get in Touch</span>
            </Link>
          </nav>

          <div className="pt-8 border-t border-gray-200 dark:border-gray-800">
            <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
              Currently working on <span className="font-medium text-purple-600 dark:text-purple-400">Out of Nowhere</span>, 
              a fantasy novel about secrets, ambition, and the price of belonging.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
