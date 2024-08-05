function Footer() {
  return (
    <footer className="bg-black text-gray-400 py-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4 sm:px-6 lg:px-8">
        <div>
          <h2 className="text-white text-lg font-semibold mb-4">About Us</h2>
          <p className="mb-4">
            Shubham Events and Catering specializes in creating memorable events
            with a personal touch. From exceptional catering to seamless event
            planning, we bring your vision to life with expertise and
            creativity.
          </p>
        </div>
        <div>
          <h2 className="text-white text-lg font-semibold mb-4">Quick Links</h2>
          <ul>
            <li>
              <a
                href="/"
                className="hover:text-white transition-colors duration-300"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="/"
                className="hover:text-white transition-colors duration-300"
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="/services"
                className="hover:text-white transition-colors duration-300"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="/contact"
                className="hover:text-white transition-colors duration-300"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-white text-lg font-semibold mb-4">Follow Us</h2>
          <div className="flex space-x-4">
            <a
              href="https://www.facebook.com/sonikshubham?mibextid=ZbWKwL"
              className="hover:text-white transition-colors duration-300"
            >
              Facebook
            </a>
            <a
              href="#"
              className="hover:text-white transition-colors duration-300"
            >
              Twitter
            </a>
            <a
              href="https://www.instagram.com/unpaird__electron?igsh=MTNhbW9sNWFvZXE4dg=="
              className="hover:text-white transition-colors duration-300"
            >
              Instagram
            </a>
          </div>
        </div>
        <div>
          <h2 className="text-white text-lg font-semibold mb-4">Contact Us</h2>
          <p>Latehar, Jharkhand, India</p>
          <p>Bajartad (Near fire-brigade office), Latehar - 829206</p>
          <p>Email: sonikshubham60@gmail.com</p>
          <p>Phone: (+91) 8340561344</p>
        </div>
      </div>
      <p className="text-center text-xs pt-8">
        © 2024 Shubham Events and Catering. All rights reserved. Developed with
        <span className="text-red-500">&#9829;</span> by{" "}
        <a
          href="https://kaushal-portfolio-lime.vercel.app/"
          className="text-teal-500 hover:text-teal-300 transition-colors duration-300"
        >
          Kaushal
        </a>
      </p>
    </footer>
  );
}

export default Footer;
