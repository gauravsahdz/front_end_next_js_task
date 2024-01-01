"use client";
import { LoaderContext } from "@/context/LoaderProvider";
import React from "react";
import { useRouter } from "next/navigation";

interface SearchbarProps {
  width: string;
  height: string;
  type?: string;
}

const Searchbar: React.FC<SearchbarProps> = ({ width, height, type }) => {
  const router = useRouter();
  const { setLoading } = React.useContext(LoaderContext);
  const [searchTerm, setSearchTerm] = React.useState("");

  const handleSearch = () => {
    setLoading(true);
    router.push(`/search/${searchTerm}`);
    setLoading(false);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div
      className={`w-${width} relative
    ${type === "navbar" ? "mt-1 mb-2" : "mt-0"}
    `}
    >
      <input
        type="text"
        className={`w-${width} py-2 ${
          type === "navbar" ? "pl-2" : "pl-10"
        } pr-3 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-indigo-500 h-${height}`}
        placeholder={
          type === "navbar"
            ? "Search gold"
            : "Search for products like gold, jacket..."
        }
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        onKeyPress={handleKeyPress}
      />
      <div
        className="absolute inset-y-0 right-0 flex items-center p-3 cursor-pointer z-10 bg-gray-200 rounded-md hover:bg-gray-300 transition duration-500"
        onClick={handleSearch}
      >
        <svg
          className="w-5 h-5 text-gray-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 15l5-5m0 0l-5-5m5 5H4"
          />
        </svg>
      </div>
    </div>
  );
};

export default Searchbar;
