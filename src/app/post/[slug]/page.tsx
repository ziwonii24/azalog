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
    <section className="pt-12 pb-12">
      <div className="bg-white w-3xl mt-0 mb-0 ml-auto mr-auto p-8 flex flex-col gap-12 rounded-2xl shadow-2xl">
        <div className="flex flex-col gap-6">
          <h1 className="text-4xl font-bold">{post.metadata.title}</h1>
          <span className="text-sm font-light">
            {post.metadata.publishedAt}
          </span>
        </div>
        <article className="custom-mdx">
          <CustomMDX source={post.content} />
        </article>
      </div>
    </section>
  );
}
