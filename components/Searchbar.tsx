import { LoaderContext } from "@/context/LoaderProvider";
import { useRouter } from "next/navigation";
import React from "react";

interface SearchbarProps {
  width: string;
  height: string;
  type?: string;
}

const Searchbar: React.FC<SearchbarProps> = ({ width, height, type }) => {
  const router = useRouter();
  const { setLoading } = React.useContext(LoaderContext);
  const handleSearch = (searchTerm: string) => {
    setLoading(true);
    router.push(`/search/${searchTerm}`);
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
        placeholder={type === "navbar" ? "Search" : "Search for products"}
        onChange={(e) => handleSearch(e.target.value)}
      />
      <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
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
