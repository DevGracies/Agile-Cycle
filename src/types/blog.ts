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

// 
// 
// 
export interface Blog {
  _id: string;
  authorId: string;

  title: string;

  image?: {
    public_id: string;
    secure_url: string;
  };

  category: string;

  status: "active" | "inactive" | "archived";

  publishedAt?: string;
  createdAt: string;
  updatedAt: string;

  stats: {
    views: number;
    likes: number;
    comments: number;
  };
}

export interface BlogListResponse {
  success: boolean;
  message: string;

  blogs: Blog[];

  pagination: {
    total: number;
    page: number;
    limit: number;
    pages: number;
  };
}