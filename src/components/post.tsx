import { IPost } from "@/types";
import Link from "next/link";

/**
 * TODO:
 * 1. random hover color
 * @param param0
 * @returns
 */
export default function Post({ post }: { post: IPost }) {
  return (
    <Link
      href={`/post/${post.slug}`}
      className="border border-black rounded-2xl flex flex-col gap-1 p-3 w-full hover:bg-green-50"
    >
      <div className="flex gap-1">
        {post.metadata.categories?.split(",").map((category) => (
          <span
            key={`category-${post.slug}-${category}`}
            className="border border-black text-xs p-0.5 rounded-lg bg-white"
          >
            {category}
          </span>
        ))}
      </div>
      <span>{post.metadata.title}</span>
      <span className="text-xs">{post.metadata.publishedAt}</span>
    </Link>
  );
}
