const DashboardFooter = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4 sm:px-8 md:px-16 lg:px-32 xl:px-60">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-start space-y-8 lg:space-y-0 lg:space-x-8">
          {/* BEBA GAS Section */}
          <div className="w-full lg:w-1/4">
            <h1 className="text-2xl font-bold mb-6 text-amber-950">Kasarani Gas</h1>
            <p className="mb-4 text-black">
              Pioneer house, Kenyatta Ave, Nairobi, Kenya
            </p>
            <p className="mb-4 text-black">+254 727 521 521</p>

            <div className="">
              <h2 className="text-xl font-bold mb-2 text-amber-950">
                Support Department
              </h2>
              <p>
                <a href="mailto:info@bebagas.com" className="text-gray-700">
                  info@gasexpress.com
                </a>
              </p>
              <p>
                <a href="mailto:support@bebagas.com" className="text-gray-700">
                  support@gasexpress.com
                </a>
              </p>
              <p>
                <a href="mailto:drivers@bebagas.com" className="text-gray-700">
                  drivers@gasexpress.com
                </a>
              </p>
            </div>
          </div>

          {/* Useful Links Section */}
          <div className="w-full lg:w-1/4">
            <h2 className="text-xl font-bold mb-2 text-amber-950">
              Useful Links
            </h2>
            <ul className="space-y-2">
              <li className="text-black">Home</li>
              {/* <li className="text-black">About Us</li> */}
              <li className="text-black">Contact Us</li>
              <li className="text-black">Privacy</li>
              <li className="text-black">Terms and condition</li>
              {/* <li className="text-black">Downloads</li> */}
            </ul>
          </div>

          {/* Register Section */}
          <div className="w-full lg:w-1/4">
            <div className="">
              <h2 className="text-xl font-bold mb-2 text-amber-950">
                Register as:
              </h2>
              <ul className="space-y-2">
                <li className="text-black">Vendor</li>
                <li className="text-black">Customer</li>
                <li className="text-black">Delivery boy</li>
              </ul>
            </div>
{/* 
            <div className="">
              <input
                type="email"
                placeholder="Your mail address"
                className="w-full p-2 border rounded"
              />
            </div> */}
          </div>

          {/* Play Store Button Section */}
          <div className="w-full lg:w-1/4">
            <div className="mb-6">
              <a
                href="https://play.google.com/store/apps/details?id=com.girrafe.kasarani_gas_center"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-blue-600 text-white px-6 py-3 sm:px-8 sm:py-4 rounded-lg text-sm sm:text-base font-semibold hover:bg-blue-700 transition-colors shadow-lg"
              >
                Get on Play Store
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardFooter;
