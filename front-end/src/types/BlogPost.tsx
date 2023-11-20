export interface IBlogPost {
  id?: string;
  title: string;
  subtitle: string;
  slug: string;
  body: string;
  publishDate?: string;
  tags: [{ name: string }];
}
