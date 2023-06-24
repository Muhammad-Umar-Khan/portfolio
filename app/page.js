import { BsFillMoonStarsFill } from "react-icons/bs";
import { AiFillGithub, AiFillYoutube } from "react-icons/ai";
import Image from "next/image";
import frontend from "../public/frontend.jpg";
import backend from "../public/backend.png";
import fullstack from "../public/fullstack.png";
import bookstoreApi from "../public/bookstoreApi.png";
import crypto from "../public/crypto.png";
import fullstack02 from "../public/fullstack02.png";

export default function Home() {
  return (
    <main className="bg-white px-10">
      <section className="min-h-screen">
        <nav className="flex justify-between py-10">
          <h1 className="text-xl font-burtons">Umar Khan</h1>
          <ul className="flex items-center">
            <li className="cursor-pointer text-xl">
              <BsFillMoonStarsFill />
            </li>
            <li className="bg-gradient-to-r from-cyan-500 to-blue-500 py-2 px-4 text-white ml-5 rounded-md">
              <a href="#">RESUME</a>
            </li>
          </ul>
        </nav>
        <div className="text-center p-10">
          <h2 className="text-teal-500 font-Poppins font-bold text-5xl py-2">
            Umar Khan
          </h2>
          <h3 className="text-2xl py-2">Software Engineer</h3>
          <p className="text-md py-5 leading-8 text-slate-800">
            I am a software engineer with more than a year of experience working
            in the industry
          </p>
        </div>
        <div className="flex justify-center text-5xl text-gray-600 gap-105 py-3">
          <AiFillGithub />
          <AiFillYoutube />
        </div>
        <section>
          <h3 className="text-2xl text-teal-500 font-bold my-3">SERVICES</h3>
          <div className="md:flex gap-10">
            <div className="text-center shadow-lg p-2 rounded-lg">
              <Image
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
            <div className="text-center shadow-lg p-2 rounded-lg">
              <Image
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
            <div className="text-center shadow-lg p-2 rounded-lg">
              <Image
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
            <div className="flex flex-col justify-center items-center shadow-lg p-2 rounded-lg">
              <span>
                <Image
                  src={crypto}
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
                  {/* This is frontend project made in in react and tailwindcss.
                  This is an online payment website just for the frontend and
                  does not have any backend attached to it */}
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
            <div className="text-center shadow-lg p-2 rounded-lg">
              <span>
                <Image
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
            <div className="text-center shadow-lg p-2 rounded-lg">
              <span>
                <Image
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
