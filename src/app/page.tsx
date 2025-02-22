import React from "react";
import Landing from "./component/Landing";
import { LuNotebookPen } from "react-icons/lu";
import { MdOutlineMail } from "react-icons/md";
import { IoSearchSharp } from "react-icons/io5";
import Link from "next/link";

const Home = () => {
  return (
    <div className="md:flex items-center gap-24">
      <Landing />
      <div className="font-bold">
        <Link
          href="/devoirs"
          className="flex  items-center gap-2 opacity-80 hover:gap-4 hover:opacity-100 duration-300"
        >
          <IoSearchSharp />
          Explorer les devoirs
        </Link>
        <button className="flex my-6 items-center gap-2 opacity-80 hover:gap-4 hover:opacity-100 duration-300">
          <LuNotebookPen />
          Voir les séries d exercices
        </button>
        <button className="flex items-center gap-2 opacity-80 hover:gap-4 hover:opacity-100 duration-300">
          <MdOutlineMail />
          Nous contacter
        </button>
      </div>
    </div>
  );
};

export default Home;
