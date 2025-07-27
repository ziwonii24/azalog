import { getAllLatestPosts } from "@/utils";
import Post from "@/components/post";

/**
 * 모든 글 최신 순으로 보여주는 페이지
 * @returns
 */
export default function Home() {
  const allLatestPosts = getAllLatestPosts();

  return (
    <section className="flex flex-col gap-4 p-4">
      {allLatestPosts.map((post) => (
        <Post key={post.slug} post={post} />
      ))}
    </section>
  );
}
