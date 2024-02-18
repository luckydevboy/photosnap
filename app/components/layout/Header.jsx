"use client";

import Image from "next/image";
import { Bars2Icon } from "@heroicons/react/24/outline";
import { AnimatePresence, motion } from "framer-motion";
import { useRef, useState } from "react";
import { useClickAway } from "react-use";

const Header = () => {
  const [mobileMenuIsOpen, setMobileMenu] = useState(false);
  const mobileMenuRef = useRef(null);

  useClickAway(mobileMenuRef, () => {
    setMobileMenu(false);
  });

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
      <Bars2Icon
        className="h-6 w-6 text-black md:hidden"
        onClick={() => setMobileMenu(true)}
      />
      <AnimatePresence>
        {mobileMenuIsOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-10 bg-black lg:hidden"
            ></motion.div>
            <motion.div
              initial={{ left: "-75%" }}
              animate={{ left: 0 }}
              exit={{ left: "-75%" }}
              className="absolute top-0 z-20 h-svh w-3/4 rounded-l-lg bg-white p-8 lg:hidden"
              ref={mobileMenuRef}
            >
              <div className="flex h-full flex-col space-y-4">
                <div className="mb-8 flex items-center gap-x-2">
                  <Image
                    src="/assets/images/logo.svg"
                    alt="Logo"
                    width={35}
                    height={35}
                  />
                  <div className="text-xl font-black">PHOTOSNAP</div>
                </div>
                <ul className="space-y-4">
                  <li className="text-lg font-bold">HOME</li>
                  <li className="text-lg font-bold">STORIES</li>
                  <li className="text-lg font-bold">FEATURES</li>
                  <li className="text-lg font-bold">PRICING</li>
                </ul>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
