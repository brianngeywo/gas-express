const ImagesHeader = () => {
  const images = [
    { id: 1, top: "top-10", right: "right-30", image: "/images/product.png" },
    {
      id: 2,
      top: "top-10",
      left: "left-30",
      image: "/images/time and date.png",
    },
    { id: 3, top: "top-5", left: "left-15", image: "/images/office.png" },
    { id: 4, top: "top-5", right: "right-15", image: "/images/routes.png" },
    {
      id: 5,
      top: "top-0",
      left: "left-0",
      shadow: "shadow-[0_75px_75px_rgba(0,0,0,0.5)]",
      image: "/images/home.png",
    },
  ];

  return (
    <div className="comtainer mx-auto md:mx-0 mb-20">
      <div className="relative w-20 h-47">
        {images.map((img) => (
          <div
            key={img.id}
            className={`absolute ${img.top} ${img.left || ""} ${
              img.right || ""
            } h-45 w-20 bg-contain bg-center bg-no-repeat  rounded-md bg-white ${
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
