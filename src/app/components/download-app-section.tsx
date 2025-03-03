import ImagesHeader from "./images-header";

const DownloadAppSection = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen p-4 sm:p-8 bg-gray-900 text-white">
      {/* Image Header */}
      <div className="max-w-4xl md:max-w-full mb-8 sm:mb-12">
        <ImagesHeader />
      </div>

      {/* Heading */}
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4 sm:mb-6">
        Download our App today!
      </h1>

      {/* Description */}
      <p className="text-center max-w-2xl mb-6 sm:mb-8 text-base sm:text-lg text-gray-300">
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
        className="inline-block bg-blue-600 text-white px-6 py-3 sm:px-8 sm:py-4 rounded-lg text-base sm:text-lg font-semibold hover:bg-blue-700 transition-colors shadow-lg"
      >
        Download on Google Play
      </a>
    </div>
  );
};

export default DownloadAppSection;