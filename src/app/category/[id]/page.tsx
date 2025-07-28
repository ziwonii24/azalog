import { getPostsByCategory } from "@/utils";
import Post from "@/components/post";

/**
 * 카테고리 내 모든 글 최신 순으로 보여주는 페이지
 * @returns
 */
export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id: category } = await params;
  const posts = getPostsByCategory(category);

  return (
    <section className="flex flex-col gap-4 p-4">
      {posts.map((post) => (
        <Post key={post.slug} post={post} />
      ))}
    </section>
  );
}
