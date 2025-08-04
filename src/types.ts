export const CATEGORIES = {
  A: ["React", "JS", "TS", "Next"],
  ZA: ["Git", "AI", "Nginx", "Docker", "PM", "Algorithm", "OS"],
  LOG: ["Pjt", "Book"],
} as const;

export interface IMetadata {
  title: string;
  publishedAt: string;
  categories?: string; // seperated by commas
  thumbnail?: string;
  status: "draft" | "published";
}

export interface IPost {
  metadata: IMetadata;
  slug: string; // file name without extension
  content: string;
}
