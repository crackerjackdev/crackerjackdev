import React from "react"
import { Helmet } from "react-helmet"
import Layout from "../layout"

export default function HowWeWork() {
    return (
        <Layout>
            <Helmet>
                <title>How We Work</title>
            </Helmet>
            {/* Banner */}
            <div
                className="max-w-6xl mx-auto bg-gray-900 rounded-lg text-white py-24 px-4 md:px-12 mb-4 text-center"
                id="home-banner"
            >
                <div className="font-ibm-serif text-4xl mb-1 italic">
                    How We Work
                </div>
                <h1 className="text-xl mb-3">
                    Innovative. Iterative. Insightful.
                </h1>
            </div>
            {/* Banner */}

            <div className="flex flex-wrap md:flex-no-wrap max-w-6xl mx-auto border-b">

                <div className="w-full md:w-1/3 md:mr-2 mb-4 last:mr-0 md:last:ml-2">
                    <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="brain" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 544 512" className="h-12 w-12 inline-block">
                        <path fill="currentColor" d="M511.9 228.2c1.9-7.5 2.9-15.2 2.9-23 0-33-16.7-63-43.7-80.6-.4-39.7-29.4-72.8-67.5-79.8C389.9 17.8 361.8 0 330.3 0c-22.8 0-43.4 9.2-58.3 24.1A82.316 82.316 0 0 0 213.7 0c-31.4 0-59.6 17.8-73.3 44.9-38.1 7-67.1 40.1-67.5 79.8-27.1 17.6-43.7 47.6-43.7 80.6 0 7.7 1 15.4 2.9 23C11.9 246.3 0 272.2 0 299.5c0 33 16.7 63 43.7 80.6.5 47.5 38.5 86.2 85.8 88.3 15.9 26.7 44.9 43.6 76.8 43.6 26 0 49.2-11.2 65.6-28.8 16.4 17.6 39.6 28.8 65.6 28.8 31.9 0 60.9-16.9 76.8-43.6 47.4-2 85.4-40.8 85.9-88.3 27-17.6 43.7-47.7 43.7-80.6.1-27.3-11.8-53.2-32-71.3zm-264 194.6c0 22.8-18.6 41.2-41.5 41.2-32.9 0-39.5-29.5-45.6-47.6l-20.3 3.4c-24 4-48.5-15.3-48.5-40.5 0-2.8 4.7-27.4 4.7-27.4l-18.2-7.5c-36.9-15.2-41.3-66.1-5.5-86.6l19.5-11.2-9.9-20.1C65 190.7 94 166 107.7 160.4l18.9-7.7c-5-21.9-5.5-22.8-5.5-27.2 0-18.8 15.3-34 31.9-34.1l22.9 1.2 4.8-18.9c3.9-15.1 17.4-25.6 32.9-25.6 18.9 0 34.2 15.2 34.2 34l.1 340.7zm217.7-78.5l-18.3 7.5s4.6 24.6 4.6 27.4c0 25.2-24.5 44.4-48.5 40.5l-20.3-3.4c-6.1 18.2-12.7 47.6-45.6 47.6-22.9 0-41.5-18.5-41.5-41.2V82c0-18.8 15.3-34 34.2-34 15.5 0 29.1 10.5 32.9 25.6l4.8 18.9 22.9-1.2c16.5.1 31.9 15.4 31.9 34.1 0 4.4-.4 5.3-5.5 27.2l18.9 7.7c13.7 5.6 42.7 30.2 25.1 65.9l-9.9 20.1 19.5 11.2c36.1 20.7 31.7 71.6-5.2 86.8z"></path>
                    </svg>
                    <div>
                        <div className="text-xl md:text-2xl font-ibm-serif italic my-3">Innovative</div>
                        <p>Innovative services enable companies to become the best in an industry. New techniques and technologies are necessary for a perfect platform to build a brand.</p>
                    </div>
                </div>

                <div className="w-full md:w-1/3 md:mr-2 mb-4 md:mx-2">
                    <svg aria-hidden="true" focusable="false" data-prefix="fal" data-icon="repeat-alt" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="h-12 w-12 inline-block">
                        <path fill="currentColor" d="M54.027 327.713C40.129 307.242 32 282.553 32 256c0-70.579 57.421-128 128-128h160v63.969c0 29.239 36.192 43.177 55.785 21.407l72-79.968c10.952-12.169 10.953-30.644 0-42.814l-72-79.974C356.226-11.114 320 2.738 320 32.026V96H160C71.775 96 0 167.775 0 256c0 33.913 10.612 65.391 28.683 91.299 4.427 6.348 13.606 6.936 18.785 1.185l5.488-6.096c3.667-4.073 4.149-10.14 1.071-14.675zM352 32l72 80-72 80V32zm131.317 132.701c-4.427-6.348-13.606-6.936-18.785-1.185l-5.488 6.096c-3.667 4.073-4.149 10.14-1.071 14.675C471.871 204.758 480 229.447 480 256c0 70.579-57.421 128-128 128H192v-63.969c0-29.239-36.192-43.177-55.785-21.407l-72 79.969c-10.952 12.169-10.953 30.644 0 42.814l72 79.974C155.774 523.113 192 509.264 192 479.974V416h160c88.225 0 160-71.775 160-160 0-33.913-10.612-65.391-28.683-91.299zM160 480l-72-80 72-80v160z"></path>
                    </svg>
                    <div>
                        <div className="text-xl md:text-2xl font-ibm-serif italic my-3">Iterative</div>
                        <p>Following a iterative strategies such as Agile, which will provide a clear path to build project. Agile methodology uses incremental and iterative work sequences. This assists teams in organizing a system.</p>
                    </div>
                </div>

                <div className="w-full md:w-1/3 md:mr-2 mb-4 last:mr-0 md:last:ml-2">
                    <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="analytics" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 608 512" className="h-12 w-12 inline-block">
                        <path fill="currentColor" d="M416 320h-64c-17.67 0-32 14.33-32 32v128c0 17.67 14.33 32 32 32h64c17.67 0 32-14.33 32-32V352c0-17.67-14.33-32-32-32zm-16 144h-32v-96h32v96zm176-272h-64c-17.67 0-32 14.33-32 32v256c0 17.67 14.33 32 32 32h64c17.67 0 32-14.33 32-32V224c0-17.67-14.33-32-32-32zm-16 272h-32V240h32v224zM256 192h-64c-17.67 0-32 14.33-32 32v256c0 17.67 14.33 32 32 32h64c17.67 0 32-14.33 32-32V224c0-17.67-14.33-32-32-32zm-16 272h-32V240h32v224zM96 352H32c-17.67 0-32 14.33-32 32v96c0 17.67 14.33 32 32 32h64c17.67 0 32-14.33 32-32v-96c0-17.67-14.33-32-32-32zM80 464H48v-64h32v64zM64 256c26.51 0 48-21.49 48-48 0-4.27-.74-8.34-1.78-12.28l101.5-101.5C215.66 95.26 219.73 96 224 96c6.15 0 11.97-1.26 17.38-3.37l95.34 76.27c-.35 2.33-.71 4.67-.71 7.1 0 26.51 21.49 48 48 48s48-21.49 48-48c0-2.43-.37-4.76-.71-7.09l95.34-76.27C532.03 94.74 537.85 96 544 96c26.51 0 48-21.49 48-48S570.51 0 544 0s-48 21.49-48 48c0 2.43.37 4.76.71 7.09l-95.34 76.27c-5.4-2.11-11.23-3.37-17.38-3.37s-11.97 1.26-17.38 3.37L271.29 55.1c.35-2.33.71-4.67.71-7.1 0-26.51-21.49-48-48-48s-48 21.49-48 48c0 4.27.74 8.34 1.78 12.28l-101.5 101.5C72.34 160.74 68.27 160 64 160c-26.51 0-48 21.49-48 48s21.49 48 48 48z"></path>
                    </svg>
                    <div>
                        <div className="text-xl md:text-2xl font-ibm-serif italic my-3">Insightful</div>
                        <p>Insight of the project, shows the arrangement and organization of model elements which are helping to understand progress of a project.</p>
                    </div>
                </div>        

            </div>

            <div className="flex flex-wrap md:flex-no-wrap max-w-6xl mx-auto">
                <h2 className="text-2xl md:text-4xl font-ibm-serif italic my-3">Design</h2>
            </div>
            <div className="flex flex-wrap md:flex-no-wrap max-w-6xl mx-auto">
                <div className="w-full md:w-1/2 md:mr-2 mb-4 last:mr-0 md:last:ml-2">
                    <p className="mb-3">Transforming your applications into intuitive, accessible, and easy-to-use designs for people around the world.</p>
                    <p>Understanding end-users and learn about products with best practices. Design and create graphics to meet specific commercial or promotional needs, such as packaging, displays, or logos with artistic or decorative effects.</p>
                </div>
                <div className="w-full md:w-1/2 md:mr-2 mb-4 last:mr-0 md:last:ml-2">
                    <div className="flex flex-wrap md:flex-no-wrap">
                        <div className="w-full md:w-1/2">
                            <ul className="list-disc ml-6">
                                <li>Logos</li>
                                <li>Mobile Apps</li>
                                <li>Web Apps</li>
                                <li>eCommerce Apps</li>
                            </ul>
                        </div>
                        <div className="w-full md:w-1/2">
                            <ul className="list-disc ml-6">
                                <li>Game Design</li>
                                <li>Business Cards</li>
                                <li>Brochures</li>
                                <li>Canvas & Banners</li>
                            </ul>                        
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex flex-wrap md:flex-no-wrap max-w-6xl mx-auto">
                <h2 className="text-2xl md:text-4xl font-ibm-serif italic my-3">Develop</h2>
            </div>
            <div className="flex flex-wrap md:flex-no-wrap max-w-6xl mx-auto">
                <div className="w-full md:w-1/2 md:mr-2 mb-4 last:mr-0 md:last:ml-2">
                    <p className="mb-3">Crafting and securing applications with best and latest technologies to bring the most value for the business. Delivering self-scalable applications with cloud technologies.</p>
                    <p>Developing any product is easy. But, developing a brand that fuses with people, is our objective. Crafting a brand with the value which adheres to targeted communities. By artificial and business intelligence, a product can outstretch among competitors. Expertly designed and developed product will grow into a brand.</p>
                </div>
                <div className="w-full md:w-1/2 md:mr-2 mb-4 last:mr-0 md:last:ml-2">
                    <div className="flex flex-wrap md:flex-no-wrap">
                        <div className="w-full md:w-1/2">
                            <ul className="list-disc ml-6">
                                <li>Web Development</li>
                                <li>Mobile Apps</li>
                                <li>eCommerce Solutions</li>
                                <li>Game Development</li>
                                <li>Apps Analytics</li>
                            </ul>
                        </div>
                        <div className="w-full md:w-1/2">
                            <ul className="list-disc ml-6">
                                <li>Startup Solutions</li>
                                <li>Progressive Web Apps</li>
                                <li>Accelerated Mobile Pages</li>
                                <li>Apps Monetization</li>
                            </ul>                        
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex flex-wrap md:flex-no-wrap max-w-6xl mx-auto">
                <h2 className="text-2xl md:text-4xl font-ibm-serif italic my-3">Deploy</h2>
            </div>
            <div className="flex flex-wrap md:flex-no-wrap max-w-6xl mx-auto">
                <div className="w-full md:w-1/2 md:mr-2 mb-4 last:mr-0 md:last:ml-2">
                    <p className="mb-3">Lunching products with best social media marketing techniques. Deploying applications into play stores and cloud with automated systems.</p>
                    <p>Deploying a product on a cloud or mobile platforms is a first step to validate your idea. Validating an idea incorporates analytics and monetization. Deploying a product is like deploying a relationship with people. Deploying values every day through your product will yield a ripple effect on your business.</p>
                </div>
                <div className="w-full md:w-1/2 md:mr-2 mb-4 last:mr-0 md:last:ml-2">
                    <div className="flex flex-wrap md:flex-no-wrap">
                        <div className="w-full md:w-1/2">
                            <ul className="list-disc ml-6">
                                <li>Amazon Web Services</li>
                                <li>Linode Cloud Platform</li>
                                <li>Google Cloud Platform</li>
                                <li>Microsoft Cloud Platform</li>
                            </ul>
                        </div>
                        <div className="w-full md:w-1/2">
                            <ul className="list-disc ml-6">
                                <li>Apple App Store</li>
                                <li>Android Play Store</li>
                            </ul>                        
                        </div>
                    </div>
                </div>
            </div>

        </Layout>
    )
}