import db from "@/utils/db";
import { newContactInfor } from "@/utils/form-actions";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import ContactForm from "./ContactForm";
import ContactDetails from "./ContactDetails";

// components/ContactInfo.js
const ContactInfo = ({}) => {
  return (
    <div
      id="contact-section"
      className="min-h-screen py-8 bg-no-repeat bg-cover px-4 sm:px-8 md:px-16 lg:px-32 xl:px-60"
      style={{ backgroundImage: "url('/images/bg-2.jpg')" }}
    >
      <div className="mx-auto py-8">
        <div className="flex flex-col lg:flex-row space-y-8 lg:space-y-0 lg:space-x-8">
          {/* Left Section - Form */}
          < ContactForm />

          {/* Right Section - Contact Details */}
          <ContactDetails />
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
