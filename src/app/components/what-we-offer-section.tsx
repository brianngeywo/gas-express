const WhatWeOfferSection = () => {
  return (
    <section
      className="bg-blend-darken bg-no-repeat bg-cover flex flex-col justify-center items-center px-60 min-h-full"
      style={{ backgroundImage: "url('/images/pika.jpg')" }}
    >
      <div className="bg-black opacity-75 p-8 rounded-lg my-6">
        <div className="flex flex-col justify-center items-center space-y-8">
          {/* Column of three children */}
          <div className="flex flex-row space-y-8">
            <div className="h-52 w-52 bg-white flex flex-col justify-center items-center mx-4">
              <div className="bg-amber-950 rounded-full w-24 h-24 flex justify-center items-center">
                <div className="text-white text-center">icon</div>
              </div>
              <div className="m-2 text-amber-950 font-bold text-center">
                Drivers
              </div>
            </div>

            <div className="h-52 w-52 bg-white flex flex-col justify-center items-center mx-4">
              <div className="bg-amber-950 rounded-full w-24 h-24 flex justify-center items-center">
                <div className="text-white text-center">icon</div>
              </div>
              <div className="m-2 text-amber-950 font-bold text-center">
                Customers
              </div>
            </div>

            <div className="h-52 w-52 bg-white flex flex-col justify-center items-center mx-4">
              <div className="bg-amber-950 rounded-full w-24 h-24 flex justify-center items-center">
                <div className="text-white text-center">icon</div>
              </div>
              <div className="m-2 text-amber-950 font-bold text-center">
                Suppliers
              </div>
            </div>
          </div>

          {/* Text section */}
          <div className="text-white text-center max-w-2xl">
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
