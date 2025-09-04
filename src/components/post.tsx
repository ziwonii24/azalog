import { IPost } from "@/types";
import Link from "next/link";

/**
 * @param param0
 * @returns
 */
export default function Post({ post }: { post: IPost }) {
  return (
    <Link
      href={`/post/${post.slug}`}
      className="group bg-white border border-gray-200 rounded-xl p-6 w-full transition-all duration-300 hover:shadow-lg hover:border-gray-300 hover:-translate-y-1"
    >
      <div className="flex flex-wrap gap-2 mb-3">
        {post.metadata.categories?.split(",").map((category) => (
          <span
            key={`category-${post.slug}-${category}`}
            className="inline-flex items-center px-2.5 py-1 text-xs font-medium text-blue-700 bg-blue-50 border border-blue-200 rounded-full"
          >
            {category.trim()}
          </span>
        ))}
      </div>
      <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-200">
        {post.metadata.title}
      </h3>
      <time className="text-sm text-gray-500 font-medium">
        {post.metadata.publishedAt}
      </time>
    </Link>
  );
}
