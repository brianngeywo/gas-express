import { Avatar } from "./avatar";

interface PNGAvatarProps {
  name: string;
  width?: number; // Make width optional for responsiveness
  height?: number; // Make height optional for responsiveness
  className?: string; // Allow custom positioning and styling
}

const PNGAvatar = ({
  name,
  width = 100,
  height = 100,
  className,
}: PNGAvatarProps) => {
  return (
    <div className={className}>
      <Avatar
        id={`${name}`}
        alt={name}
        imageType="png"
        width={width}
        height={height}
      />
    </div>
  );
};

export default PNGAvatar;
