const WhyUsSection = () => {
  return (
    <div className="flex flex-col justify-center items-center bg-gray-200 min-h-full px-60 py-12">
      {/* Title Section */}
      <div className="text-amber-950 text-3xl font-bold text-center mb-12">
        Why Kasarani Gas?
      </div>

      {/* Three Cards Section */}
      <div className="flex flex-row justify-center items-center gap-8">
        {/* Card 1 */}
        <div className="h-52 w-52 bg-white flex flex-col justify-center items-center p-4 rounded-lg shadow-xl">
          <div className="bg-amber-950 rounded-full w-24 h-24 flex justify-center items-center">
            <div className="text-white text-center">icon</div>
          </div>
          <div className="m-2 text-black font-bold text-center">
            Easy to order Gas
          </div>
          <div className="text-sm text-gray-600 text-center">
            We offer fast gas delivery to your location
          </div>
        </div>

        {/* Card 2 */}
        <div className="h-52 w-52 bg-white flex flex-col justify-center items-center p-4 rounded-lg shadow-md">
          <div className="bg-amber-950 rounded-full w-24 h-24 flex justify-center items-center">
            <div className="text-white text-center">icon</div>
          </div>
          <div className="m-2 text-black font-bold text-center">
            Fast delivery
          </div>
          <div className="text-sm text-gray-600 text-center">
            Never worry about your gas, we will refill your gas fast
          </div>
        </div>

        {/* Card 3 */}
        <div className="h-52 w-52 bg-white flex flex-col justify-center items-center p-4 rounded-lg shadow-md">
          <div className="bg-amber-950 rounded-full w-24 h-24 flex justify-center items-center">
            <div className="text-white text-center">icon</div>
          </div>
          <div className="m-2 text-black font-bold text-center">
            Clean cooking
          </div>
          <div className="text-sm text-gray-600 text-center">
            No smoke. Less smell, better health
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyUsSection;
