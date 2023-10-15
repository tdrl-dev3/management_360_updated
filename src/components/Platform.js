const Platform = () => {
  return (
    <div className=" bg-even-color py-20">
      <div className=" container">
        <div className="flex flex-col">
          <div className=" mb-8">
            <div className="w-full">
              <div className=" w-full text-center">
                <h2 className="text-[1.8rem] lg:text-5xl font-poppins">
                  Choose a Platform that suits your business
                </h2>
                <div className=" mt-10">
                  <p className=" mb-5 text-gray-600">
                    Currently Management 360 is available in two platforms,
                    Cloud version and Offline version. Cloud version is best
                    suited for remote access by multipe users, meanwhile offline
                    version is best suitable for single user.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="flex flex-col items-center bg-white rounded-lg border shadow-md sm:p-8">
                <h5 className="mb-4 text-xl font-medium text-gray-700 ">
                  Cloud version
                </h5>
                <svg
                  className="w-12 h-12 text-gray-600"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M5.5 16a3.5 3.5 0 01-.369-6.98 4 4 0 117.753-1.977A4.5 4.5 0 1113.5 16h-8z" />
                </svg>
                <ul role="list" className="my-7 space-y-5">
                  <li className="flex space-x-3">
                    <svg
                      className="flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <span className="text-base font-normal leading-tight text-gray-500 ">
                      Unlimited number of users
                    </span>
                  </li>
                  <li className="flex space-x-3">
                    <svg
                      className="flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">
                      Cloud Backup
                    </span>
                  </li>
                  <li className="flex space-x-3">
                    <svg
                      className="flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">
                      API Integration
                    </span>
                  </li>
                  <li className="flex space-x-3">
                    <svg
                      className="flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">
                      Remote Access
                    </span>
                  </li>
                  <li className="flex space-x-3">
                    <svg
                      className="flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">
                      Remote Support
                    </span>
                  </li>
                </ul>
              </div>
              <div className="flex flex-col items-center bg-white rounded-lg border shadow-md sm:p-8 ">
                <h5 className="mb-4 text-xl font-medium text-gray-700 ">
                  Offline version
                </h5>
                <svg
                  className="w-12 h-12 text-gray-600"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M3.707 2.293a1 1 0 00-1.414 1.414l6.921 6.922c.05.062.105.118.168.167l6.91 6.911a1 1 0 001.415-1.414l-.675-.675a9.001 9.001 0 00-.668-11.982A1 1 0 1014.95 5.05a7.002 7.002 0 01.657 9.143l-1.435-1.435a5.002 5.002 0 00-.636-6.294A1 1 0 0012.12 7.88c.924.923 1.12 2.3.587 3.415l-1.992-1.992a.922.922 0 00-.018-.018l-6.99-6.991zM3.238 8.187a1 1 0 00-1.933-.516c-.8 3-.025 6.336 2.331 8.693a1 1 0 001.414-1.415 6.997 6.997 0 01-1.812-6.762zM7.4 11.5a1 1 0 10-1.73 1c.214.371.48.72.795 1.035a1 1 0 001.414-1.414c-.191-.191-.35-.4-.478-.622z" />
                </svg>
                <ul role="list" className="my-7 space-y-5">
                  <li className="flex space-x-3">
                    <svg
                      className="flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <span className="text-base font-normal leading-tight text-gray-500 ">
                      Single User
                    </span>
                  </li>
                  <li className="flex space-x-3">
                    <svg
                      className="flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <span className="text-base font-normal leading-tight text-gray-500 ">
                      Local Backup
                    </span>
                  </li>
                  <li className="flex space-x-3 line-through decoration-gray-500">
                    <svg
                      className="flex-shrink-0 w-5 h-5 text-gray-400 dark:text-gray-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <span className="text-base font-normal leading-tight text-gray-500">
                      API Integration
                    </span>
                  </li>
                  <li className="flex space-x-3 line-through decoration-gray-500">
                    <svg
                      className="flex-shrink-0 w-5 h-5 text-gray-400 dark:text-gray-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <span className="text-base font-normal leading-tight text-gray-500">
                      Remote Access
                    </span>
                  </li>
                  <li className="flex space-x-3 line-through decoration-gray-500">
                    <svg
                      className="flex-shrink-0 w-5 h-5 text-gray-400 dark:text-gray-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <span className="text-base font-normal leading-tight text-gray-500">
                      Remote Support
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Platform;
