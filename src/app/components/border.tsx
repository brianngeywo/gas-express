const SectionBorder = () => {
  return (
    // Three rows and two columns grid
    <div className="grid grid-cols-6 grid-rows-2">
      {/* First cell with quarter-circle border */}
      <div className="relative col-span-1 row-span-1">
        <div className="w-full h-0 pb-[100%] bg-amber-950  rounded-tl-full overflow-hidden">
          <div className="absolute top-0 left-0 p-4">
            <h2 className="text-lg font-semibold">Border 1</h2>
            <p className="text-sm text-gray-500">
              Border is used to separate sections.
            </p>
          </div>
        </div>
      </div>
      <div className="relative col-span-1 row-span-1">
        <div className="w-full h-0 pb-[100%] bg-amber-950 m-0 p-0 rounded-tr-full overflow-hidden">
          <div className="absolute top-0 left-0 p-4">
            <h2 className="text-lg font-semibold">Border 1</h2>
            <p className="text-sm text-gray-500">
              Border is used to separate sections.
            </p>
          </div>
        </div>
      </div>
      {[...Array(2)].map((_, index) => (
        <div key={index} className="border border-gray-300 rounded-lg p-4">
          <h2 className="text-lg font-semibold">Border</h2>
          <p className="text-sm text-gray-500">
            Border is used to separate sections.
          </p>
        </div>
      ))}
      {/* First cell with quarter-circle border */}
      <div className="relative col-span-1 row-span-1">
        <div className="w-full h-0 pb-[100%] bg-amber-950  rounded-tl-full overflow-hidden">
          <div className="absolute top-0 left-0 p-4">
            <h2 className="text-lg font-semibold">Border 1</h2>
            <p className="text-sm text-gray-500">
              Border is used to separate sections.
            </p>
          </div>
        </div>
      </div>
      <div className="relative col-span-1 row-span-1">
        <div className="w-full h-0 pb-[100%] bg-amber-950 m-0 p-0 rounded-tr-full overflow-hidden">
          <div className="absolute top-0 left-0 p-4">
            <h2 className="text-lg font-semibold">Border 1</h2>
            <p className="text-sm text-gray-500">
              Border is used to separate sections.
            </p>
          </div>
        </div>
      </div>
      {[...Array(2)].map((_, index) => (
        <div key={index} className="border border-gray-300 rounded-lg p-4">
          <h2 className="text-lg font-semibold">Border</h2>
          <p className="text-sm text-gray-500">
            Border is used to separate sections.
          </p>
        </div>
      ))}
      <div className="relative col-span-1 row-span-1">
        <div className="w-full h-0 pb-[100%] bg-amber-950  rounded-bl-full overflow-hidden">
          <div className="absolute top-0 left-0 p-4">
            <h2 className="text-lg font-semibold">Border 1</h2>
            <p className="text-sm text-gray-500">
              Border is used to separate sections.
            </p>
          </div>
        </div>
      </div>
      <div className="relative col-span-1 row-span-1  bg-amber-950">
        <div className="w-full h-0 pb-[100%] m-0 p-0 bg-black rounded-b-full overflow-hidden">
          <div className="absolute top-0 left-0 p-4">
            <h2 className="text-lg font-semibold">Border 1</h2>
            <p className="text-sm text-gray-500">
              Border is used to separate sections.
            </p>
          </div>
        </div>
      </div>

      {[...Array(2)].map((_, index) => (
        <div key={index} className="border border-gray-300 rounded-lg p-4">
          <h2 className="text-lg font-semibold">Border</h2>
          <p className="text-sm text-gray-500">
            Border is used to separate sections.
          </p>
        </div>
      ))}
    </div>
  );
};

export default SectionBorder;
