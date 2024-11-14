import Avatar from "@/app/_components/avatar";
import CoverImage from "@/app/_components/cover-image";
import { type Author } from "@/interfaces/author";
import Link from "next/link";
import DateFormatter from "./date-formatter";
import { CardHero } from "./card-hero";

type Props = {
  title: string;
  coverImage: string;
  date: string;
  excerpt: string;
  author: Author;
  slug: string;
};

export function HeroPost({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
}: Props) {
  return (
    <section className="u-container pt-28 min-h-[80vh]">
      <header className='mb-8'>
        <h3 className='mb-6 text-2xl sm:text-3xl md:text-4xl font-semibold text-neutral-800 dark:text-white'>
          Descubre mis últimas historias 💡 
        </h3>
        <p className='text-base md:text-xl text-neutral-500 dark:text-neutral-400'>
          Sigueme y comparte mis articulos con el mundo.
        </p>
      </header>
      <main className='relative grid md:grid-cols-3'>
        <CardHero
          title={title}
          author={author.name}
          authorAvatar={'/assets/images/me.jpg'}
          date={date}
          slug={slug}
        />
        <aside className='w-full md:col-start-2 md:col-span-2'>
          <img src={coverImage} className='rounded-xl' alt={title} />
        </aside>
      </main>
      {/* <div className="mb-8 md:mb-16">
        <CoverImage title={title} src={coverImage} slug={slug} />
      </div>
      <div className="md:grid md:grid-cols-2 md:gap-x-16 lg:gap-x-8 mb-20 md:mb-28">
        <div>
          <h3 className="mb-4 text-4xl lg:text-5xl leading-tight">
            <Link href={`/posts/${slug}`} className="hover:underline">
              {title}
            </Link>
          </h3>
          <div className="mb-4 md:mb-0 text-lg">
            <DateFormatter dateString={date} />
          </div>
        </div>
        <div>
          <p className="text-lg leading-relaxed mb-4">{excerpt}</p>
          <Avatar name={author.name} picture={author.picture} />
        </div>
      </div> */}
    </section>
  );
}
