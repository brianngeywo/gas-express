// components/Header.js

import ImagesHeader from "./images-header";
import NavBarSection from "./nav-bar";

export default function Header() {
  return (
    <main
      className="py-4 px-0 bg-no-repeat bg-cover bg-gray-200 w-full"
      style={{ backgroundImage: "url('/images/bg.jpg')" }}
    >
      <div className="flex flex-col justify-center items-center w-full">
        <div className="w-full ">
          <NavBarSection />
        </div>

        <ImagesHeader />

        <p className="text-black text-lg font-bold text-red-950 p-4 text-center">
          Your trusted partner for gas solutions in Nairobi, Kenya.
        </p>
      </div>
    </main>
  );
}
