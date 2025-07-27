import { notFound } from "next/navigation";
import { getAllPosts, getPostBySlug } from "@/utils";
import { CustomMDX } from "@/components/mdx";

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

/**
 * 블로그 글 상세 페이지
 * /post/[slug]
 * @param param0
 * @returns
 */
export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <section>
      <h1>{post.metadata.title}</h1>
      <p>{post.metadata.publishedAt}</p>
      <article>
        <CustomMDX source={post.content} />
      </article>
    </section>
  );
}
