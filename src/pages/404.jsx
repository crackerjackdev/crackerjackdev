import React from "react"
import Layout from "../layout"
import { Helmet } from "react-helmet"

export default function error404() {
    return (
      <Layout>
        <Helmet>
          <title>Crackerjack</title>
        </Helmet>          
        <div className="flex flex-wrap md:flex-no-wrap max-w-6xl mx-auto border-t">
          <div className="w-full text-center">
            <div className="text-2xl md:text-4xl font-ibm-serif italic my-3 text-red-700">Oops!</div>
            <div className="mb-3">
              This page was removed, renamed or doesn't exist.
            </div>
          </div>
        </div>        
      </Layout>
    )
}