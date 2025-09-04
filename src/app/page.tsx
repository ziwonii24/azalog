import { getAllLatestPublishedPosts } from "@/utils";
import Post from "@/components/post";

/**
 * Home - 모든 글 최신 순으로 보여주는 페이지
 * @returns
 */
export default function Home() {
  const allLatestPublishedPosts = getAllLatestPublishedPosts();

  return (
    <section className="flex flex-col gap-4 py-4">
      {allLatestPublishedPosts.map((post) => (
        <Post key={post.slug} post={post} />
      ))}
    </section>
  );
}
