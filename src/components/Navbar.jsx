import { Link } from "react-router-dom";
import Burger from "./Burger";

export default function Navbar() {
  return (
    <div className="flex justify-around  mt-7 p-7 w-full">
      <Link to={"/"}>
        <h1 className="text-2xl font-['Open_Sans'] text-[#F3F3F3] ">
          Vadini Gupta
        </h1>
      </Link>
      <div className="md:hidden">
        <Burger />
      </div>
    </div>
  );
}
