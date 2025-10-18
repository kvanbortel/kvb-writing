import Image from 'next/image';

interface CharacterCardProps {
  name: string;
  role: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
}

/**
 * Character Card Component
 * 
 * Displays a character's image and description in a responsive layout:
 * - Mobile: Text above, image below
 * - Desktop: Image left (fixed), text right
 * 
 * Uses Next.js Image component for optimized image rendering.
 * 
 * @component
 */
export function CharacterCard({
  name,
  role,
  description,
  imageSrc,
  imageAlt,
}: CharacterCardProps) {
  return (
    <article className="relative">
      <div className="grid md:grid-cols-2 gap-12 items-start">
        <div className="relative aspect-[3/4] rounded-xl overflow-hidden bg-gray-100 dark:bg-gray-800 shadow-xl order-2 md:order-1">
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="space-y-6 order-1 md:order-2">
          <div className="space-y-2">
            <h3 className="text-3xl font-medium text-purple-600 dark:text-purple-400">{name}</h3>
            <span className="inline-block px-4 py-1 bg-purple-50 dark:bg-purple-900/20 text-purple-700 dark:text-purple-300 rounded-full text-sm">
              {role}
            </span>
          </div>
          <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed text-justify">
            {description}
          </p>
        </div>
      </div>
    </article>
  );
}
