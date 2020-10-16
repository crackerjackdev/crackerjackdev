import React from "react"
import Layout from "../layout"
import { Helmet } from "react-helmet"
// import { Link } from "gatsby"
import TinyImg from "./../imgs/tinykalijira.webp"
import CannoliImg from "./../imgs/cannoli.webp"
import MemesImg from "./../imgs/memes-cool.webp"

export default function work() {
    return (
      <Layout>
        <Helmet>
          <title>Work of Crackerjack</title>
        </Helmet>

        {/* Banner */}
        <div
            className="max-w-6xl mx-auto bg-gray-900 rounded-lg text-white py-24 px-4 md:px-12 mb-4 text-center"
            id="home-banner"
        >
            <div className="font-ibm-serif text-4xl mb-1 italic">
                Work
            </div>
            <h1 className="text-xl mb-3">
                Agile. Tech. Execution.
            </h1>
        </div>
        {/* Banner */}

        <div className="flex flex-wrap md:flex-no-wrap max-w-4xl mx-auto my-12">
            <div className="w-full md:w-2/5 md:mr-2 mb-4 md:mb-0 last:mr-0 md:last:ml-2">
                <div className="relative">
                    <div className="hidden md:inline-block absolute inset-0 bg-gradient-to-r from-gray-400 to-gray-800 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-lg"></div>
                    <img src={TinyImg} alt="TINY Kalijira by Crackerjack" className="relative rounded-lg w-full"/>
                </div>
            </div>
            <div className="w-full md:pl-4 md:w-3/5 md:mr-2 mb-4 md:mb-0 last:mr-0 md:last:ml-2 flex flex-col justify-center">
                <div className="text-2xl md:text-4xl font-ibm-serif italic mb-3">TINY Kalijira</div>
                <p className="mb-3">TINY Kalijira is new to the US. But in its home country of Bangladesh, Kalijira is prized as the "Prince of Rice".</p>
                <p className="mb-3">This <strong>web appliaction</strong> is build with Laravel, Livewire, and TailwindCSS. It is hosted on Linode Cloud platform. It is responsive and it has admin panel for blog/recipes posts, order management, user management, coupons for influencers, and product managment system.</p>
                <a className="hover:underline flex items-center" href="https://tinykalijira.com/" target="_blank" rel="noopener noreferrer">
                    https://tinykalijira.com
                    <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="external-link" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="ml-1 h-4 w-4 inline"><path fill="currentColor" d="M497.6,0,334.4.17A14.4,14.4,0,0,0,320,14.57V47.88a14.4,14.4,0,0,0,14.69,14.4l73.63-2.72,2.06,2.06L131.52,340.49a12,12,0,0,0,0,17l23,23a12,12,0,0,0,17,0L450.38,101.62l2.06,2.06-2.72,73.63A14.4,14.4,0,0,0,464.12,192h33.31a14.4,14.4,0,0,0,14.4-14.4L512,14.4A14.4,14.4,0,0,0,497.6,0ZM432,288H416a16,16,0,0,0-16,16V458a6,6,0,0,1-6,6H54a6,6,0,0,1-6-6V118a6,6,0,0,1,6-6H208a16,16,0,0,0,16-16V80a16,16,0,0,0-16-16H48A48,48,0,0,0,0,112V464a48,48,0,0,0,48,48H400a48,48,0,0,0,48-48V304A16,16,0,0,0,432,288Z" class=""></path></svg>
                </a>
            </div>
        </div>

        <div className="flex flex-wrap md:flex-no-wrap max-w-4xl mx-auto my-12">
            <div className="w-full md:pr-4 md:w-3/5 md:mr-2 mb-4 md:mb-0 last:mr-0 md:last:ml-2 flex flex-col justify-center order-last md:order-first">
                <div className="text-2xl md:text-4xl font-ibm-serif italic mb-3">Cannoli Dog Walking</div>
                <p className="mb-3">Dog Walking is the local and trusted dog walking company of the South Bay Cities, El Segundo and Manhattan Beach.</p>
                <p className="mb-3">This <strong>website</strong> and <strong>logo</strong> is designed with Adobe Photoshop and built with ReactJS and BootstrapCSS. It is hosted on Netlify. It is responsive with mobile first approach. Also, implemented SEO for targeted Los Angeles audiance.</p>
                <a className="hover:underline flex items-center" href="https://cannolidogwalking.com/" target="_blank" rel="noopener noreferrer">
                    https://cannolidogwalking.com
                    <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="external-link" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="ml-1 h-4 w-4 inline"><path fill="currentColor" d="M497.6,0,334.4.17A14.4,14.4,0,0,0,320,14.57V47.88a14.4,14.4,0,0,0,14.69,14.4l73.63-2.72,2.06,2.06L131.52,340.49a12,12,0,0,0,0,17l23,23a12,12,0,0,0,17,0L450.38,101.62l2.06,2.06-2.72,73.63A14.4,14.4,0,0,0,464.12,192h33.31a14.4,14.4,0,0,0,14.4-14.4L512,14.4A14.4,14.4,0,0,0,497.6,0ZM432,288H416a16,16,0,0,0-16,16V458a6,6,0,0,1-6,6H54a6,6,0,0,1-6-6V118a6,6,0,0,1,6-6H208a16,16,0,0,0,16-16V80a16,16,0,0,0-16-16H48A48,48,0,0,0,0,112V464a48,48,0,0,0,48,48H400a48,48,0,0,0,48-48V304A16,16,0,0,0,432,288Z" class=""></path></svg>
                </a>
            </div>
            <div className="w-full md:w-2/5 md:mr-2 mb-4 md:mb-0 last:mr-0 md:last:ml-2 order-first md:order-last">
                <div className="relative">
                    <div className="hidden md:inline-block absolute inset-0 bg-gradient-to-r from-gray-400 to-gray-800 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-lg"></div>
                    <img src={CannoliImg} alt="Cannoli Dog Walking by Crackerjack" className="relative rounded-lg w-full"/>
                </div>
            </div>            
        </div>

        <div className="flex flex-wrap md:flex-no-wrap max-w-4xl mx-auto my-12">
            <div className="w-full md:w-2/5 md:mr-2 mb-4 md:mb-0 last:mr-0 md:last:ml-2">
                <div className="relative">
                    <div className="hidden md:inline-block absolute inset-0 bg-gradient-to-r from-gray-400 to-gray-800 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-lg"></div>
                    <img src={MemesImg} alt="Memes Cool by Crackerjack" className="relative rounded-lg w-full"/>
                </div>
            </div>
            <div className="w-full md:pl-4 md:w-3/5 md:mr-2 mb-4 md:mb-0 last:mr-0 md:last:ml-2 flex flex-col justify-center">
                <div className="text-2xl md:text-4xl font-ibm-serif italic mb-3">Memes Cool</div>
                <p className="mb-3">We find the best memes, organize them, and share them with you!</p>
                <p className="mb-3">This <strong>web appliaction</strong> is build with HTML5, Canvas, JavaScript, and CSS. It is a responsive web application. We made a meme maker tool using HTML5 Canvas.</p>
                <a className="hover:underline flex items-center" href="https://memes.cool/" target="_blank" rel="noopener noreferrer">
                    https://memes.cool
                    <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="external-link" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="ml-1 h-4 w-4 inline"><path fill="currentColor" d="M497.6,0,334.4.17A14.4,14.4,0,0,0,320,14.57V47.88a14.4,14.4,0,0,0,14.69,14.4l73.63-2.72,2.06,2.06L131.52,340.49a12,12,0,0,0,0,17l23,23a12,12,0,0,0,17,0L450.38,101.62l2.06,2.06-2.72,73.63A14.4,14.4,0,0,0,464.12,192h33.31a14.4,14.4,0,0,0,14.4-14.4L512,14.4A14.4,14.4,0,0,0,497.6,0ZM432,288H416a16,16,0,0,0-16,16V458a6,6,0,0,1-6,6H54a6,6,0,0,1-6-6V118a6,6,0,0,1,6-6H208a16,16,0,0,0,16-16V80a16,16,0,0,0-16-16H48A48,48,0,0,0,0,112V464a48,48,0,0,0,48,48H400a48,48,0,0,0,48-48V304A16,16,0,0,0,432,288Z" class=""></path></svg>
                </a>
            </div>
        </div>

        <div className="flex justify-center md:flex-no-wrap max-w-4xl mx-auto my-12">
            <div className="text-2xl md:text-4xl font-ibm-serif italic">and many more...</div>
        </div>

      </Layout>
    )
}