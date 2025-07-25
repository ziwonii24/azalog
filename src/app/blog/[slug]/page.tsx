import { notFound } from "next/navigation";
import { getBlogPosts } from "../utils";
import { CustomMDX } from "@/app/components/mdx";

export async function generateStaticParams() {
  const posts = getBlogPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getBlogPosts().find((post) => post.slug === slug);

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
