import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    <div className="flex justify-center">
      <Link to={"/"}>
        <h1 className="text-2xl font-['Open_Sans'] text-[#F3F3F3] p-10">
          Vadini Gupta
        </h1>
      </Link>
    </div>
  );
}
