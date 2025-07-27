export interface IMetadata {
  title: string;
  publishedAt: string;
  summary: string;
  image?: string;
}

export interface IPost {
  metadata: IMetadata;
  slug: string;
  content: string;
}
