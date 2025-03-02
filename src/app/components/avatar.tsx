import Image from "next/image";

interface AvatarProps {
  id: string;
  alt: string;
  imageType?: "jpg" | "png";
  width: number;
  height: number;
}

export function Avatar({ id, alt, imageType, width, height }: AvatarProps) {
  // width full screen
  return (
    <Image
      src={`/images/${id}.${imageType}`}
      alt={alt}
      width={width}
      height={height}
      className=" shadow-xl rounded-xl"
    />
  );
}
