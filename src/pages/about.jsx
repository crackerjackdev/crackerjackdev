import React from "react"
import Layout from "../layout"
import { Helmet } from "react-helmet"

export default function about() {
    return (
      <Layout>
        <Helmet>
          <title>About Crackerjack</title>
        </Helmet>
        <div className="flex flex-wrap md:flex-no-wrap max-w-6xl mx-auto border-t">
          <div className="w-full md:w-2/4 md:mr-2">
            <h2 className="text-2xl font-ibm-serif italic my-3">About</h2>
            <div className="mb-3">
              <p className="mb-3">Our motto is to take an initiative for making the best product with new innovative technologies. Our team is aiming to make reliable, safe, secure, and resilience software. We are making the real impact on our clients with our work ethics and continuous efforts to make ampler products.</p>
              <h4 className="text-xl font-ibm-serif italic my-3">Let's work together!</h4>
            </div>
          </div>
          <div className="w-full md:w-2/4 md:ml-2">
            <h2 className="text-2xl font-ibm-serif italic my-3">Let's do it</h2>
            <form action="/" method="post">
              <div className="mb-3">
                <label htmlFor="name" className="font-poppins text-sm mb-1">Name</label>
                <input type="text" name="name" id="name" className="inputs"/>
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="font-poppins text-sm mb-1">Email</label>
                <input type="email" name="email" id="email" className="inputs"/>
              </div>
              <div className="mb-3">
                <label htmlFor="message" className="font-poppins text-sm mb-1">Message</label>
                <textarea name="message" id="message" rows="10" className="inputs"></textarea>
              </div>
              <div className="mb-5">
                <button type="submit" className="btns">Send</button>
              </div>
            </form>
          </div>
        </div>        
      </Layout>
    )
}