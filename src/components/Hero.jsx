import React from "react";
import { logo } from "../assets";

const Hero = () => {
  return (
    <header className="w-full flex justify-center items-cemter flex-col">
      <nav className="flex justify-between items-center w-full mb-10 pt-3">
        <img src={logo} alt="sumz_logo" className="w-28 object-contain" />
      </nav>
      <h1 className="head_text ">
        Sumarize Articles with <br className="max-md:hidden" />
        <span className="orange_gradient">OpenAi GPT-4</span>
      </h1>
      <h2 className="mt-10 text-3xl text-gray-900 sm:text-2xl text-center w-2xl ">
        Simplify your reading with Sumarize, an article summarizer that
        transforms lengthy articles into clear and concise summaries
      </h2>
    </header>
  );
};

export default Hero;
