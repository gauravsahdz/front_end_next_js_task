"use client";
import React, { useState } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingBag, faUser } from "@fortawesome/free-solid-svg-icons";
import { useCartStore } from "@/reducers/useCartStore";
import Image from "next/image";
import "@/styles/components/_navbar.css";
import { navRoutes } from "@/utils/routes";
import hamburgerIcon from "public/images/hamburger.svg";
import Searchbar from "./Searchbar";

const Nav = () => {
  const [toggleNavDropdown, setToggleNavDropdown] = useState(false);

  const isAdmin: boolean = false;
  const totalItems = useCartStore((state) => state.totalItems);

  const navClass = `navbar flex flex-wrap items-center justify-between w-full px-4 py-4 lg:px-0 bg-white z-10 sticky top-0 shadow-md
    ${isAdmin ? "hidden" : ""}
    `;

  return (
    <div className={navClass}>
      <div className="flex items-center flex-shrink-0 text-black mr-6 hover:cursor-pointer ml-4">
        <Link href="/" legacyBehavior>
          <h1 className="font-bold text-2xl ml-0 lg:ml-8">
            Online
            <span className="text-indigo-600">Store</span>
          </h1>
        </Link>
      </div>
      <div className="hidden lg:block w-1/2">
        <Searchbar width="full" height="full" type="" />
      </div>
      <div
        className="lg:flex lg:items-center lg:w-auto w-full lg:block hidden"
        id="menu"
      >
        <nav>
          <ul className="lg:flex items-center justify-between text-base text-black pt-4 lg:pt-0">
            {navRoutes.map((route, index) => (
              <li key={index}>
                <Link href={route.path} legacyBehavior>
                  <a className="lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-indigo-400">
                    {route.name}
                  </a>
                </Link>
              </li>
            ))}

            <li className="cart">
              <Link href="/cart" legacyBehavior>
                <a className="lg:p-4 py-3 px-0 block border-b-2 border-transparent ">
                  <FontAwesomeIcon
                    icon={faShoppingBag}
                    className="transition duration-300 ease-in-out transform hover:scale-110"
                  />
                </a>
              </Link>
              <span className="px-1 py-0 bg-white text-black rounded-full absolute right-2 top-4">
                {totalItems}
              </span>
            </li>
          </ul>
        </nav>
      </div>

      <div className="block lg:hidden">
        <button
          id="nav-toggle"
          className="flex items-center px-3 py-2 border rounded text-black border-black hover:text-black hover:border-black"
          onClick={() => setToggleNavDropdown((prev) => !prev)}
        >
          <Image src={hamburgerIcon} alt="hamburger" width={20} height={20} />
        </button>
        {toggleNavDropdown && (
          <div className="absolute right-0 top-16 bg-white shadow-md rounded-md py-2 px-4 flex flex-col w-40">
            <Searchbar width="full" height="8" type="navbar" />
            <Link
              href="/"
              className="text-sm font-inter text-gray-700 hover:text-gray-500 font-medium mb-2"
              onClick={() => setToggleNavDropdown(false)}
            >
              Home
            </Link>
            <Link
              href="/cart"
              className="text-sm font-inter text-gray-700 hover:text-gray-500 font-medium mb-2"
              onClick={() => setToggleNavDropdown(false)}
            >
              Cart
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Nav;
