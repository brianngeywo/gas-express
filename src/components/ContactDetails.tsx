import db from "@/utils/db";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

const getContactDetails = async () => {
  const contactDetails = await db.contactDetails.findFirst();
  return contactDetails;
};

// components/ContactInfo.js
const ContactDetails = async () => {
  const contactDetails = await getContactDetails();

  // If no contact details are found, display a fallback message
  if (!contactDetails) {
    return (
      <div className="w-full lg:w-1/2 bg-white rounded-lg p-8 sm:p-12 lg:p-16">
        <p className="text-gray-600">No contact details available.</p>
      </div>
    );
  }

  return (
    <div className="w-full lg:w-1/2 bg-white rounded-lg p-8 sm:p-12 lg:p-16">
      <div className="mt-8">
        <h2 className="text-xl font-bold mb-4 text-amber-950">Quick Contact</h2>
        <p className="text-gray-600">
          Email:{" "}
          <a
            href={`mailto:${contactDetails.supportEmail}`}
            className="text-gray-700"
          >
            {contactDetails.supportEmail}
          </a>
        </p>
        <p className="text-gray-600">
          Support:{" "}
          <a
            href={`mailto:${contactDetails.supportEmail}`}
            className="text-gray-700"
          >
            {contactDetails.supportEmail}
          </a>
        </p>
      </div>

      <div className="mt-8">
        <h2 className="text-xl font-bold mb-4 text-amber-950">Phone Number</h2>
        <p className="text-gray-600">
          Call Us:{" "}
          <a
            href={`tel:${contactDetails.phoneNumber}`}
            className="text-gray-700"
          >
            {contactDetails.phoneNumber}
          </a>
        </p>
      </div>

      <div className="mt-8">
        <h2 className="text-xl font-bold mb-4 text-amber-950">Follow us</h2>
        <div className="flex space-x-4">
          {contactDetails.facebookUrl && (
            <a
              href={contactDetails.facebookUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook className="text-amber-950 hover:text-amber-700 text-2xl" />
            </a>
          )}
          {contactDetails.twitterUrl && (
            <a
              href={contactDetails.twitterUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter className="text-amber-950 hover:text-amber-700 text-2xl" />
            </a>
          )}
          {contactDetails.instagramUrl && (
            <a
              href={contactDetails.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className="text-amber-950 hover:text-amber-700 text-2xl" />
            </a>
          )}
          {contactDetails.linkedinUrl && (
            <a
              href={contactDetails.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="text-amber-950 hover:text-amber-700 text-2xl" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ContactDetails;