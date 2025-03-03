import db from "@/utils/db";

const getImagesData = async () => {
  const images = await db.headerImage.findMany({});
  return images;
};

const ImagesHeader = async () => {
  const images = await getImagesData();

  return (
    <div className="comtainer mx-auto md:mx-0 mb-20">
      <div className="relative w-20 h-45 sm:h-90 sm:w-40">
        {images.map((img) => (
          <div
            key={img.id}
            className={`absolute ${img.top} ${img.left || ""} ${
              img.right || ""
            } h-45 w-20  sm:h-90 sm:w-40 bg-contain bg-center bg-no-repeat  rounded-md bg-white ${
              img.shadow || "shadow-[0_35px_35px_rgba(0,0,0,0.25)]"
            }`}
            style={{ backgroundImage: `url('${img.image}')` }}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default ImagesHeader;
