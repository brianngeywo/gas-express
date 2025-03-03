const WhyUsSection = () => {
  return (
    <div className="flex flex-col justify-center items-center bg-gray-200 min-h-full px-4 sm:px-8 md:px-16 lg:px-32 xl:px-60 py-12">
      {/* Title Section */}
      <div className="text-amber-950 text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12">
        Why Kasarani Gas?
      </div>

      {/* Three Cards Section */}
      <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-8">
        {/* Card 1 */}
        <div className="h-40 w-40 sm:h-52 sm:w-52 bg-white flex flex-col justify-center items-center p-4 rounded-lg shadow-xl">
          <div className="bg-amber-950 rounded-full w-16 h-16 sm:w-24 sm:h-24 flex justify-center items-center">
            <div className="text-white text-center">icon</div>
          </div>
          <div className="m-2 text-black font-bold text-center text-sm sm:text-base">
            Easy to order Gas
          </div>
          <div className="text-xs sm:text-sm text-gray-600 text-center">
            We offer fast gas delivery to your location
          </div>
        </div>

        {/* Card 2 */}
        <div className="h-40 w-40 sm:h-52 sm:w-52 bg-white flex flex-col justify-center items-center p-4 rounded-lg shadow-md">
          <div className="bg-amber-950 rounded-full w-16 h-16 sm:w-24 sm:h-24 flex justify-center items-center">
            <div className="text-white text-center">icon</div>
          </div>
          <div className="m-2 text-black font-bold text-center text-sm sm:text-base">
            Fast delivery
          </div>
          <div className="text-xs sm:text-sm text-gray-600 text-center">
            Never worry about your gas, we will refill your gas fast
          </div>
        </div>

        {/* Card 3 */}
        <div className="h-40 w-40 sm:h-52 sm:w-52 bg-white flex flex-col justify-center items-center p-4 rounded-lg shadow-md">
          <div className="bg-amber-950 rounded-full w-16 h-16 sm:w-24 sm:h-24 flex justify-center items-center">
            <div className="text-white text-center">icon</div>
          </div>
          <div className="m-2 text-black font-bold text-center text-sm sm:text-base">
            Clean cooking
          </div>
          <div className="text-xs sm:text-sm text-gray-600 text-center">
            No smoke. Less smell, better health
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyUsSection;
