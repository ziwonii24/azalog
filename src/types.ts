export const CATEGORIES = {
  // 기술적인 기록
  AZA: [
    "React",
    "JS",
    "TS",
    "Next",
    "Git",
    "AI",
    "Nginx",
    "Docker",
    "PM",
    "Algorithm",
    "OS",
  ],
  // 경험적인 기록
  LOG: ["Pjt", "Book"],
} as const;

export interface IMetadata {
  title: string;
  categories?: string; // seperated by commas
  draftAt?: string; // 초본
  publishedAt?: string; // 완성본
  status: "draft" | "published";
}

export interface IPost {
  metadata: IMetadata;
  slug: string; // file name without extension
  content: string;
}
