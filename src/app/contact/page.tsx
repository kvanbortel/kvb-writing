'use client';

export default function ContactPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold mb-8">Contact Me</h1>
      <p className="text-gray-600 dark:text-gray-300 mb-8">
        I&apos;d love to hear from you! Whether you have an inquiry 
        or just want to connect, feel free to reach out using the form below.
      </p>
      <div className="w-full rounded-lg overflow-hidden">
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLScU8UtV9S7mJtbjpaXkWyvDsTwiqsuLDts90qgzVABeX4ofvg/viewform?embedded=true"
          className="w-full h-[800px] border-0"
          title="Contact Form"
        >
          Loading...
        </iframe>
      </div>
    </div>
  );
} 
