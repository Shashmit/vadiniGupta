import React from "react";
import { GoArrowUpRight } from "react-icons/go";
import { first, second, third, fourth, fifth, sixth } from "../../Assest";

const Personal = () => {
  return (
    <div className="text-[#f2f0f0] ">
      <section>
        <h1 class="font-medium text-2xl mb-8 ">Hey, I'm Vadini 📇</h1>
        <p className="">
          I'm currently navigating the intricate landscapes of the MA English
          program at Patna Women's College, and I must say, my enthusiasm for
          literature runs deep. Finding solace in the beauty of words, whether
          through the pages of a book or engaging conversations with fellow
          enthusiasts, is truly my happy place.
        </p>
        <div className="columns-2 sm:columns-3 mt-2">
          <div class="relative h-40">
            <img src={sixth} alt="" className="rounded-lg object-cover" />
          </div>
          <div class="relative h-80 sm:mb-0">
            <img src={third} alt="" className="rounded-lg object-cover" />
          </div>
          <div class="relative h-40 sm:h-80 sm:mb-4">
            <img src={fourth} alt="" className="rounded-lg object-cover" />
          </div>
          <div class="relative h-40 mb-4 sm:mb-0">
            <img src={first} alt="" className="rounded-lg object-cover" />
          </div>
          <div class="relative h-40 mb-4">
            <img src={second} alt="" className="rounded-lg object-cover" />
          </div>
          <div class="relative h-80">
            <img src={fifth} alt="" className="rounded-lg object-cover" />
          </div>
        </div>
      </section>
      <footer>
        <a
          href="https://www.instagram.com/herpurepoetry/"
          className="flex items-center hover:text-neutral-800 transition-all"
        >
          <GoArrowUpRight className="h-6 w-6" />
          <p className="h-7 ml-2">Read more</p>
        </a>
      </footer>
    </div>
  );
};

export default Personal;
