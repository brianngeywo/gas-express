// components/ContactInfo.js
export default function ContactInfo() {
  return (
    <div className="min-h-screen py-8 bg-no-repeat bg-cover px-60" style={{backgroundImage: "url('/images/bg-2.jpg')"}}>
      <div className=" mx-auto py-8">
        <div className="flex flex-row space-x-8">
          <div className="px-48 min-w-2xl">
            <h1 className="text-4xl font-bold mb-6 text-amber-950">Let's Talk!</h1>
            <p className="mb-6 text-gray-700">
              Get in touch with us using the enquiry form or contact details
              below.
            </p>

            <form className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="First name *"
                  className="p-2 border rounded border-gray-500 text-black placeholder-black-500"
                />
                <input
                  type="text"
                  placeholder="Last name *"
                  className="p-2 border rounded border-gray-black text-black placeholder-black-500"
                />
              </div>
              <div className="grid grid-cols-2 gap-4 border-gray-black text-black placeholder-gray-500">
                <input
                  type="email"
                  placeholder="Your mail *"
                  className="p-2 border rounded border-gray-black text-black placeholder-gray-500"
                />
                <input
                  type="tel"
                  placeholder="Phone number *"
                  className="p-2 border rounded border-gray-black text-black placeholder-gray-500"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
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

          <div className="bg-white rounded-lg shadow-xl p-16 max-w-md">
            <div className="mt-8">
              <div>
                <h2 className="text-xl font-bold mb-4 text-amber-950 font-bold">
                Our Location
              </h2>
              </div>
              
              <p className=" text-gray-700">
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
              <h2 className="text-xl font-bold mb-4 text-amber-950">Follow us</h2>
              {/* Add social media icons/links here */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
