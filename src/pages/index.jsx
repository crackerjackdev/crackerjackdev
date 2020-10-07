import React from "react"
import { Link } from "gatsby"
import Layout from "./../layout"
import Sidebar from "./../components/sidebar"
import PostSnippet from "./../components/post-snippet"
import Insight from "../components/insight"

export default function Home() {
  const posts = [1, 2, 3, 4].map(number => (
    <PostSnippet key={number}></PostSnippet>
  ))
  const insights = [1, 2].map(number => <Insight key={number}></Insight>)
  return (
    <Layout>
      {/* Banner */}
      <div
        className="max-w-6xl mx-auto bg-gray-900 rounded text-white py-24 px-4 md:px-12 mb-4"
        id="home-banner"
      >
        <div className="md:w-1/2 font-ibm-serif text-4xl mb-1 italic">
          Work on demand
        </div>
        <h1 className="md:w-1/2 text-xl mb-3">
          We design, develop & deploy web applications using Laravel, React &
          Vue.
        </h1>
        <Link to={`/`} className="font-poppins font-semibold">
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="far"
            data-icon="angle-right"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 192 512"
            className="h-4 w-4 inline"
          >
            <path
              fill="currentColor"
              d="M187.8 264.5L41 412.5c-4.7 4.7-12.3 4.7-17 0L4.2 392.7c-4.7-4.7-4.7-12.3 0-17L122.7 256 4.2 136.3c-4.7-4.7-4.7-12.3 0-17L24 99.5c4.7-4.7 12.3-4.7 17 0l146.8 148c4.7 4.7 4.7 12.3 0 17z"
            ></path>
          </svg>
          See what we can do.
        </Link>
      </div>
      {/* Banner */}

      {/* Latest insights */}
      <div className="flex flex-wrap md:flex-no-wrap max-w-6xl mx-auto mb-4">
        <h2 className="text-xl font-poppins">Latest insights</h2>
      </div>
      <div className="flex flex-wrap md:flex-no-wrap max-w-6xl mx-auto mb-4">
        {insights}
      </div>
      {/* Latest insights */}

      {/* Blog posts */}
      <div className="flex flex-wrap md:flex-no-wrap max-w-6xl mx-auto">
        <div className="w-full md:w-3/4 md:mr-2">{posts}</div>
        <div className="w-full md:w-1/4 md:ml-2">
          <Sidebar></Sidebar>
        </div>
      </div>
      {/* Blog posts */}
    </Layout>
  )
}
