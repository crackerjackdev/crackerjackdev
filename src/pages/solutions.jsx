import React from "react"
import Layout from "../layout"
import { Helmet } from "react-helmet"

export default function solutions() {
    return (
      <Layout>
        <Helmet>
          <title>Solutions by Crackerjack</title>
        </Helmet>

        {/* Banner */}
        <div
            className="max-w-6xl mx-auto bg-gray-900 rounded-lg text-white py-24 px-4 md:px-12 mb-4 text-center"
            id="home-banner"
        >
            <div className="font-ibm-serif text-4xl mb-1 italic">
                Solutions
            </div>
            <h1 className="text-xl mb-3">
                Scalable. Secure. Portable.
            </h1>
        </div>
        {/* Banner */}

        <div className="flex flex-wrap md:flex-no-wrap max-w-6xl mx-auto">

            <div className="w-full md:w-1/3 md:mr-2 mb-4 last:mr-0 md:last:ml-2 text-center">
                <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="lightbulb-dollar" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 352 512" className="h-12 w-12 my-4 inline-block">
                    <path fill="currentColor" d="M168 296h16c4.42 0 8-3.58 8-8v-16.12c23.62-.63 42.67-20.54 42.67-45.07 0-19.97-12.98-37.81-31.58-43.39l-45-13.5c-5.16-1.55-8.77-6.78-8.77-12.73 0-7.27 5.3-13.19 11.8-13.19h28.11c4.56 0 8.96 1.29 12.82 3.72 3.24 2.03 7.36 1.91 10.13-.73l11.75-11.21c3.53-3.37 3.33-9.21-.57-12.14-9.1-6.83-20.08-10.77-31.37-11.35V96c0-4.42-3.58-8-8-8h-16c-4.42 0-8 3.58-8 8v16.12c-23.62.63-42.67 20.55-42.67 45.07 0 19.97 12.98 37.81 31.58 43.39l45 13.5c5.16 1.55 8.77 6.78 8.77 12.73 0 7.27-5.3 13.19-11.8 13.19h-28.11c-4.56 0-8.96-1.29-12.82-3.72-3.24-2.03-7.36-1.91-10.13.73l-11.75 11.21c-3.53 3.37-3.33 9.21.57 12.14 9.1 6.83 20.08 10.77 31.37 11.35V288c0 4.42 3.58 8 8 8zM96.06 459.17c0 3.15.93 6.22 2.68 8.84l24.51 36.84c2.97 4.46 7.97 7.14 13.32 7.14h78.85c5.36 0 10.36-2.68 13.32-7.14l24.51-36.84c1.74-2.62 2.67-5.7 2.68-8.84l.05-43.18H96.02l.04 43.18zM176 0C73.72 0 0 82.97 0 176c0 44.37 16.45 84.85 43.56 115.78 16.64 18.99 42.74 58.8 52.42 92.16v.06h48v-.12c-.01-4.77-.72-9.51-2.15-14.07-5.59-17.81-22.82-64.77-62.17-109.67-20.54-23.43-31.52-53.15-31.61-84.14-.2-73.64 59.67-128 127.95-128 70.58 0 128 57.42 128 128 0 30.97-11.24 60.85-31.65 84.14-39.11 44.61-56.42 91.47-62.1 109.46a47.507 47.507 0 0 0-2.22 14.3v.1h48v-.05c9.68-33.37 35.78-73.18 52.42-92.16C335.55 260.85 352 220.37 352 176 352 78.8 273.2 0 176 0z"></path>
                </svg>
                <div className="px-4 pb-4 text-center">
                    <div className="text-xl md:text-2xl font-ibm-serif italic mb-3">Start-up Ideas</div>
                    <p>Crafting entrepreneurs' ideas from a prototype to a fully featured product. Building all aspects of a product with detailed information.</p>
                </div>
            </div>

            <div className="w-full md:w-1/3 md:mr-2 mb-4 md:mx-2 text-center">
                <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="shopping-cart" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" className="h-12 w-12 my-4 inline-block">
                    <path fill="currentColor" d="M551.991 64H144.28l-8.726-44.608C133.35 8.128 123.478 0 112 0H12C5.373 0 0 5.373 0 12v24c0 6.627 5.373 12 12 12h80.24l69.594 355.701C150.796 415.201 144 430.802 144 448c0 35.346 28.654 64 64 64s64-28.654 64-64a63.681 63.681 0 0 0-8.583-32h145.167a63.681 63.681 0 0 0-8.583 32c0 35.346 28.654 64 64 64 35.346 0 64-28.654 64-64 0-18.136-7.556-34.496-19.676-46.142l1.035-4.757c3.254-14.96-8.142-29.101-23.452-29.101H203.76l-9.39-48h312.405c11.29 0 21.054-7.869 23.452-18.902l45.216-208C578.695 78.139 567.299 64 551.991 64zM208 472c-13.234 0-24-10.766-24-24s10.766-24 24-24 24 10.766 24 24-10.766 24-24 24zm256 0c-13.234 0-24-10.766-24-24s10.766-24 24-24 24 10.766 24 24-10.766 24-24 24zm23.438-200H184.98l-31.31-160h368.548l-34.78 160z"></path>
                </svg>
                <div className="px-4 pb-4 text-center">
                    <div className="text-xl md:text-2xl font-ibm-serif italic mb-3">eCommerce</div>
                    <p>Developing eCommerce web and mobile apps with scalability. Providing support for growth.</p>
                </div>
            </div>

            <div className="w-full md:w-1/3 md:mr-2 mb-4 last:mr-0 md:last:ml-2 text-center">
                <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="database" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="h-12 w-12 my-4 inline-block">
                    <path fill="currentColor" d="M224 48c97.167 0 176 27.723 176 61.714v4.571C400 148.277 321.167 176 224 176S48 148.277 48 114.286v-4.571C48 75.723 126.833 48 224 48m176 135.018v26.399c0 33.991-78.833 61.714-176 61.714S48 243.408 48 209.417v-26.399C85.813 210.982 155.021 224 224 224s138.187-13.018 176-40.982m0 96v26.834c0 33.991-78.833 61.714-176 61.714S48 339.842 48 305.851v-26.834C85.813 306.982 155.021 320 224 320s138.187-13.018 176-40.982m0 96v27.268C400 436.277 321.167 464 224 464S48 436.277 48 402.286v-27.268C85.813 402.982 155.021 416 224 416s138.187-13.018 176-40.982M224 0C137.052 0 0 23.26 0 109.714v292.571C0 488.758 137.03 512 224 512c86.948 0 224-23.26 224-109.714V109.714C448 23.242 310.97 0 224 0z"></path>
                </svg>
                <div className="px-4 pb-4 text-center">
                    <div className="text-xl md:text-2xl font-ibm-serif italic mb-3">Database</div>
                    <p>Designing a scalable database schema to handle growth of business. Helping data migration without any data lose for large databases.</p>
                </div>
            </div>        

        </div>

        <div className="flex flex-wrap md:flex-no-wrap max-w-6xl mx-auto">

            <div className="w-full md:w-1/3 md:mr-2 mb-4 last:mr-0 md:last:ml-2 text-center">
                <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="vials" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" className="h-12 w-12 my-4 inline-block">
                    <path fill="currentColor" d="M72 48h24v288c0 44.1 35.9 80 80 80s80-35.9 80-80V48h24c4.4 0 8-3.6 8-8V8c0-4.4-3.6-8-8-8H72c-4.4 0-8 3.6-8 8v32c0 4.4 3.6 8 8 8zm72 0h64v112h-64V48zm0 160h64v128c0 42.3-64 42.3-64 0V208zm488 256H8c-4.4 0-8 3.6-8 8v32c0 4.4 3.6 8 8 8h624c4.4 0 8-3.6 8-8v-32c0-4.4-3.6-8-8-8zM360 48h24v288c0 44.1 35.9 80 80 80s80-35.9 80-80V48h24c4.4 0 8-3.6 8-8V8c0-4.4-3.6-8-8-8H360c-4.4 0-8 3.6-8 8v32c0 4.4 3.6 8 8 8zm72 0h64v112h-64V48zm0 160h64v128c0 42.3-64 42.3-64 0V208z"></path>
                </svg>
                <div className="px-4 pb-4 text-center">
                    <div className="text-xl md:text-2xl font-ibm-serif italic mb-3">Testing</div>
                    <p>Writing automation test cases for A/B tests, unit tests, and browser tests to develop bug free applications.</p>
                </div>
            </div>

            <div className="w-full md:w-1/3 md:mr-2 mb-4 md:mx-2 text-center">
                <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="graduation-cap" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" className="h-12 w-12 my-4 inline-block">
                    <path fill="currentColor" d="M606.72 147.91l-258-79.57c-18.81-5.78-38.62-5.78-57.44 0l-258 79.57C13.38 154.05 0 171.77 0 192.02s13.38 37.97 33.28 44.11l22.64 6.98c-2.46 5.19-4.4 10.62-5.7 16.31C39.53 264.6 32 275.33 32 288.01c0 10.78 5.68 19.85 13.86 25.65L20.33 428.53C18.11 438.52 25.71 448 35.95 448h56.11c10.24 0 17.84-9.48 15.62-19.47L82.14 313.66c8.17-5.8 13.86-14.87 13.86-25.65 0-10.6-5.49-19.54-13.43-25.36 1.13-3.55 2.96-6.67 4.85-9.83l54.87 16.92L128 384c0 35.34 85.96 64 192 64s192-28.65 192-64l-14.28-114.26 109-33.62c19.91-6.14 33.28-23.86 33.28-44.11s-13.38-37.96-33.28-44.1zM462.44 374.47c-59.7 34.2-225.9 33.78-284.87 0l11.3-90.36 102.42 31.59c11.15 3.43 32.24 7.77 57.44 0l102.42-31.59 11.29 90.36zM334.59 269.82c-9.44 2.91-19.75 2.91-29.19 0L154.62 223.3l168.31-31.56c8.69-1.62 14.41-9.98 12.78-18.67-1.62-8.72-10.09-14.36-18.66-12.76l-203.78 38.2c-6.64 1.24-12.8 3.54-18.71 6.27L53.19 192l252.22-77.79c9.44-2.91 19.75-2.91 29.19 0l252.22 77.82-252.23 77.79z"></path>
                </svg>
                <div className="px-4 pb-4 text-center">
                    <div className="text-xl md:text-2xl font-ibm-serif italic mb-3">Educational</div>
                    <p>Making educational apps and adaptive games for organizing and managing schools.</p>
                </div>
            </div>

            <div className="w-full md:w-1/3 md:mr-2 mb-4 last:mr-0 md:last:ml-2 text-center">
                <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="aws" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" className="h-12 w-12 my-4 inline-block">
                    <path fill="currentColor" d="M180.41 203.01c-.72 22.65 10.6 32.68 10.88 39.05a8.164 8.164 0 0 1-4.1 6.27l-12.8 8.96a10.66 10.66 0 0 1-5.63 1.92c-.43-.02-8.19 1.83-20.48-25.61a78.608 78.608 0 0 1-62.61 29.45c-16.28.89-60.4-9.24-58.13-56.21-1.59-38.28 34.06-62.06 70.93-60.05 7.1.02 21.6.37 46.99 6.27v-15.62c2.69-26.46-14.7-46.99-44.81-43.91-2.4.01-19.4-.5-45.84 10.11-7.36 3.38-8.3 2.82-10.75 2.82-7.41 0-4.36-21.48-2.94-24.2 5.21-6.4 35.86-18.35 65.94-18.18a76.857 76.857 0 0 1 55.69 17.28 70.285 70.285 0 0 1 17.67 52.36l-.01 69.29zM93.99 235.4c32.43-.47 46.16-19.97 49.29-30.47 2.46-10.05 2.05-16.41 2.05-27.4-9.67-2.32-23.59-4.85-39.56-4.87-15.15-1.14-42.82 5.63-41.74 32.26-1.24 16.79 11.12 31.4 29.96 30.48zm170.92 23.05c-7.86.72-11.52-4.86-12.68-10.37l-49.8-164.65c-.97-2.78-1.61-5.65-1.92-8.58a4.61 4.61 0 0 1 3.86-5.25c.24-.04-2.13 0 22.25 0 8.78-.88 11.64 6.03 12.55 10.37l35.72 140.83 33.16-140.83c.53-3.22 2.94-11.07 12.8-10.24h17.16c2.17-.18 11.11-.5 12.68 10.37l33.42 142.63L420.98 80.1c.48-2.18 2.72-11.37 12.68-10.37h19.72c.85-.13 6.15-.81 5.25 8.58-.43 1.85 3.41-10.66-52.75 169.9-1.15 5.51-4.82 11.09-12.68 10.37h-18.69c-10.94 1.15-12.51-9.66-12.68-10.75L328.67 110.7l-32.78 136.99c-.16 1.09-1.73 11.9-12.68 10.75h-18.3zm273.48 5.63c-5.88.01-33.92-.3-57.36-12.29a12.802 12.802 0 0 1-7.81-11.91v-10.75c0-8.45 6.2-6.9 8.83-5.89 10.04 4.06 16.48 7.14 28.81 9.6 36.65 7.53 52.77-2.3 56.72-4.48 13.15-7.81 14.19-25.68 5.25-34.95-10.48-8.79-15.48-9.12-53.13-21-4.64-1.29-43.7-13.61-43.79-52.36-.61-28.24 25.05-56.18 69.52-55.95 12.67-.01 46.43 4.13 55.57 15.62 1.35 2.09 2.02 4.55 1.92 7.04v10.11c0 4.44-1.62 6.66-4.87 6.66-7.71-.86-21.39-11.17-49.16-10.75-6.89-.36-39.89.91-38.41 24.97-.43 18.96 26.61 26.07 29.7 26.89 36.46 10.97 48.65 12.79 63.12 29.58 17.14 22.25 7.9 48.3 4.35 55.44-19.08 37.49-68.42 34.44-69.26 34.42zm40.2 104.86c-70.03 51.72-171.69 79.25-258.49 79.25A469.127 469.127 0 0 1 2.83 327.46c-6.53-5.89-.77-13.96 7.17-9.47a637.37 637.37 0 0 0 316.88 84.12 630.22 630.22 0 0 0 241.59-49.55c11.78-5 21.77 7.8 10.12 16.38zm29.19-33.29c-8.96-11.52-59.28-5.38-81.81-2.69-6.79.77-7.94-5.12-1.79-9.47 40.07-28.17 105.88-20.1 113.44-10.63 7.55 9.47-2.05 75.41-39.56 106.91-5.76 4.87-11.27 2.3-8.71-4.1 8.44-21.25 27.39-68.49 18.43-80.02z"></path>
                </svg>
                <div className="px-4 pb-4 text-center">
                    <div className="text-xl md:text-2xl font-ibm-serif italic mb-3">Cloud Services</div>
                    <p>Creating and maintaining Amazon Web Services (AWS) infrastructure with automation and orchestration tools.</p>
                </div>
            </div>        

        </div>

        <div className="flex flex-wrap md:flex-no-wrap max-w-6xl mx-auto">

            <div className="w-full md:w-1/3 md:mr-2 mb-4 last:mr-0 md:last:ml-2 text-center">
                <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="mobile" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" className="h-12 w-12 my-4 inline-block">
                    <path fill="currentColor" d="M192 416c0 17.7-14.3 32-32 32s-32-14.3-32-32 14.3-32 32-32 32 14.3 32 32zM320 48v416c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V48C0 21.5 21.5 0 48 0h224c26.5 0 48 21.5 48 48zm-48 410V54c0-3.3-2.7-6-6-6H54c-3.3 0-6 2.7-6 6v404c0 3.3 2.7 6 6 6h212c3.3 0 6-2.7 6-6z"></path>
                </svg>
                <div className="px-4 pb-4 text-center">
                    <div className="text-xl md:text-2xl font-ibm-serif italic mb-3">Mobile Applications</div>
                    <p>Designing and developing mobile apps and games with monetization and analytics.</p>
                </div>
            </div>

            <div className="w-full md:w-1/3 md:mr-2 mb-4 md:mx-2 text-center">
                <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="drafting-compass" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="h-12 w-12 my-4 inline-block">
                    <path fill="currentColor" d="M450.33 296.36c14.32-13.92 27.51-29.15 38.7-46.11 5.02-7.6 2.23-18.06-5.64-22.62l-13.79-8c-7.39-4.28-16.54-1.77-21.29 5.34-6.52 9.75-13.92 18.7-21.73 27.24l-76.3-141.76c.72-4.75 1.45-9.51 1.45-14.46C351.72 42.98 308.86 0 256 0s-95.72 42.98-95.72 95.99c0 4.95.73 9.71 1.45 14.46L85.46 252.16c-7.85-8.49-15.24-17.44-21.76-27.19-4.75-7.11-13.9-9.63-21.29-5.34l-13.79 8c-7.87 4.56-10.66 15.02-5.64 22.62 11.17 16.92 24.68 31.66 39.06 45.44L0 410.94l7.91 65.75c1.5 12.62 8.63 23.51 19.6 29.89 6.2 3.59 13.06 5.42 19.94 5.42 5.3 0 10.66-1.08 15.74-3.27l61.44-26.33 62.2-115.57c22.37 5.83 45.54 9.13 69.17 9.13 23.65 0 46.91-3.07 69.31-8.87l62.05 115.3 61.48 26.34c5.08 2.17 10.41 3.25 15.7 3.25 6.89 0 13.74-1.83 19.94-5.42 10.97-6.37 18.1-17.26 19.57-29.83l7.95-65.81-61.67-114.56zM256 48c26.43 0 47.86 21.49 47.86 48s-21.43 48-47.86 48-47.86-21.49-47.86-48S229.57 48 256 48zM90.48 444.85l-36.3 15.56-4.83-40.09 138.38-257.15c11.16 11.41 25.27 19.66 40.93 24.37l.15.28L90.48 444.85zM256 327.98c-15.5 0-30.71-1.85-45.58-4.97L256 238.32l45.56 84.65c-14.89 3.03-30.07 5.01-45.56 5.01zm27.18-140.17l.15-.28c15.67-4.71 29.77-12.96 40.93-24.37l65.57 121.85c-13.04 9.27-27.14 16.89-41.8 23.3l-64.85-120.5zm174.64 272.6l-36.3-15.56-50.76-94.31c14.56-6.61 28.6-14.25 41.83-23.24l50.06 93.03-4.83 40.08z"></path>
                </svg>
                <div className="px-4 pb-4 text-center">
                    <div className="text-xl md:text-2xl font-ibm-serif italic mb-3">Graphics</div>
                    <p>Designing graphics and applications with UX/UI concepts for user friendly designs.</p>
                </div>
            </div>

            <div className="w-full md:w-1/3 md:mr-2 mb-4 last:mr-0 md:last:ml-2 text-center">
                <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="debug" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="h-12 w-12 my-4 inline-block">
                    <path fill="currentColor" d="M117.75 271a16 16 0 1 0 4.5 31.68l42.75-6.09a90.21 90.21 0 0 0 10.81 39l-35.51 23.69a16 16 0 1 0 17.7 26.61l37.64-25.1a87.82 87.82 0 0 0 83.24 19.94L162.77 264.58zM256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.28 0-200-89.72-200-200a198.86 198.86 0 0 1 42.81-123.25l280.44 280.44A198.86 198.86 0 0 1 256 456zm157.19-76.75L345 311.08a89.64 89.64 0 0 0 2-14.49l42.73 6.11a16 16 0 1 0 4.5-31.68l-46.82-6.69v-24.65l46.82-6.7a16 16 0 1 0-4.5-31.68l-43.52 6.22a90.15 90.15 0 0 0-10-31.1l35.51-23.69A16 16 0 1 0 354 126.11l-37.64 25.1a90.27 90.27 0 0 0-126.08 5.1l-57.5-57.5A198.86 198.86 0 0 1 256 56c110.28 0 200 89.72 200 200a198.86 198.86 0 0 1-42.81 123.25z"></path>
                </svg>
                <div className="px-4 pb-4 text-center">
                    <div className="text-xl md:text-2xl font-ibm-serif italic mb-3">Support & Bug Fixes</div>
                    <p>Providing support and resolving bugs to maintain the systems alive.</p>
                </div>
            </div>        

        </div>

      </Layout>
    )
}