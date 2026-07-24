export const formatDate = (date?: Date | string | null) => {
  if (!date) return null;

  return new Date(date).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
};