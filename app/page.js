import Image from "next/image";
import {BsFillMoonStarsFill} from "react-icons/bs"

export default function Home() {
  return (
    <main className="bg-white px-10">
      <section className="min-h-screen">
        <nav className="flex justify-between py-10">
          <h1 className="text-xl font-burtons">Umar Khan</h1>
          <ul className="flex items-center">
            <li className="cursor-pointer text-xl"><BsFillMoonStarsFill /></li>
            <li className="bg-gradient-to-r from-cyan-500 to-blue-500 py-2 px-4 text-white ml-5 rounded-md">
              <a href="#">RESUME</a>
            </li>
          </ul>
        </nav>
      </section>
    </main>
  );
}
