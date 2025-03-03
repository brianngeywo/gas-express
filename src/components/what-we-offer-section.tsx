import { FaMotorcycle, FaUserCheck, FaUsers } from "react-icons/fa";

const WhatWeOfferSection = () => {
  return (
    <section
      className="bg-blend-darken bg-no-repeat bg-cover flex flex-col justify-center items-center px-4 sm:px-8 md:px-16 lg:px-32 xl:px-60 py-12 min-h-full"
      style={{ backgroundImage: "url('/images/pika.jpg')" }}
    >
      <div className="bg-black opacity-80 p-6 sm:p-8 rounded-lg w-full max-w-4xl">
        <div className="flex flex-col justify-center items-center space-y-12">
          {/* Column of three children */}
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-12 sm:space-y-0 sm:space-x-8">
            {/* Drivers Card */}
            <div className="h-40 w-40 sm:h-52 sm:w-52 bg-white flex flex-col justify-center items-center mx-4">
              <div className="bg-amber-950 rounded-full w-20 h-20 sm:w-24 sm:h-24 flex justify-center items-center">
                <div className="text-white text-center">
                  <FaMotorcycle className="text-white text-4xl" />
                </div>
              </div>
              <div className="m-2 text-amber-950 font-bold text-center">
                Drivers
              </div>
            </div>

            {/* Customers Card */}
            <div className="h-40 w-40 sm:h-52 sm:w-52 bg-white flex flex-col justify-center items-center mx-4">
              <div className="bg-amber-950 rounded-full w-20 h-20 sm:w-24 sm:h-24 flex justify-center items-center">
                <div className="text-white text-center">
                  <FaUsers className="text-white text-4xl" />
                </div>
              </div>
              <div className="m-2 text-amber-950 font-bold text-center">
                Customers
              </div>
            </div>

            {/* Suppliers Card */}
            <div className="h-40 w-40 sm:h-52 sm:w-52 bg-white flex flex-col justify-center items-center mx-4">
              <div className="bg-amber-950 rounded-full w-20 h-20 sm:w-24 sm:h-24 flex justify-center items-center">
                <div className="text-white text-center">
                  <FaUserCheck className="text-white text-4xl" />
                </div>
              </div>
              <div className="m-2 text-amber-950 font-bold text-center">
                Suppliers
              </div>
            </div>
          </div>

          {/* Text section */}
          <div className="text-white text-center max-w-2xl px-4 sm:px-0">
            If you are an Android mobile device user and looking for a gas
            delivery service, Kasarani GAS is the best choice for you. We
            designed a simple and convenient to use mobile gas delivery app
            where you can place your order with just few steps.
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeOfferSection;
