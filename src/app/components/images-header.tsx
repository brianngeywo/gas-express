const ImagesHeader = () => {
  const images = [
    { id: 1, top: "top-10", right: "right-70", image: "/images/product.png" },
    {
      id: 2,
      top: "top-10",
      left: "left-70",
      image: "/images/time and date.png",
    },
    { id: 3, top: "top-5", left: "left-35", image: "/images/office.png" },
    { id: 4, top: "top-5", right: "right-35", image: "/images/routes.png" },
    {
      id: 5,
      top: "top-0",
      left: "left-0",
      shadow: "shadow-[0_75px_75px_rgba(0,0,0,0.5)]",
      image: "/images/home.png",
    },
  ];

  return (
    <div className="relative w-50 h-96">
      {images.map((img) => (
        <div
          key={img.id}
          className={`absolute ${img.top} ${img.left || ""} ${
            img.right || ""
          } h-94 w-40 bg-contain bg-center bg-no-repeat shadow-[0_35px_35px_rgba(0,0,0,0.25)] rounded-md bg-white ${
            img.shadow || ""
          }`}
          style={{ backgroundImage: `url('${img.image}')` }}
        ></div>
      ))}
    </div>
  );
};

export default ImagesHeader;
