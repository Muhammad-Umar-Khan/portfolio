"use client";
import { useState } from "react";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import Image from "next/image";
import frontend from "../public/frontend.jpg";
import backend from "../public/backend.png";
import fullstack from "../public/fullstack.png";
import rolePlayTribe from "../public/RPT.PNG";
import pst from "../public/PST.PNG";
import ltd from "../public/LTD.PNG";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <main className={darkMode ? "dark" : ""}>
      <section className="min-h-screen px-10 pb-8 dark:bg-gray-900">
        <nav className="flex justify-between py-10">
          <h1 className="text-xl font-burtons dark:text-white">Umar Khan</h1>
          <ul className="flex items-center">
            <li
              className="cursor-pointer text-xl"
              onClick={() => setDarkMode(!darkMode)}
            >
              <BsFillMoonStarsFill className="dark:text-white" />
            </li>
            <li className="bg-gradient-to-r from-cyan-500 to-blue-500 py-2 px-4 text-white ml-5 rounded-md">
              <a href="https://github.com/Muhammad-Umar-Khan" target="blank">
                RESUME
              </a>
            </li>
          </ul>
        </nav>
        <div className="text-center lg:p-10 sm:p-4">
          <h2 className="text-teal-500 font-Poppins font-bold text-5xl py-2 lg:text-6xl">
            Umar Khan
          </h2>
          <h3 className="lg:text-2xl text-xl py-2 dark:text-white">
            Software Engineer
          </h3>
          <p className="font-normal text-xl py-5 leading-8 text-slate-800 dark:text-white lg:max-w-2xl mx-auto">
            Hello, Nice to meet you! I am a Computer engineering graduate with
            four (4) years of experience working in the industry, now i work as
            independent freelancer dedicated to delivering high quality
            softwares. Really looking forward to collabrate on your project
          </p>
        </div>
        <div className="flex justify-center text-5xl text-gray-600 gap-11 py-3">
          <a href="https://github.com/Muhammad-Umar-Khan" target="blank">
            <AiFillGithub />
          </a>
          <a
            href="https://linkedin.com/in/muhammad-umar-khan-4536b7196"
            target="blank"
          >
            <AiFillLinkedin />
          </a>
        </div>
        <section className="text-center md:text-left py-5">
          <h3 className="text-2xl text-teal-500 font-bold my-3">Skills</h3>
          <p className="text-xl dark:text-white">
            JavaScript/TypeScript - React.Js - Next.Js - Node.Js - Express -
            MongoDB - SQL
          </p>
          <p className="text-xl py-2 dark:text-white">
            TailwindCSS - Bootstrap - MaterialUI - React-Native - Wordpress -
            Shopify
          </p>
        </section>
        <section>
          <h3 className="text-2xl text-teal-500 font-bold my-3">SERVICES</h3>
          <div className="md:flex gap-10">
            <div className="text-center shadow-lg p-2 rounded-lg dark:bg-white mb-5">
              <h4 className="text-2xl font-bold my-3">Front-End</h4>
              <Image
                alt="frontend"
                src={frontend}
                width={400}
                height={200}
                className="mx-auto"
              />
              <p className="mt-2">
                I work with frontend technologies focusing on React, Next.js,
                Bootstrap, and Tailwind CSS. My expertise lies in crafting
                captivating and adaptable user interfaces that ensure an
                engaging user experience. By utilizing the capabilities of these
                technologies, I deliver high-performance and visually appealing
                frontend solutions.
              </p>
            </div>
            <div className="text-center shadow-lg p-2 rounded-lg dark:bg-white mb-5">
              <h4 className="text-2xl font-bold my-3">Back-End</h4>
              <Image
                alt="backend"
                src={backend}
                width={400}
                height={200}
                className="mx-auto"
              />
              <p className="mt-2">
                I offer backend services in Node.js, Express, and MongoDB. I
                specialize in creating efficient and scalable web applications,
                leveraging the power of these technologies. From designing
                architecture to implementing APIs and database interactions, I
                deliver reliable solutions tailored to your specific needs.
                Let's bring your ideas to life with powerful and efficient
                backend development.
              </p>
            </div>
            <div className="text-center shadow-lg p-2 rounded-lg dark:bg-white mb-5">
              <h4 className="text-2xl font-bold my-3">Full-Stack</h4>

              <Image
                alt="fullstack"
                src={fullstack}
                width={400}
                height={200}
                className="mx-auto"
              />
              <p className="mt-2">
                In fullstack development i work with technologies including
                Node.js, Express, MongoDB, React, Next.js, Bootstrap, and
                Tailwind CSS. With expertise in both frontend and backend
                development, I deliver end-to-end solutions for web
                applications. From building efficient server-side systems to
                creating captivating user interfaces
              </p>
            </div>
          </div>
        </section>
        <section>
          <p className="text-2xl text-teal-500 font-bold my-3">PROJECTS</p>
          <div className="gap-10 md:flex justify-center">
            <div className="text-center shadow-lg p-2 rounded-lg dark:bg-white mb-5 lg:w-4/12">
              <h4 className="text-2xl font-bold my-3">Maitris</h4>

              <span>
                <Image
                  alt="pst"
                  src={pst}
                  width={400}
                  height={200}
                  className="mx-auto"
                />
                <p className="py-3">
                  Peter Stanely Traning is an online training and testing
                  software for first hand respondents of NHS and operation
                  resiliance. This has AI integrated inside the app to
                  facilitate learning and provide good user experience. Helps
                  you save costs on training your team for emergency situations.
                  It is best suited for enterprise clients.
                </p>
              </span>
              <div className="flex justify-center">
                <a
                  className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-3 py-2 rounded-md m-1"
                  href="http://app.maitris.app/"
                  target="blank"
                >
                  Live
                </a>
              </div>
            </div>
            <div className="text-center shadow-lg p-2 rounded-lg dark:bg-white mb-5 lg:w-4/12">
              <span>
                <h4 className="text-2xl font-bold my-3">Role Play Tribe</h4>
                <Image
                  alt="booksapi"
                  src={rolePlayTribe}
                  width={400}
                  height={200}
                  className="mx-auto"
                />
                <p className="py-3">
                  This is an online platform for realtors to practice their
                  skills and get feedback. It provides various scenarios and
                  role-playing exercises to help realtors improve their
                  negotiation, communication, and sales skills. The platform
                  also includes a community feature where users can share their
                  experiences and learn from each other.
                </p>
              </span>
              <div className="flex justify-center">
                <a
                  className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-3 py-2 rounded-md m-1"
                  href="https://roleplaytribe.com/"
                  target="blank"
                >
                  Live
                </a>
              </div>
            </div>
            <div className="text-center shadow-lg p-2 rounded-lg dark:bg-white mb-5 lg:w-4/12">
              <h4 className="text-2xl font-bold my-3">Life Time Deals</h4>
              <span>
                <Image
                  alt="fullstack02"
                  src={ltd}
                  width={400}
                  height={200}
                  className="mx-auto"
                />
                <p className="py-3">
                  This is a SAAS product which offers a wide range of ideas for
                  entrepreneurs who are looking forward to start but don't have
                  a solid idea to kick-start things off. They offer a ideas in
                  niches like SAAS, sales, non-profit, content-marketing, stock
                  investing and allot more. Early stage entrepreneurs can get a
                  lot of value from this product.
                </p>
              </span>
              <div className="flex justify-center">
                <a
                  className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-3 py-2 rounded-md m-1"
                  href="https://ltd-ideas.vercel.app/"
                  target="blank"
                >
                  Live
                </a>
              </div>
            </div>
          </div>
        </section>
      </section>
    </main>
  );
}
