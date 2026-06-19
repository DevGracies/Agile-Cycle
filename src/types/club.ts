export type ClubStatus = "Active" | "Inactive";

export interface ClubLog {
  id: string;
  title: string;
  image?: string;
  info?: string;
  category: string;
  comments: number;
  likes: number;
  views?: number;
  status: ClubStatus;
  createdAt: Date;
}

export interface CreateClubPayload {
  title: string;
  image?: string;
  info?: string;
  category: string;
  comments: number;
  likes: number;
  views?: number;
  status: ClubStatus;
  createdAt: Date;
}

export interface UpdateClubPayload {
  title?: string;
  image?: string;
  info?: string;
  category?: string;
  comments?: number;
  likes?: number;
  views?: number;
  status?: ClubStatus;
}

export type ClubToggleKey =
  | "Manual"
  | "Automatic";

export interface ClubToggleState {
  Manual: boolean;
  Automatic: boolean;
}

export type ClubTabKey =
  | "this-week"
  | "last-week";

export interface ClubTab {
  label: string;
  key: ClubTabKey;
}

export interface ClubMetrics {
  totalClubs: number;
  totalComments: number;
  totalVisitors: number;
}