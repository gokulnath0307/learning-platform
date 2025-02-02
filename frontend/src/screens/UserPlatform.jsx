export const UserPlatform = () => {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
        <div>
          <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
            New Course
          </p>
        </div>

        <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
          <span className="relative inline-block">
            <span className="relative">Hi, {localStorage.username ?? ""}</span>
          </span>{" "}
        </h2>

        <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
          <span className="relative inline-block">
            <svg
              viewBox="0 0 52 24"
              fill="currentColor"
              className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
            >
              <defs>
                <pattern id="d5589eeb-3fca-4f01-ac3e-983224745704" x="0" y="0" width=".135" height=".30">
                  <circle cx="1" cy="1" r=".7" />
                </pattern>
              </defs>
              <rect fill="url(#d5589eeb-3fca-4f01-ac3e-983224745704)" width="52" height="24" />
            </svg>
            <span className="relative">Learn Tamil & English</span>
          </span>{" "}
          Unlock New Opportunities with Bilingual Skills!
        </h2>
        <p className="text-base text-gray-700 md:text-lg">
          Master Tamil and English to improve communication, enhance career prospects, and expand your cultural horizons. Start learning now!
        </p>
      </div>

      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="grid gap-8 row-gap-5 md:grid-cols-2">
          {/* Tamil Section */}
          <a
            href="/user/learn?learn=tamil"
            aria-label="Go to Tamil course"
            className="relative p-px overflow-hidden transition duration-300 transform border rounded shadow-sm hover:scale-105 group hover:shadow-xl hover:cursor-pointer"
          >
            <div className="absolute bottom-0 left-0 w-full h-1 duration-300 origin-left transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100" />
            <div className="absolute bottom-0 left-0 w-1 h-full duration-300 origin-bottom transform scale-y-0 bg-deep-purple-accent-400 group-hover:scale-y-100" />
            <div className="absolute top-0 left-0 w-full h-1 duration-300 origin-right transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100" />
            <div className="absolute bottom-0 right-0 w-1 h-full duration-300 origin-top transform scale-y-0 bg-deep-purple-accent-400 group-hover:scale-y-100" />
            <div className="relative flex flex-col h-full p-5 bg-white rounded-sm lg:items-center lg:flex-row">
              <div className="mb-6 mr-6 lg:mb-0">
                <div className="flex items-center justify-center w-20 h-20 rounded-full bg-indigo-50 lg:w-32 lg:h-32">
                  <span className="text-4xl text-deep-purple-accent-400 font-bold">T</span>
                </div>
              </div>
              <div className="flex flex-col justify-between flex-grow">
                <div>
                  <h6 className="mb-2 font-semibold leading-5">Learn Tamil</h6>
                  <p className="mb-2 text-sm text-gray-900">
                    Unlock the beauty of Tamil through real-world conversations, cultural immersion, and structured lessons. Dive into a rich
                    heritage and become fluent in Tamil, a language spoken by millions around the world.
                  </p>
                </div>
                <a
                  href="/learn-tamil"
                  aria-label="Go to Tamil course"
                  className="inline-flex items-center text-sm font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
                >
                  Start Learning Tamil
                </a>
              </div>
            </div>
          </a>

          {/* English Section */}
          <a
            href="/user/learn?learn=english"
            aria-label="Go to English course"
            className="relative p-px overflow-hidden transition duration-300 transform border rounded shadow-sm hover:scale-105 group hover:shadow-xl hover:cursor-pointer"
          >
            <div className="absolute bottom-0 left-0 w-full h-1 duration-300 origin-left transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100" />
            <div className="absolute bottom-0 left-0 w-1 h-full duration-300 origin-bottom transform scale-y-0 bg-deep-purple-accent-400 group-hover:scale-y-100" />
            <div className="absolute top-0 left-0 w-full h-1 duration-300 origin-right transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100" />
            <div className="absolute bottom-0 right-0 w-1 h-full duration-300 origin-top transform scale-y-0 bg-deep-purple-accent-400 group-hover:scale-y-100" />
            <div className="relative flex flex-col h-full p-5 bg-white rounded-sm lg:items-center lg:flex-row">
              <div className="mb-6 mr-6 lg:mb-0">
                <div className="flex items-center justify-center w-20 h-20 rounded-full bg-indigo-50 lg:w-32 lg:h-32">
                  <span className="text-4xl text-deep-purple-accent-400 font-bold">E</span>
                </div>
              </div>
              <div className="flex flex-col justify-between flex-grow">
                <div>
                  <h6 className="mb-2 font-semibold leading-5">Learn English</h6>
                  <p className="mb-2 text-sm text-gray-900">
                    Master the English language for business, travel, and everyday interactions. With expert lessons and a variety of engaging
                    activities, you’ll gain confidence in speaking and writing English fluently.
                  </p>
                </div>
                <a
                  href="/learn-english"
                  aria-label="Go to English course"
                  className="inline-flex items-center text-sm font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
                >
                  Start Learning English
                </a>
              </div>
            </div>
          </a>
        </div>
      </div>

      <p className="mx-auto mb-4 text-gray-600 sm:text-center lg:max-w-2xl lg:mb-6 md:px-16">
        Take your language skills to the next level. Whether you're starting with Tamil or English, our platform helps you progress at your own
        pace with engaging lessons and hands-on practice.
      </p>
    </div>
  );
};
