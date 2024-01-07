import React from "react";
import { GoArrowUpRight } from "react-icons/go";
import { first, second, third, fourth, fifth, sixth } from "../../Assest";

const Personal = () => {
  return (
    <div className="text-[#f2f0f0] md:p-8">
      <section>
        <h1 class="font-medium text-2xl mb-8 max-sm:mt-3">
          Hey, I'm <span className="text-[#d89085]">Vadini </span> 📇
        </h1>
        <p className="font-light tracking-normal leading-7">
          I'm currently navigating the intricate landscapes of the MA English
          program at{" "}
          <span className="border border-[#e53c4f] rounded p-1 text-sm inline-flex items-center leading-3 text-neutral-100 mr-1">
            🏛️ Patna Women's College
          </span>
          , and I must say, my enthusiasm for literature runs deep. Finding
          solace in the beauty of words, whether through the{" "}
          <span className="border border-[#e0e0d0] rounded p-1 text-sm inline-flex items-center leading-3 text-neutral-100 mr-1">
            📖 pages of a book
          </span>
          or engaging conversations with fellow enthusiasts, is truly my happy
          place.
        </p>
        <div className="columns-2 md:columns-2 mt-5 md:w-fit md:mx-auto ">
          <div class="relative h-40 sm:mb-4 ">
            <img
              src={fifth}
              alt=""
              className="rounded-lg object-cover h-full w-full"
            />
          </div>

          <div class="relative h-40 mb-4 mt-2">
            <img
              src={first}
              alt=""
              className="rounded-lg object-cover h-full w-full"
            />
          </div>
          <div class="relative h-80">
            <img
              src={fourth}
              alt=""
              className="rounded-lg object-cover h-full w-full"
            />
          </div>
        </div>
        <p className="mt-4 font-light tracking-normal leading-7 ">
          My passion for literature extends to my creative expressions, and I
          have worked on multiple projects to showcase my knowledge. In my free
          time, I enjoy{" "}
          <span className="border border-[#c5a261] rounded p-1 text-sm inline-flex items-center leading-3 text-neutral-100 mr-1">
            🎨 Drawing
          </span>
          and{" "}
          <span className="border border-[#ff3b32] rounded p-1 text-sm inline-flex items-center leading-3 text-neutral-100 mr-1">
            👩‍🍳 Baking
          </span>
          . As I strive for excellence in both my studies and creative pursuits,
          I eagerly anticipate the opportunity to pursue a Ph.D. in English.
        </p>
        <h2 className="text-5xl max-w-md mx-auto text-center">...</h2>
        <div className="max-w-md mx-auto p-2 text-center">
          <p class="italic font-serif text-lg leading-7">
            Her eyes might not be beautiful but her sight surely is.
            <br />
            She isn't someone to be described but she has enchanting lips.
            <br />
            She isn't 'understanding' but she is always there to be with.
            <br />
            She isn't an ideal girl but she's worth it.
            <br />
            Patience isn't her thing but passion is.
            <br />
            She's busy thinking about herself while writing this.
            <br />
            When she's being called beautiful by someone, she wonders if she's
            but deep down she knows, SHE IS.
            <br />
            She isn't perfect but SHE IS!
          </p>
          <h2 className="text-5xl max-w-md mx-auto text-center">...</h2>
        </div>

        <div className="mt-2">
          <a
            href="https://drive.google.com/file/d/1YXYVL_tbe6PCeq_PiZSZN0Cbi5nleDkJ/view"
            class="border border-neutral-200 bg-neutral-50rounded flex items-center justify-between px-3 py-4 w-full hover:text-gray-500 hover:border-gray-500 transition-all"
          >
            <p class="font-medium text-neutral-100 ">
              BREAKING THE SILENCE: ADVANCING MENSTRUAL HYGIENE
            </p>
            <GoArrowUpRight className="h-6 w-6" />
          </a>
        </div>
        <p className="mt-4">
          Join me on this journey where words effortlessly weave tales of
          exploration, expression, and meaningful impact.
        </p>
      </section>
      <footer className="mt-4">
        <ul className="flex gap-10">
          <li>
            <a
              href="https://www.instagram.com/herpurepoetry/"
              className="flex items-center hover:text-gray-500 transition-all"
              target="_blank"
            >
              <GoArrowUpRight className="h-6 w-6" />
              <p className="h-7 ml-2">get a glimpse</p>
            </a>
          </li>
          <li>
            <a
              href="mailto:vadiniguptaa@gmail.com"
              className="flex items-center hover:text-gray-500 transition-all"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GoArrowUpRight className="h-6 w-6" />
              <p className="h-7 ml-2">Contact me!</p>
            </a>
          </li>
        </ul>
      </footer>
    </div>
  );
};

export default Personal;
