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

export default function ContactPage() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold mb-8">Contact Me</h1>
      <p className="text-gray-600 dark:text-gray-300 mb-8">
        I&apos;d love to hear from you! Whether you have an inquiry 
        or just want to connect, feel free to reach out using the form below.
      </p>
      <ContactForm />
    </main>
  );
} 
