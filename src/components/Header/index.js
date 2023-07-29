"use client";
import React, { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [openMenu, setMenu] = useState(false);
  const handleMenu = () => {
    setMenu(!openMenu);
  };

  return (
    <section id="home">
      <div className="flex flex-col">
        <nav className="flex flex-row justify-between items-center">
          <div>
            <img
              src="/icons/logo.png"
              alt="logo"
              className="w-[60px] md:w-[80px] h-12 md:h-[64px]"
            ></img>
          </div>
          <div className="md:block hidden">
            <div className="flex flex-row justify-center gap-5 items-center">
              <Link
                href="#ourstory"
                className="text-gray font-NeutraText text-base font-medium"
              >
                {"OUR STORY"}
              </Link>
              <Link
                href="#product"
                className="text-gray font-NeutraText text-base font-medium"
              >
                {"PRODUCTS"}
              </Link>
              <Link
                href="#blogs"
                className="text-gray font-NeutraText text-base font-medium"
              >
                {"BLOGS"}
              </Link>
              <Link
                href="#faq"
                className="text-gray font-NeutraText text-base font-medium"
              >
                {"FAQ"}
              </Link>
              <Link
                href="#sustainability"
                className="text-gray font-NeutraText text-base font-medium"
              >
                {"SUSTAINABILITY"}
              </Link>
              <Link
                href="#contactus"
                className="text-gray font-NeutraText text-base font-medium"
              >
                {"CONTACTUS"}
              </Link>
            </div>
          </div>
          <div className="md:block hidden">
            <div className=" flex flex-row items-center">
              <img src="/icons/global.png"></img>
              <span className="text-center mx-2">GLOBAL</span>
              <img src="/icons/down-arrow.png"></img>
              <img src="/icons/search.png" className="ml-4"></img>
            </div>
          </div>
          <div className="md:hidden block">
            {openMenu ? (
              <img
                src="/icons/close.png"
                alt="menu"
                className="block md:hidden w-4 h-4"
                onClick={handleMenu}
              ></img>
            ) : (
              <img
                src="/icons/menu.png"
                alt="menu"
                className="block md:hidden w-7 h-7"
                onClick={handleMenu}
              ></img>
            )}
          </div>
        </nav>
        <div className="md:hidden block">
          {openMenu && (
            <div className="flex flex-col items-start p-1">
              <Link
                href="#ourstory"
                className="text-gray font-NeutraText text-base font-medium"
              >
                {"OUR STORY"}
              </Link>
              <Link
                href="#product"
                className="text-gray font-NeutraText text-base font-medium"
              >
                {"PRODUCTS"}
              </Link>
              <Link
                href="#blogs"
                className="text-gray font-NeutraText text-base font-medium"
              >
                {"BLOGS"}
              </Link>
              <Link
                href="#faq"
                className="text-gray font-NeutraText text-base font-medium"
              >
                {"FAQ"}
              </Link>
              <Link
                href="#sustainability"
                className="text-gray font-NeutraText text-base font-medium"
              >
                {"SUSTAINABILITY"}
              </Link>
              <Link
                href="#contactus"
                className="text-gray font-NeutraText text-base font-medium"
              >
                {"CONTACTUS"}
              </Link>
              <div className="flex flex-row items-center">
                <img src="/icons/global.png"></img>
                <span className="text-center mx-2">GLOBAL</span>
                <img src="/icons/down-arrow.png"></img>
              </div>
              <img src="/icons/search.png"></img>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Navbar;
