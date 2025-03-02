import { Avatar } from "./avatar";

interface PNGAvatarProps {
  name: string;
  width: number;
  height: number;
}

const PNGAvatar = ({ name, width, height }: PNGAvatarProps) => {
  return (
    <div className="absolute top-0 left-0">
      <Avatar
        id={`${name}`}
        alt="nairobi"
        imageType="png"
        width={width}
        height={height}
      />
    </div>
  );
};

export default PNGAvatar;
