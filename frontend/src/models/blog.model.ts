export interface BlogModel {
  _id: string;
  title: string;
  body: string;
  author: string | null;
  snippet: string | null;
  createdAt: Date;
  updatedAt: Date;
}
