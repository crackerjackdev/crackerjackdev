import React from "react"
import { Link } from "gatsby"

export default function Insight() {
  return (
    <div className="shadow rounded w-full md:w-1/2 md:mr-2 mb-4 md:mb-0">
      <div className="flex">
        <div className="w-full md:w-2/4 lg:w-3/5 p-4 border border-r-0 rounded-tr-none rounded-br-none rounded">
          <div className="text-sm font-poppins mb-1">Design</div>
          <h2 className="font-ibm-serif text-2xl mb-1">Title One</h2>
          <div className="mb-3">
            Donec nec justo eget felis facilisis fermentum. Aliquam porttitor
            mauris sit amet orci. Aenean dignissim pellentesque felis.
          </div>
          <Link to={`/`} className="text-sm">
            Continue reading...
          </Link>
        </div>
        <div className="w-2/4 lg:w-2/5 bg-gray-800 rounded-tl-none rounded-bl-none rounded hidden md:flex">
          &nbsp;
        </div>
      </div>
    </div>
  )
}
