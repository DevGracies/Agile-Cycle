"use client";


interface SkeletonProps {
  className?: string;
}

const Skeleton = ({
  className,
}: SkeletonProps) => {
  return (
    <div
      className={`not-last:animate-pulse bg-gray-200 rounded-md ${className}`}
    />
  );
};

export default Skeleton;