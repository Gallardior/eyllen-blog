import Avatar from "./avatar";
import CoverImage from "./cover-image";
import DateFormatter from "./date-formatter";
import { PostTitle } from "@/app/_components/post-title";
import { type Author } from "@/interfaces/author";

type Props = {
  title: string;
  coverImage: string;
  date: string;
  author: Author;
};

export function PostHeader({ title, coverImage, date, author }: Props) {
  return (
    <>
      <header className='mb-4 lg:mb-6 not-format'>
        <address className='flex items-center mb-6 not-italic'>
          <div className='inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white'>
            <img className='mr-4 w-16 h-16 rounded-full' src={author.picture} alt={author.name} />
            <div>
              <a href='#' rel='author' className='text-xl font-bold text-gray-900 dark:text-white'>
                {author.name}
              </a>
              <p className='text-base text-gray-500 dark:text-gray-400'>
                <DateFormatter dateString={date} />
              </p>
            </div>
          </div>
        </address>
        <h1 className='mb-4 text-3xl font-extrabold leading-tight text-gray-900 lg:mb-6 lg:text-4xl dark:text-white'>
          {title}
        </h1>
      </header>
      <div className="mb-8 md:mb-16 sm:mx-0">
        <CoverImage title={title} src={coverImage} />
      </div>
    </>
  );
}
