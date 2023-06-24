"use client";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { AiFillGithub, AiFillYoutube } from "react-icons/ai";
import Image from "next/image";
import frontend from "../public/frontend.jpg";
import backend from "../public/backend.png";
import fullstack from "../public/fullstack.png";
import bookstoreApi from "../public/bookstoreApi.png";
import crypto from "../public/crypto.png";
import fullstack02 from "../public/fullstack02.png";
import { useState } from "react";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <main className={darkMode ? "dark" : ""}>
      <section className="min-h-screen px-10 dark:bg-gray-900">
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
              <a href="#">RESUME</a>
            </li>
          </ul>
        </nav>
        <div className="text-center p-10">
          <h2 className="text-teal-500 font-Poppins font-bold text-5xl py-2 lg:text-6xl">
            Umar Khan
          </h2>
          <h3 className="lg:text-2xl text-xl py-2 dark:text-white">
            Software Engineer
          </h3>
          <p className="font-semibold text-xl py-5 leading-8 text-slate-800 dark:text-white lg:max-w-2xl mx-auto">
            Hello, Nice to meet you! I am a software engineer with
            more than a year of experience working in the industry, now i work
            as independent freelancer dedicated to delivering hight quality
            softwares. Really looking forward to collabrate on your project
          </p>
        </div>
        <div className="flex justify-center text-5xl text-gray-600 gap-105 py-3">
          <AiFillGithub />
          <AiFillYoutube />
        </div>
        <section>
          <h3 className="text-2xl text-teal-500 font-bold my-3">SERVICES</h3>
          <div className="md:flex gap-10">
            <div className="text-center shadow-lg p-2 rounded-lg dark:bg-white mb-5">
              <Image
                alt="frontend"
                src={frontend}
                width={400}
                height={200}
                className="mx-auto"
              />
              <p className="mt-2">
                I have worked intensively with the frontend using the
                technologies like react, next, CSS, Tailwind, Bootstrap
              </p>
            </div>
            <div className="text-center shadow-lg p-2 rounded-lg dark:bg-white mb-5">
              <Image
                alt="backend"
                src={backend}
                width={400}
                height={200}
                className="mx-auto"
              />
              <p className="mt-2">
                I have worked intensively with the frontend using the
                technologies like react, next, CSS, Tailwind, Bootstrap
              </p>
            </div>
            <div className="text-center shadow-lg p-2 rounded-lg dark:bg-white mb-5">
              <Image
                alt="fullstack"
                src={fullstack}
                width={400}
                height={200}
                className="mx-auto"
              />
              <p className="mt-2">
                I have worked intensively with the frontend using the
                technologies like react, next, CSS, Tailwind, Bootstrap
              </p>
            </div>
          </div>
        </section>
        <section>
          <p className="text-2xl text-teal-500 font-bold my-3">PROJECTS</p>
          <div className="gap-10 md:flex justify-center">
            <div className="flex flex-col justify-center items-center shadow-lg p-2 rounded-lg dark:bg-white mb-5 lg:w-4/12">
              <span>
                <Image
                  alt="crypto"
                  src={crypto}
                  width={400}
                  height={200}
                  className="mx-auto"
                />
                <p className="py-3">
                  This is frontend project made in in react and tailwindcss.
                  This is an online payment website just for the frontend and
                  does not have any backend attached to it. This is for the
                  demonstration of my frontend and designing skills
                </p>
              </span>
              <div className="flex justify-center">
                <a
                  className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-3 py-2 rounded-md m-1"
                  href="https://crypto-olive.vercel.app/"
                  target="blank"
                >
                  Live
                </a>

                <a
                  className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-3 py-2 rounded-md m-1"
                  href="https://github.com/Muhammad-Umar-Khan/crypto"
                  target="blank"
                >
                  code
                </a>
              </div>
            </div>
            <div className="text-center shadow-lg p-2 rounded-lg dark:bg-white mb-5 lg:w-4/12">
              <span>
                <Image
                  alt="booksapi"
                  src={bookstoreApi}
                  width={400}
                  height={200}
                  className="mx-auto"
                />
                <p className="py-3">
                  This is an API - backend for an online bookshop. This backend
                  has two entities, users and books. A user can register and
                  login. User can read all books and buy a book, while admin-
                  superuser can add, edit, delete a book. Admin can block or
                  unblock any user and can see the sales stats of any book for a
                  specific deuration.
                </p>
              </span>
              <div className="flex justify-center">
                <a
                  className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-3 py-2 rounded-md m-1"
                  href="https://documenter.getpostman.com/view/16657820/2s93z5AkBa"
                  target="blank"
                >
                  Live
                </a>

                <a
                  className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-3 py-2 rounded-md m-1"
                  href="https://github.com/Muhammad-Umar-Khan/bookshop-API"
                  target="blank"
                >
                  code
                </a>
              </div>
            </div>
            <div className="text-center shadow-lg p-2 rounded-lg dark:bg-white mb-5 lg:w-4/12">
              <span>
                <Image
                  alt="fullstack02"
                  src={fullstack02}
                  width={400}
                  height={200}
                  className="mx-auto"
                />
                <p className="py-3">
                  This is an API - backend for an online bookshop. This backend
                  has two entities, users and books. A user can register and
                  login. User can read all books and buy a book, while admin-
                  superuser can add, edit, delete a book. Admin can block or
                  unblock any user and can see the sales stats of any book for a
                  specific deuration.
                </p>
              </span>
              <div className="flex justify-center">
                <a
                  className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-3 py-2 rounded-md m-1"
                  href="https://documenter.getpostman.com/view/16657820/2s93z5AkBa"
                  target="blank"
                >
                  Live
                </a>

                <a
                  className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-3 py-2 rounded-md m-1"
                  href="https://github.com/Muhammad-Umar-Khan/bookshop-API"
                  target="blank"
                >
                  code
                </a>
              </div>
            </div>
          </div>
        </section>
      </section>
    </main>
  );
}
