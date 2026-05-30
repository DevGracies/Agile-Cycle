import Image from "next/image";

interface AvatarProps {
  src: string;
  alt: string;
  size?: number;
}

const Avatar = ({ src, alt, size = 40 }: AvatarProps) => {
  return (
    <div
      className="relative rounded-full overflow-hidden bg-gray-200"
      style={{ width: size, height: size }}
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes={`${size}px`}
        className="object-cover"
      />
    </div>
  );
};

export default Avatar;