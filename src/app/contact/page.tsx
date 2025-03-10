'use client';

export default function ContactPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold mb-8">Contact Me</h1>
      <div className="grid md:grid-cols-2 gap-12">
        <div className="space-y-6">
          <p className="text-gray-600 dark:text-gray-300">
            I&apos;d love to hear from you! Whether you have an inquiry 
            or just want to connect, feel free to reach out using the form below.
          </p>
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 focus:ring-2 focus:ring-purple-500 outline-none"
                placeholder="Your name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 focus:ring-2 focus:ring-purple-500 outline-none"
                placeholder="your@email.com"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 focus:ring-2 focus:ring-purple-500 outline-none"
                placeholder="Your message..."
              />
            </div>
            <button
              type="submit"
              className="bg-purple-500 text-white px-6 py-2 rounded-lg hover:bg-purple-600 transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
        <div className="space-y-6">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Other Ways to Connect</h2>
            <div className="space-y-4 text-gray-600 dark:text-gray-300">
              <p>Email: kaylavb4@gmail.com</p>
              <p>Tumblr: @kaylas-words</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 
