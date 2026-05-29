const RecommendationBanner = () => {
  return (
    <div className="flex flex-wrap items-center gap-4 mt-8">
      <div className="bg-secondary text-white px-6 py-3 rounded-r-full rounded-l-full font-semibold">
        Recommendation Rate
      </div>

      <p className="text-lg font-medium text-[#414141]">
        85% would recommend this product
      </p>
    </div>
  );
};

export default RecommendationBanner;