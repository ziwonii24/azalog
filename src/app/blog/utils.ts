import fs from "fs";
import path from "path";

type Metadata = {
  title: string;
  publishedAt: string;
  summary: string;
  image?: string;
};

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
  const metadata: Partial<Metadata> = {};

  frontMatterLines.forEach((line) => {
    const [key, ...valueArr] = line.split(": ");
    let value = valueArr.join(": ").trim();
    value = value.replace(/^['"](.*)['"]$/, "$1"); // Remove quotes
    metadata[key.trim() as keyof Metadata] = value;
  });

  return { metadata: metadata as Metadata, content };
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
function getMDXData(dir: string) {
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
 * /src/app/blog/posts 디렉토리에 있는 mdx 블로그 글들을 가져와라
 * @returns
 */
export function getBlogPosts() {
  return getMDXData(path.join(process.cwd(), "src", "app", "blog", "posts"));
}
