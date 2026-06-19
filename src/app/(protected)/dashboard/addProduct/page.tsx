import EditProductPage from "@/src/components/dashboard/product/EditProductPage";

export default function Page({
  searchParams,
}: {
  searchParams: { edit?: string };
}) {
  return <EditProductPage edit={searchParams.edit} />;
}