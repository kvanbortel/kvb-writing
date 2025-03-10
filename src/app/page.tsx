import Link from "next/link";
import { Send } from 'lucide-react';

export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-[calc(100vh-64px)] p-8 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="max-w-4xl w-full mx-auto" role="main" aria-labelledby="main-heading">
        <div className="space-y-8">
          <h1 id="main-heading" className="text-5xl font-bold">Welcome to My Writing Journey</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
            I&apos;m Kayla, a writer exploring the intersection of traditional storytelling and visual media.
            I&apos;m a novelist at heart, but I also write short fiction, draw my characters a dozen times over,
            and dabble with interactive Twine stories. Through my work, I aim to inspire, connect, and share 
            meaningful stories with readers around the world.
          </p>
          <nav className="flex gap-4" aria-label="Primary call-to-action">
            <a
              href="https://www.tumblr.com/kaylas-words"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#34526f] text-white rounded-lg hover:bg-[#2c4459] transition-colors outline-none focus-visible:ring-2 focus-visible:ring-white/50"
              aria-label="Read My Blog on Tumblr (opens in new tab)"
            >
              <svg 
                viewBox="0 0 24 24" 
                className="w-5 h-5"
                fill="currentColor"
                aria-hidden="true"
                role="img"
              >
                <path d="M17.04 21.28h-3.28c-2.84 0-4.94-1.37-4.94-4.85v-5.15H6.09V8.02c2.84-.73 4.12-3.17 4.26-5.27h3.03v4.79h3.54v3.74h-3.54v4.45c0 1.5.76 2.02 1.97 2.02h1.69v3.53z"/>
              </svg>
              <span>Read My Blog</span>
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors outline-none focus-visible:ring-2 focus-visible:ring-purple-500"
              aria-label="Get in touch through the contact form"
            >
              <Send className="w-5 h-5" aria-hidden="true" />
              <span>Get in Touch</span>
            </Link>
          </nav>
        </div>
      </main>
    </div>
  );
}
