export type BlogStatus = "Active" | "Inactive";

export interface BlogLog {
  id: string;
  title: string;
  image?: string;
  info?: string;
  comments: number;
  likes: number;
  views?: number;
  status: BlogStatus;
  createdAt: Date;
}

export interface CreateBlogPayload {
  title: string;
  image?: string;
  info?: string;
  category: string;
  comments: number;
  likes: number;
  views?: number;
  status: BlogStatus;
  createdAt: Date;
}

export interface UpdateBlogPayload {
  title?: string;
  image?: string;
  info?: string;
  category?: string;
  comments?: number;
  likes?: number;
  views?: number;
  status?: BlogStatus;
}

export type BlogToggleKey =
  | "Manual"
  | "Automatic";

export interface BlogToggleState {
  Manual: boolean;
  Automatic: boolean;
}

export type BlogTabKey =
  | "this-week"
  | "last-week";

export interface BlogTab {
  label: string;
  key: BlogTabKey;
}

export interface BlogMetrics {
  totalBlogs: number;
  totalComments: number;
  totalVisitors: number;
}