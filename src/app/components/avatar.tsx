import Image from "next/image";

interface AvatarProps {
  id: string;
  alt: string;
  imageType?: "jpg" | "png";
  width?: number; // Make width optional for responsiveness
  height?: number; // Make height optional for responsiveness
}

export function Avatar({ id, alt, imageType = "jpg", width, height }: AvatarProps) {
  return (
    <div className="w-full max-w-[200px] md:max-w-[300px] lg:max-w-[400px] mx-auto">
      <Image
        src={`/images/${id}.${imageType}`}
        alt={alt}
        width={width || 400} // Default width if not provided
        height={height || 400} // Default height if not provided
        className="w-full h-auto shadow-xl rounded-xl"
        style={{
          maxWidth: "100%", // Ensure the image doesn't exceed its container
          height: "auto", // Maintain aspect ratio
        }}
      />
    </div>
  );
}