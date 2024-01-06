import React from "react";
import { GoArrowUpRight } from "react-icons/go";
import { first, second, third, fourth, fifth, sixth } from "../../Assest";

const Personal = () => {
  return (
    <div className="text-[#f2f0f0]">
      <section>
        <h1 class="font-medium text-2xl mb-8 ">Hey, I'm Vadini 📇</h1>
        <p className="">
          I'm currently navigating the intricate landscapes of the MA English
          program at Patna Women's College, and I must say, my enthusiasm for
          literature runs deep. Finding solace in the beauty of words, whether
          through the pages of a book or engaging conversations with fellow
          enthusiasts, is truly my happy place.
        </p>
        <div className="columns-2 md:columns-2 mt-8 md:w-fit md:mx-auto ">
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
      </section>
      <footer>
        <a
          href="https://www.instagram.com/herpurepoetry/"
          className="flex items-center hover:text-gray-500 transition-all"
        >
          <GoArrowUpRight className="h-6 w-6" />
          <p className="h-7 ml-2">get a glimpse</p>
        </a>
      </footer>
    </div>
  );
};

export default Personal;
