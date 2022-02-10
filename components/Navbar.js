import { Menu } from "react-feather";

export default function Navbar() {
  return (
    <div className="fixed w-full top-0 border-b bg-opacity-50 backdrop-blur-md">
      <div className="max-w-3xl m-auto px-8 py-2 flex items-center justify-between">
        <p className="font-eudoxus font-bold tracking-tight text-lg">
          Afifudin Abdullah
        </p>
        <button className="rounded-md w-10 h-10 outline-none flex items-center justify-center bg-white">
          <Menu className="h-5 w-5 text-black" />
        </button>
      </div>
    </div>
  );
}
