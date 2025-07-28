import { IPost } from "@/types";
import Link from "next/link";

export default function Post({ post }: { post: IPost }) {
  return (
    <Link
      href={`/post/${post.slug}`}
      className="border border-black rounded-2xl flex flex-col p-2 w-fit hover:bg-green-50"
    >
      <span>{post.metadata.title}</span>
      <span className="text-xs">{post.metadata.publishedAt}</span>
    </Link>
  );
}
