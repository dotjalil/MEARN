const Footer = () => {
  return (
    <div className="mx-auto">
      <footer className="p-4 bg-white rounded-lg shadow md:px-6 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          Logo
          <ul className="flex flex-wrap items-center mb-6 sm:mb-0">
            <li>
              <a
                href="/"
                className="mr-4 text-sm text-gray-500 hover:underline md:mr-6"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="/"
                className="mr-4 text-sm text-gray-500 hover:underline md:mr-6"
              >
                Privacy Policy
              </a>
            </li>
            <li>
              <a
                href="/"
                className="mr-4 text-sm text-gray-500 hover:underline md:mr-6"
              >
                Licensing
              </a>
            </li>
            <li>
              <a href="/" className="text-sm text-gray-500 hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center">
          © 2022 . All Rights Reserved.
        </span>
      </footer>
    </div>
  );
};

export default Footer;
