import React from "react";
import { GoArrowUpRight } from "react-icons/go";

const Personal = () => {
  return (
    <div className="text-[#f2f0f0]">
      <section>
        <h1 class="font-medium text-2xl mb-8 ">Hey, I'm Vadini 📇</h1>
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
