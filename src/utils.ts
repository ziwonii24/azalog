import fs from "fs";
import path from "path";
import { IMetadata, IPost } from "./types";

/**
 * fileContent를 파싱해서 { metadata, content } 형태로 반환한다
 * @param fileContent
 * @returns
 */
function parseFrontmatter(fileContent: string) {
  const frontmatterRegex = /---\s*([\s\S]*?)\s*---/;
  const match = frontmatterRegex.exec(fileContent);
  const frontMatterBlock = match![1];
  const content = fileContent.replace(frontmatterRegex, "").trim();
  const frontMatterLines = frontMatterBlock.trim().split("\n");
  const metadata: Partial<IMetadata> = {};

  frontMatterLines.forEach((line) => {
    const [key, ...valueArr] = line.split(": ");
    let value = valueArr.join(": ").trim();
    value = value.replace(/^['"](.*)['"]$/, "$1"); // Remove quotes
    metadata[key.trim() as keyof IMetadata] = value;
  });

  return { metadata: metadata as IMetadata, content };
}

/**
 * 파일 확장자가 .mdx인 파일들을 가져온다
 * @param dir
 * @returns
 */
function getMDXFiles(dir: string) {
  return fs.readdirSync(dir).filter((file) => path.extname(file) === ".mdx");
}

/**
 * mdx 파일을 읽는다
 * @param filePath
 * @returns
 */
function readMDXFile(filePath: string) {
  const rawContent = fs.readFileSync(filePath, "utf-8");
  return parseFrontmatter(rawContent);
}

/**
 * mdx 파일들을 읽어서 { metadata, slug, content }[] 형태로 반환한다
 * @param dir
 * @returns
 */
function getMDXData(dir: string): IPost[] {
  const mdxFiles = getMDXFiles(dir);
  return mdxFiles.map((file) => {
    const { metadata, content } = readMDXFile(path.join(dir, file));
    const slug = path.basename(file, path.extname(file));

    return {
      metadata,
      slug,
      content,
    };
  });
}

/**
 * /src/posts 디렉토리에 있는 mdx 글들을 가져와라
 * @returns
 */
export function getAllPosts(): IPost[] {
  return getMDXData(path.join(process.cwd(), "src", "posts"));
}

/**
 * @param slug
 * @returns slug에 해당하는 글을 가져온다
 */
export function getPostBySlug(slug: string): IPost | undefined {
  return getAllPosts().find((post) => post.slug === slug);
}

/**
 * @returns 모든 글을 최신 순으로 정렬해서 반환한다
 */
export function getAllLatestPosts(): IPost[] {
  return getAllPosts().sort((a, b) => {
    return (
      new Date(b.metadata.publishedAt).getTime() -
      new Date(a.metadata.publishedAt).getTime()
    );
  });
}
