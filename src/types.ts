export const CATEGORIES = {
  FE: ["React", "JS", "TS", "Next"],
  EXP: ["Pjt", "Book", "Lecture", "Exhibition"],
  ETC: ["Git", "AI", "Nginx", "Docker", "PM", "Algorithm"],
} as const;

export interface IMetadata {
  title: string;
  publishedAt: string;
  categories?: string; // seperated by commas
  thumbnail?: string;
}

export interface IPost {
  metadata: IMetadata;
  slug: string; // file name without extension
  content: string;
}
