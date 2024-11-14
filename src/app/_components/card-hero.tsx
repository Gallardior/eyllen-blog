import Link from "next/link";
import DateFormatter from "./date-formatter";

export function CardHero({ title, author, authorAvatar, date, slug }: {
  title: string
  author: string
  authorAvatar: string
  date: string
  slug: string
}) {
  return (
    <Link href={`/posts/${slug}`} className='absolute inset-x-8 top-20 md:w-1/2 lg:w-1/3 md:top-[10%] md:left-12 p-4 px-8 bg-white bg-opacity-40 dark:bg-opacity-10 backdrop-filter backdrop-blur-lg shadow-lg rounded-xl'>
      <header className='flex gap-3 mb-3'>
        <a href='#' className='transition-colors hover:text-white duration-300 inline-flex px-2.5 py-1 rounded-full font-medium text-xs relative my-1 text-[10px] sm:text-xs  text-green-800 bg-green-100 hover:bg-green-800'>
          Contaduria
        </a>
        <a href='#' className='transition-colors hover:text-white duration-300 inline-flex px-2.5 py-1 rounded-full font-medium text-xs relative my-1 text-[10px] sm:text-xs  text-purple-800 bg-purple-100 hover:bg-purple-800'>
          Leyes
        </a>
      </header>
      <main>
        <h2 className='mb-3  text-base sm:text-xl font-semibold text-neutral-800 dark:text-neutral-100 line-clamp-2'>
          {title}
        </h2>
        <section className='py-3 sm:py-4 flex items-center space-x-4'>
          <div className="w-8 h-auto">
            <img
              alt='User image'
              src={authorAvatar}
              className='block w-8 h-auto rounded-full object-cover object-top'
            />
          </div>
          <article className='min-w-0 flex-1'>
            <p className='truncate text-sm font-medium text-gray-900 dark:text-white'>
              {author}
            </p>
            <p className='truncate text-xs text-gray-500 dark:text-gray-400'>
              <DateFormatter dateString={date} />
            </p>
          </article>
        </section>
      </main>
      <footer className='flex gap-3'>
        <button type='button' className='text-xs text-neutral-500 dark:text-white bg-neutral-100 dark:bg-gray-800 hover:bg-red-100 hover:text-red-500 dark:hover:bg-red-100 dark:hover:text-red-500 transition-colors focus:outline-none focus:ring-4 focus:ring-gray-300 rounded-full px-4 py-2.5 dark:focus:ring-gray-700 dark:border-gray-700 border border-gray-100 shadow-md'>
          <i className='fa-regular fa-heart mr-3' />
          95
        </button>
        <button type='button' className='text-xs text-neutral-500 dark:text-white bg-neutral-100 dark:bg-gray-800 hover:bg-sky-100 hover:text-sky-500 dark:hover:bg-sky-100 dark:hover:text-sky-500 transition-colors focus:outline-none focus:ring-4 focus:ring-gray-300 rounded-full px-4 py-2.5 dark:focus:ring-gray-700 dark:border-gray-700 border border-gray-100 shadow-md'>
          <i className='fa-regular fa-comment mr-3' />
          20
        </button>
      </footer>
    </Link>
  )
}