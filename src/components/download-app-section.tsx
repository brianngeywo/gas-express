import db from "@/utils/db";
import ImagesHeader from "./images-header";

const getDownloadLink = async () => {
 const appInfor = await db.downloadAppAction.findFirstOrThrow();
 return appInfor;
}

const DownloadAppSection = async () => {
  const appInfor = await getDownloadLink();
  return (
    <div className="flex flex-col justify-center items-center min-h-screen p-4 sm:p-8 bg-gray-900 text-white">
      {/* Image Header */}
      <div className="max-w-4xl md:max-w-full mb-8 sm:mb-12">
        <ImagesHeader />
      </div>

      {/* Heading */}
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4 sm:mb-6">
        {appInfor.title}
      </h1>

      {/* Description */}
      <p className="text-center max-w-2xl mb-6 sm:mb-8 text-base sm:text-lg text-gray-300">
        {appInfor.pitchText}
      </p>

      {/* Play Store Download Link */}
      <a
        href={`${appInfor.playStoreLink}`}
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