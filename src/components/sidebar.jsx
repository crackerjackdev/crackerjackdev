import React from "react"
import { Link } from "gatsby"

export default function Sidebar() {
  return (
    <div className="bg-gray-100 p-4 rounded mb-3">
      <h4 className="text-xl font-ibm-serif mb-2">More...</h4>
      <ul>
        <li>
          <Link to="#">Vestibulum</Link>
        </li>
        <li>
          <Link to="#">Commodo</Link>
        </li>
        <li>
          <Link to="#">Fermentum</Link>
        </li>
        <li>
          <Link to="#">Euismod</Link>
        </li>
      </ul>
    </div>
  )
}
