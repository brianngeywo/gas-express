import { Avatar } from "./avatar";

interface JPGAvatarProps {
  name: string;
  width: number;
  height: number;
}

const JPGAvatar = ({ name, width, height }: JPGAvatarProps) => {
  return (
    <div className="absolute top-0 left-0">
      <Avatar
        id={`${name}`}
        alt="nairobi"
        imageType="jpg"
        width={width}
        height={height}
      />
    </div>
  );
};

export default JPGAvatar;
