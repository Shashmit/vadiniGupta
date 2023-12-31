import { Link } from "react-router-dom";
import Burger from "./Burger";

export default function Navbar() {
  return (
    <div className="flex justify-between mt-7 p-5 w-full px-6 md:justify-center">
      <Link to={"/"}>
        <h1 className="text-3xl font-['Open_Sans'] text-[#F3F3F3] font-normal">
          Vadini Gupta
        </h1>
      </Link>
      <div className="md:hidden">
        <Burger />
      </div>
    </div>
  );
}
