const ImagesHeader = () => {
    return <div className="relative w-50 h-96">
  
    <div
      className="absolute top-10 right-70 h-94 w-40 bg-contain bg-center bg-no-repeat shadow-[0_35px_35px_rgba(0,0,0,0.25)] rounded-md bg-white"
      style={{ backgroundImage: "url('/images/product.png')" }}
    ></div>
    <div
      className="absolute top-10 left-70 h-94 w-40 bg-contain bg-center bg-no-repeat shadow-[0_35px_35px_rgba(0,0,0,0.25)] rounded-md bg-white"
      style={{ backgroundImage: "url('/images/time and date.png')" }}
    ></div>
    <div
      className="absolute top-5 left-35 h-94 w-40 bg-contain bg-center bg-no-repeat shadow-[0_35px_35px_rgba(0,0,0,0.25)] rounded-md bg-white"
      style={{ backgroundImage: "url('/images/office.png')" }}
    ></div>
    <div
      className="absolute top-5 right-35 h-94 w-40 bg-contain bg-center bg-no-repeat shadow-[0_35px_35px_rgba(0,0,0,0.25)] rounded-md bg-white"
      style={{ backgroundImage: "url('/images/routes.png')" }}
    ></div>
    <div
      className="absolute top-0 left-0 h-94 w-40 bg-contain bg-center bg-no-repeat shadow-[0_75px_75px_rgba(0,0,0,0.5)] rounded-md bg-white"
      style={{ backgroundImage: "url('/images/home.png')" }}
    ></div>
  </div>;
}

export default ImagesHeader;