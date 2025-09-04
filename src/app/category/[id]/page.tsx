import { getAllPosts, getPostsByCategory } from "@/utils";
import Post from "@/components/post";

export async function generateStaticParams() {
  // 실제 포스트에서 사용된 카테고리만 추출
  const posts = getAllPosts();
  const usedCategories = new Set<string>();

  posts.forEach((post) => {
    if (post.metadata.categories) {
      post.metadata.categories.split(",").forEach((category) => {
        usedCategories.add(category.trim());
      });
    }
  });

  // 사용된 카테고리들만 반환
  return Array.from(usedCategories).map((category) => ({
    id: category,
  }));
}

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
    <section className="flex flex-col gap-4 p-4 pb-80">
      {posts.map((post) => (
        <Post key={post.slug} post={post} />
      ))}
    </section>
  );
}
