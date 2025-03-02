import Image from "next/image";

const NavBarSection = () => {
  return (
    <header className="bg-white text-white py-4 px-60">
      <div className="container mx-auto flex justify-between items-center">
        <div>
          <Image src="/images/logo.png" alt="Logo" width={150} height={150} />
        </div>
        <nav>
          <ul className="flex space-x-4 items-center">
            {/* <li>
              <a href="#" className="text-black font-bold visible xs:invisible">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="text-black font-bold visible xs:invisible">
                About Us
              </a>
            </li> */}
            <li>
              <a
                href="#"
                className="text-black font-bold  visible xs:invisible"
              >
                Contact Us
              </a>
            </li>
            <li className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors shadow-lg">
              <a
                href="https://play.google.com/store/apps/details?id=com.girrafe.kasarani_gas_center"
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold"
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
