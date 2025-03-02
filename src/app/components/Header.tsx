// components/Header.js

import ImagesHeader from "./images-header";
import NavBarSection from "./nav-bar";

export default function Header() {
  return (
    <main
      className="container mx-auto py-4 px-60 md:px-4 bg-no-repeat bg-cover"
      style={{ backgroundImage: "url('/images/bg-white.jpg')" }}
    >
      <div className="flex flex-col justify-center items-center">
        <div className="w-full ">
          <NavBarSection />
        </div>

        <ImagesHeader />

        <p className="mt-10 text-black text-[40px] font-bold text-red-950 p-4 text-center">
          Your trusted partner for gas solutions in Nairobi, Kenya.
        </p>
      </div>
    </main>
  );
}
