const Hero = () => {
  return (
    <div className="container flex flex-col px-6 py-10 mx-auto space-y-6 lg:h-[32rem] lg:py-16 lg:flex-row lg:items-center">
      <div className="w-full lg:w-1/2">
        <div className="lg:max-w-lg">
          <h1 className="text-3xl font-bold tracking-wide text-gray-800">
            We Make Shoes to Look Awesome and Last Forever
          </h1>
          <div className="mt-8 space-y-5">
            <p className="flex items-center -mx-2 text-gray-700">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 mx-2 text-blue-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span className="mx-2">Hand-Made Natual Leather</span>
            </p>
            <p className="flex items-center -mx-2 text-gray-700">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 mx-2 text-blue-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span className="mx-2">Extra Comfy Coating</span>
            </p>
            <p className="flex items-center -mx-2 text-gray-700">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 mx-2 text-blue-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span className="mx-2">1-Year Gurantee</span>
            </p>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center w-full h-96 lg:w-1/2">
        <img
          className="object-cover w-full h-full mx-auto rounded-md lg:max-w-2xl"
          src="https://i.insider.com/63c958802a1e600018b8b01a?width=1136&format=jpeg"
          alt="glasses photo"
        />
      </div>
    </div>
  );
};

export default Hero;
