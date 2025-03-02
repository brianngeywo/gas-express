const DashboardFooter = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-8 px-60 w-screen">
      <div className="">
        <div className="flex flex-col justify-evenly items-center">
          <div className="container">
            <div className="flex flex-row justify-evenly items-start">
              <div>
                <div className="min-w-md">
                  <h1 className="text-2xl font-bold mb-6 text-amber-950 font-bold">
                    BEBA GAS
                  </h1>
                  <p className="mb-4 text-black">
                    Pioneer house, Kenyatta Ave, Nairobi, Kenya
                  </p>
                  <p className="mb-4 text-black">+254 704 017104</p>

                  <div className="mb-6">
                    <h2 className="text-xl font-bold mb-2 text-black">
                      Support Department
                    </h2>
                    <p>
                      <a
                        href="mailto:info@bebagas.com"
                        className="text-blue-500"
                      >
                        info@bebagas.com
                      </a>
                    </p>
                    <p>
                      <a
                        href="mailto:support@bebagas.com"
                        className="text-blue-500"
                      >
                        support@bebagas.com
                      </a>
                    </p>
                    <p>
                      <a
                        href="mailto:drivers@bebagas.com"
                        className="text-blue-500"
                      >
                        drivers@bebagas.com
                      </a>
                    </p>
                  </div>
                </div>
              </div>
              <div className="container min-w-md">
                <div className="mb-6">
                  <h2 className="text-xl font-bold mb-2 text-amber-950 font-bold">
                    Useful Links
                  </h2>
                  <ul>
                    <li className="text-black">Home</li>
                    <li className="text-black">About Us</li>
                    <li className="text-black">Contact Us</li>
                    <li className="text-black">Privacy</li>
                    <li className="text-black">Terms and condition</li>
                    <li className="text-black">Downloads</li>
                  </ul>
                </div>
              </div>
              <div className="container min-w-md">
                <div className="mb-6">
                  <h2 className="text-xl font-bold mb-2 text-amber-950 font-bold">
                    Register as:
                  </h2>
                  <ul>
                    <li className="text-black">Vendor</li>
                    <li className="text-black">Customer</li>
                    <li className="text-black">Delivery boy</li>
                  </ul>
                </div>{" "}
                <div className="mb-6">
                  <input
                    type="email"
                    placeholder="Your mail address"
                    className="w-full p-2 border rounded"
                  />
                </div>
              </div>
              <div className="container min-w-md">
                <div className="mb-6">
                  <div className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors shadow-lg">
                    <a
                      href="https://play.google.com/store/apps/details?id=com.girrafe.kasarani_gas_center"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-bold"
                    >
                      Get on Play Store
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardFooter;
