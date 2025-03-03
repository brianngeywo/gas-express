// components/ContactInfo.js
export default function ContactInfo() {
  return (
    <div
      className="min-h-screen py-8 bg-no-repeat bg-cover px-4 sm:px-8 md:px-16 lg:px-32 xl:px-60"
      style={{ backgroundImage: "url('/images/bg-2.jpg')" }}
    >
      <div className="mx-auto py-8">
        <div className="flex flex-col lg:flex-row space-y-8 lg:space-y-0 lg:space-x-8">
          {/* Left Section - Form */}
          <div className="w-full lg:w-1/2 px-4 sm:px-8 lg:px-14">
            <h1 className="text-3xl sm:text-4xl font-bold mb-6 text-amber-950">
              Let's Talk!
            </h1>
            <p className="mb-6 text-gray-700">
              Get in touch with us using the enquiry form or contact details
              below.
            </p>

            <form className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="First name *"
                  className="p-2 border rounded border-gray-500 text-black placeholder-black-500"
                />
                <input
                  type="text"
                  placeholder="Last name *"
                  className="p-2 border rounded border-gray-500 text-black placeholder-black-500"
                />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="email"
                  placeholder="Your email *"
                  className="p-2 border rounded border-gray-500 text-black placeholder-gray-500"
                />
                <input
                  type="tel"
                  placeholder="Phone number *"
                  className="p-2 border rounded border-gray-500 text-black placeholder-gray-500"
                />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <select className="p-2 border rounded text-black">
                  <option>Vendor/Client/Driver *</option>
                </select>
                <select className="p-2 border rounded text-black">
                  <option>Solution</option>
                </select>
              </div>
              <textarea
                placeholder="Message..."
                className="w-full p-2 border rounded text-black"
                rows={4}
              ></textarea>
              <button
                type="submit"
                className="bg-amber-950 text-white p-2 rounded w-full"
              >
                Submit
              </button>
            </form>
          </div>

          {/* Right Section - Contact Details */}
          <div className="w-full lg:w-1/2 bg-white rounded-lg shadow-xl p-8 sm:p-12 lg:p-16">
            <div className="mt-8">
              <h2 className="text-xl font-bold mb-4 text-amber-950">
                Our Location
              </h2>
              <p className="text-gray-700">
                Visit us at our offices in Nairobi, Pioneer house, Kenyatta Ave,
                Nairobi, Kenya
              </p>
            </div>

            <div className="mt-8">
              <h2 className="text-xl font-bold mb-4 text-amber-950">
                Quick Contact
              </h2>
              <p className="text-gray-600">
                Email:{" "}
                <a href="mailto:info@bebagas.com" className="text-gray-700">
                  info@bebagas.com
                </a>
              </p>
              <p className="text-gray-600">
                Support:{" "}
                <a href="mailto:support@bebagas.com" className="text-gray-700">
                  support@bebagas.com
                </a>
              </p>
            </div>

            <div className="mt-8">
              <h2 className="text-xl font-bold mb-4 text-amber-950">
                Phone Number
              </h2>
              <p className="text-gray-600">
                Call Us:{" "}
                <a href="tel:+254704017104" className="text-gray-700">
                  +254 704 017104
                </a>
              </p>
            </div>

            <div className="mt-8">
              <h2 className="text-xl font-bold mb-4 text-amber-950">
                Follow us
              </h2>
              {/* Add social media icons/links here */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}