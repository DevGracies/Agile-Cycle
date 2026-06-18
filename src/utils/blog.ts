import { BlogLog } from "../types/blog";

export const isThisWeek = (date: Date) => {
  const now = new Date();

  const sevenDaysAgo = new Date();
  sevenDaysAgo.setDate(now.getDate() - 7);

  return date >= sevenDaysAgo;
};

export const isLastWeek = (date: Date) => {
  const now = new Date();

  const sevenDaysAgo = new Date();
  sevenDaysAgo.setDate(now.getDate() - 7);

  const fourteenDaysAgo = new Date();
  fourteenDaysAgo.setDate(now.getDate() - 14);

  return (
    date >= fourteenDaysAgo &&
    date < sevenDaysAgo
  );
};