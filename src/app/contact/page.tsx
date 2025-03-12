import type { Metadata } from "next";
import { ContactForm } from "./ContactForm";

export const metadata: Metadata = {
  title: "Contact Me",
  description: "Get in touch with Kayla Van Bortel. Whether you have questions about my writing or just want to connect, I'd love to hear from you.",
  openGraph: {
    title: "Contact Me | Kayla Writes",
    description: "Get in touch with Kayla Van Bortel. Whether you have questions about my writing or just want to connect, I'd love to hear from you.",
  }
};

/**
 * Contact Page Component
 * 
 * Contact form page featuring:
 * - Embedded Google Form integration
 * - Loading state management
 * - Responsive layout with consistent spacing
 * - SEO optimization with metadata
 * - Accessible form structure
 * 
 * @component
 */
export default function ContactPage() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-12">
      <div className="mb-12 space-y-4">
        <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-br from-gray-900 to-gray-600 dark:from-white dark:to-gray-400">
          Contact Me
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed max-w-3xl">
          Have a question about my writing? Want to connect? I&apos;d love to hear from you.
          Drop me a message using the form below.
        </p>
      </div>
      <ContactForm />
    </main>
  );
} 
