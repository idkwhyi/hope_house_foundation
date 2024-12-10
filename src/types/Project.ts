export interface Project {
  id: string;
  title: string;
  summary: string;
  aboutDescription: string;
  aboutImage: string;
  content: string;
  hookImage: string;
  contentImages?: string[]; // New field for content images
}