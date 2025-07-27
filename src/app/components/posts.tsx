import Link from "next/link";
import { getBlogPosts } from "../blog/utils";

export function BlogPosts() {
  const allBlogs = getBlogPosts();

  return (
    <div className="flex flex-col">
      {allBlogs.map((post) => (
        <Link key={post.slug} href={`/blog/${post.slug}`}>
          {post.metadata.title}
        </Link>
      ))}
    </div>
  );
}
