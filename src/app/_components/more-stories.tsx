import { Post } from "@/interfaces/post";
import { PostPreview } from "./post-preview";

type Props = {
  posts: Post[];
};

export function MoreStories({ posts }: Props) {
  return (
    <section className='u-container py-16'>
      <header className='mb-8'>
        <h3 className='mb-6 text-2xl sm:text-3xl md:text-4xl font-semibold text-neutral-800 dark:text-white'>Ultimos articulos</h3>
        <p className='text-base md:text-xl text-neutral-500 dark:text-neutral-400'>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
      </header>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post) => (
          <PostPreview
            key={post.slug}
            title={post.title}
            coverImage={post.coverImage}
            date={post.date}
            author={post.author}
            slug={post.slug}
            excerpt={post.excerpt}
          />
        ))}
      </div>
    </section>
  );
}
