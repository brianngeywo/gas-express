import Image from "next/image";

const NavBarSection = () => {
  return (
    <header className="bg-white text-white w-full">
      <div className="mx-0 flex flex-row justify-between items-center">
        {/* Logo */}
        <div className="w-35 flex-none">
          <Image
            src="/images/logo.png"
            alt="Logo"
            width={150}
            height={150}
            className="w-full h-auto"
          />
        </div>
        
        <nav className="flex-none">
          <ul className="flex flex-row space-x-4 items-center mr-6">
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
              <a href="#contact-section" className="text-black font-bold hidden md:block">
                Contact Us
              </a>
            </li>

            {/* Download Button */}
            <li>
              <a
                href="https://play.google.com/store/apps/details?id=com.girrafe.kasarani_gas_center"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-blue-950 text-white px-6 py-3 rounded-lg text-sm font-semibold hover:bg-blue-700 transition-colors shadow-lg"
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
