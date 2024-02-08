import Image from "next/image";
import { Bars2Icon } from "@heroicons/react/24/outline";

const Header = () => {
  return (
    <header className="flex items-center justify-between bg-white p-6">
      <div className="flex items-center gap-x-8">
        <div className="flex items-center gap-x-2">
          <Image
            src="/assets/images/logo.svg"
            alt="Logo"
            width={25}
            height={20}
          />
          <h1 className="text-xl font-black">PHOTOSNAP</h1>
        </div>
        <ul className="hidden gap-x-8 md:flex">
          <li className="font-bold">STORIES</li>
          <li className="font-bold">FEATURES</li>
          <li className="font-bold">PRICING</li>
        </ul>
      </div>
      <Bars2Icon className="h-6 w-6 text-black md:hidden" />
    </header>
  );
};

export default Header;
