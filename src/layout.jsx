import React from "react"
import "./sass/app.scss"
import { Link } from "gatsby"

export default function Layout({ children }) {
  return (
    <div>
      <nav className="max-w-6xl mx-auto font-poppins flex justify-center items-center py-3 border-gray-300 border-b">
        <Link to={`/`} className="text-2xl brand-logo">
          Crackerjack
        </Link>
      </nav>
      <nav className="max-w-6xl mx-auto font-poppins flex flex-wrap md:flex-no-wrap justify-between items-center py-3">
        <ul className="flex justify-center md:justify-start w-full text-sm md:text-base">
          <li className="mx-2 my-2 md:my-0">
            <Link to="#" className="hover:underline">
              Design
            </Link>
          </li>
          <li className="mx-2 my-2 md:my-0">
            <Link to="#" className="hover:underline">
              Develop
            </Link>
          </li>
          <li className="mx-2 my-2 md:my-0">
            <Link to="#" className="hover:underline">
              Deploy
            </Link>
          </li>
        </ul>
        <ul className="flex justify-center md:justify-end w-full text-sm md:text-base">
          <li className="mx-2 my-2 md:my-0">
            <Link to="#" className="hover:underline">
              Work
            </Link>
          </li>
          <li className="mx-2 my-2 md:my-0">
            <Link to="#" className="hover:underline">
              Solutions
            </Link>
          </li>
          <li className="mx-2 my-2 md:my-0">
            <Link
              to={`https://github.com/crackerjackdev`}
              target="_blank"
              className="hover:underline"
            >
              Open Source
            </Link>
          </li>
          <li className="mx-2 my-2 md:my-0">
            <Link to="#" className="hover:underline">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
      <main>{children}</main>
      <footer className="max-w-6xl mx-auto border-t py-3">
        <div className="flex flex-wrap md:flex-no-wrap justify-between text-sm text-center md:text-left">
          <div className="w-full md:w-1/4 mb-3">
            <Link to="#" className="text-2xl brand-logo">
              Crackerjack
            </Link>
          </div>
          <div className="w-full md:w-1/4">
            <h4 className="mb-2 font-ibm-serif text-base italic">Design</h4>
            <ul className="mb-3 md:mb-0">
              <li>
                <Link to={`/`}>Logos</Link>
              </li>
              <li>
                <Link to={`/`}>Web Apps</Link>
              </li>
              <li>
                <Link to={`/`}>Mobile Apps</Link>
              </li>
              <li>
                <Link to={`/`}>Business Cards</Link>
              </li>
              <li>
                <Link to={`/`}>Brochures</Link>
              </li>
              <li>
                <Link to={`/`}>Canvas & Banners</Link>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/4">
            <h4 className="mb-2 font-ibm-serif text-base italic">Develop</h4>
            <ul className="mb-3 md:mb-0">
              <li>
                <Link to={`/`}>Web Development</Link>
              </li>
              <li>
                <Link to={`/`}>Mobile Apps</Link>
              </li>
              <li>
                <Link to={`/`}>eCommerce Solutions</Link>
              </li>
              <li>
                <Link to={`/`}>HTML5 Games</Link>
              </li>
              <li>
                <Link to={`/`}>Startup Solutions</Link>
              </li>
              <li>
                <Link to={`/`}>Accelerated Mobile Pages</Link>
              </li>
              <li>
                <Link to={`/`}>Progressive Web Apps</Link>
              </li>
              <li>
                <Link to={`/`}>Apps Monetization</Link>
              </li>
              <li>
                <Link to={`/`}>Apps Analytics</Link>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/4">
            <h4 className="mb-2 font-ibm-serif text-base italic">Deploy</h4>
            <ul className="mb-3 md:mb-0">
              <li>
                <Link to={`/`}>Amazon Web Services</Link>
              </li>
              <li>
                <Link to={`/`}>Google Cloud Platform</Link>
              </li>
              <li>
                <Link to={`/`}>Apple App Store</Link>
              </li>
              <li>
                <Link to={`/`}>Android Play Store</Link>
              </li>
              <li>
                <Link to={`/`}>Docker</Link>
              </li>
              <li>
                <Link to={`/`}>Kubernetes</Link>
              </li>
              <li>
                <Link to={`/`}>Jenkins</Link>
              </li>
            </ul>
          </div>
        </div>
      </footer>
      <footer className="max-w-6xl mx-auto border-t py-3 flex items-center justify-center">
        <ul className="flex items-center justify-center text-xs">
          <li>
            <Link to="#" className="mx-2">
              About
            </Link>
          </li>
          <li>
            <Link
              to={`https://github.com/crackerjackdev`}
              target="_blank"
              className="mx-2"
            >
              GitHub
            </Link>
          </li>
          <li>
            <Link to="#" className="mx-2">
              Twitter
            </Link>
          </li>
          <li>
            <Link to="#" className="mx-2">
              Facebook
            </Link>
          </li>
        </ul>
      </footer>
      <footer className="max-w-6xl mx-auto border-t py-3">
        <div className="flex flex-wrap md:flex-no-wrap justify-between text-xs text-center md:text-left">
          <div className="w-full text-gray-700">
            &copy; {new Date().getFullYear()} <Link to={`/`}>Crackerjack</Link>.
            All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}