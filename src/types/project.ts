export interface Project {
  id: number;
  title: string;
  description: string;
  category: string;
  tags: string[];
  image: string;
  color: string;
  link?: string;
  slug: string;
  githubUrl?: string;
  liveUrl?: string;
  overview?: string;
  challenge?: string;
  solution?: string;
}
