import { type Author } from "@/interfaces/author";
import Link from "next/link";
import Avatar from "./avatar";
import CoverImage from "./cover-image";
import DateFormatter from "./date-formatter";

type Props = {
  title: string;
  coverImage: string;
  date: string;
  excerpt: string;
  author: Author;
  slug: string;
};

export function PostPreview({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
}: Props) {
  return (
    <div>
      <div className="mb-5">
        <CoverImage slug={slug} title={title} src={coverImage} />
      </div>
      <h3 className="font-semibold text-lg md:text-xl mb-3 leading-snug line-clamp-2">
        <Link href={`/posts/${slug}`} className="hover:underline">
          {title}
        </Link>
      </h3>
      <div className="text-sm mb-4 opacity-75">
        <DateFormatter dateString={date} />
      </div>
      <p className="leading-relaxed mb-4 line-clamp-6 text-balance">{excerpt}</p>
      <Avatar name={author.name} picture={author.picture} />
    </div>
  );
}
