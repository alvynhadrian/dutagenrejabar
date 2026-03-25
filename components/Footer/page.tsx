export default function Footer() {
  return (
    <footer className="relative bg-gray-200 pt-10 pb-6 mt-16">
      <div className="max-w-6xl mx-auto px-4">
        {/* TOP */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-10">
          {/* LEFT */}
          <div className="md:w-1/2">
            <h4 className="text-3xl font-semibold text-gray-700">
              Let’s keep in touch!
            </h4>
            <h5 className="text-lg mt-2 mb-4 text-gray-600">
              Find us on any of these platforms.
            </h5>

            {/* SOCIAL */}
            <div className="flex gap-3 mt-4">
              <button className="bg-white text-blue-400 shadow-lg h-10 w-10 flex items-center justify-center rounded-full hover:scale-110 transition">
                <i className="fab fa-twitter"></i>
              </button>

              <button className="bg-white text-blue-600 shadow-lg h-10 w-10 flex items-center justify-center rounded-full hover:scale-110 transition">
                <i className="fab fa-facebook-square"></i>
              </button>

              <button className="bg-white text-pink-400 shadow-lg h-10 w-10 flex items-center justify-center rounded-full hover:scale-110 transition">
                <i className="fab fa-dribbble"></i>
              </button>

              <button className="bg-white text-gray-800 shadow-lg h-10 w-10 flex items-center justify-center rounded-full hover:scale-110 transition">
                <i className="fab fa-github"></i>
              </button>
            </div>
          </div>

          {/* RIGHT */}
          <div className="flex gap-12 md:w-1/2 justify-start md:justify-end">
            {/* LINKS */}
            <div>
              <span className="block uppercase text-gray-500 text-sm font-semibold mb-2">
                Useful Links
              </span>
              <ul>
                <li>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-gray-800 text-sm block pb-2"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-gray-800 text-sm block pb-2"
                  >
                    Blog
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-gray-800 text-sm block pb-2"
                  >
                    Github
                  </a>
                </li>
              </ul>
            </div>

            {/* RESOURCES */}
            <div>
              <span className="block uppercase text-gray-500 text-sm font-semibold mb-2">
                Resources
              </span>
              <ul>
                <li>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-gray-800 text-sm block pb-2"
                  >
                    Terms
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-gray-800 text-sm block pb-2"
                  >
                    Privacy
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-gray-800 text-sm block pb-2"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* LINE */}
        <hr className="my-6 border-gray-300" />

        {/* COPYRIGHT */}
        <div className="text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Shofwah | Ruang.Rekreasi
        </div>
      </div>
    </footer>
  );
}
