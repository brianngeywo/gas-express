import Image from 'next/image';


const NavBarSection = () => {
  return (
    <header className="bg-white text-white py-4 px-60">
      <div className="container mx-auto flex justify-between items-center">
        <div>
          <Image src="/images/logo.png" alt="Logo" width={150} height={50} />
        </div>
        <nav>
          <ul className="flex space-x-4 items-center">
            <li>
              <a href="#" className="text-black font-bold visible xs:invisible">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="text-black font-bold visible xs:invisible">
                About Us
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-black font-bold  visible xs:invisible"
              >
                Contact Us
              </a>
            </li>
            <li className="bg-red-500 text-white px-4 py-2 rounded-md  visible xs:invisible">
              <a href="#" className="font-bold">
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
