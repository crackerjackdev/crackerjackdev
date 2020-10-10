import React from "react"
import Layout from "../layout"

export default function about() {
    return (
      <Layout>
        <div className="flex flex-wrap md:flex-no-wrap max-w-6xl mx-auto border-t">
          <div className="w-full md:w-2/4 md:mr-2">
            <h2 className="text-2xl font-ibm-serif italic my-3">About</h2>
            <div className="mb-3">
              <p className="mb-3">Ut convallis, sem sit amet interdum consectetuer, odio augue aliquam leo, nec dapibus tortor nibh sed augue. Integer eu magna sit amet metus fermentum posuere. Morbi sit amet nulla sed dolor elementum imperdiet. Quisque fermentum. Cum sociis natoque penatibus et magnis xdis parturient montes, nascetur ridiculus mus. Pellentesque adipiscing eros ut libero. Ut condimentum mi vel tellus. Suspendisse laoreet. Fusce ut est sed dolor gravida convallis. Morbi vitae ante. Vivamus ultrices luctus nunc. Suspendisse et dolor. Etiam dignissim. Proin malesuada adipiscing lacus. Donec metus. Curabitur gravida</p>
              <p className="mb-3">Praesent dapibus, neque id cursus faucibus, tortor neque egestas auguae, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus.</p>
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