import { Avatar } from "./avatar";

interface JPGAvatarProps {
  name: string;
  width?: number; // Make width optional for responsiveness
  height?: number; // Make height optional for responsiveness
  className?: string; // Allow custom positioning and styling
}

const JPGAvatar = ({ name, width = 100, height = 100, className }: JPGAvatarProps) => {
  return (
    <div className={className}>
      <Avatar
        id={`${name}`}
        alt={name}
        imageType="jpg"
        width={width}
        height={height}
      />
    </div>
  );
};

export default JPGAvatar;