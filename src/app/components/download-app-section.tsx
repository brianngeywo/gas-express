import ImagesHeader from "./images-header";

const DownloadAppSection = () => {
  return (
    <div className="flex flex-col justify-evenly items-center min-h-screen p-8 bg-gray-900 text-white">
      {/* Image Header */}
      <ImagesHeader />

      {/* Heading */}
      <h1 className="text-4xl font-bold text-center mb-4 mt-20">
        Download our App today!
      </h1>

      {/* Description */}
      <p className="text-center max-w-2xl mb-8 text-lg text-gray-300">
        If you are an Android mobile device user and looking for a gas delivery
        service, Kasarani GAS is the best choice for you. We designed a simple
        and convenient-to-use mobile gas delivery app where you can place your
        order with just a few steps.
      </p>

      {/* Play Store Download Link */}
      <a
        href="https://play.google.com/store/apps/details?id=com.girrafe.kasarani_gas_center"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors shadow-lg"
      >
        Download on Google Play
      </a>
    </div>
  );
};

export default DownloadAppSection;