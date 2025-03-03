import { newContactInfor } from "@/utils/form-actions";

// components/ContactInfo.js
const ContactForm = ({}) => {
  return (
    <div className="w-full lg:w-1/2 px-4 sm:px-8 lg:px-14">
      <h1 className="text-3xl sm:text-4xl font-bold mb-6 text-amber-950">
        {`Let's Talk!`}
      </h1>
      <p className="mb-6 text-gray-700">
        Get in touch with us using the enquiry form or contact details below.
      </p>

      <form className="space-y-4" action={newContactInfor}>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <input
            name="firstName"
            type="text"
            placeholder="First name *"
            className="p-2 border rounded border-gray-500 text-black placeholder-black-500"
          />
          <input
            name="lastName"
            type="text"
            placeholder="Last name *"
            className="p-2 border rounded border-gray-500 text-black placeholder-black-500"
          />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <input
            name="email"
            type="email"
            placeholder="Your email *"
            className="p-2 border rounded border-gray-500 text-black placeholder-gray-500"
          />
          <input
            name="phone"
            type="tel"
            placeholder="Phone number *"
            className="p-2 border rounded border-gray-500 text-black placeholder-gray-500"
          />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <select name="role" className="p-2 border rounded text-black">
            <option>Client </option>
            <option>Driver</option>
            <option>Vendor</option>
          </select>
          <select name="inquiryType" className="p-2 border rounded text-black">
            <option>Solution</option>
            <option>Complaint</option>
          </select>
        </div>
        <textarea
          name="message"
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
  );
};

export default ContactForm;
