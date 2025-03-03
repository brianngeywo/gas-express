import Image from "next/image";

const NavBarSection = () => {
  return (
    <header className="bg-white text-white py-4  w-sm">
      <div className="mx-0 flex justify-between items-center">
        {/* Logo */}
        <div className="w-14 grow ">
          <Image
            src="/images/logo.png"
            alt="Logo"
            width={150}
            height={150}
            className="w-full h-auto"
          />
        </div>
        <nav>
          <ul className="flex-none space-x-2 sm:space-x-4 items-center">
            {/* Hidden links for now */}
            {/* <li>
              <a href="#" className="text-black font-bold hidden sm:block">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="text-black font-bold hidden sm:block">
                About Us
              </a>
            </li> */}
            <li>
              <a href="#" className="text-black font-bold hidden lg:block">
                Contact Us
              </a>
            </li>

            {/* Download Button */}
            <li>
              <a
                href="https://play.google.com/store/apps/details?id=com.girrafe.kasarani_gas_center"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-blue-600 text-white px-4 py-2 sm:px-6 sm:py-3 rounded-lg text-sm sm:text-base font-semibold hover:bg-blue-700 transition-colors shadow-lg"
              >
                Download now
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default NavBarSection;
