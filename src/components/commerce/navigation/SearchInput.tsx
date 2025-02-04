"use client";

import { useRouter, useSearchParams } from "next/navigation";

import { useEffect, useState } from "react";

const SearchInput = () => {
  const [searchText, setSearchText] = useState<string>("");
  const [error, setError] = useState<string | boolean>(false);

  const router = useRouter();
  const searchQuery = useSearchParams();

  useEffect(() => {
    if (!searchQuery.has("search")) {
      setError(false);
    }
  }, [searchQuery]);

  const handleSearch = () => {
    if (searchText.trim().length > 0) {
      router.push(`/shop/search/${searchText}`);
      setSearchText("");
      setError(false);
    } else {
      setError("Please enter what you are looking for!");
    }
  };

  return (
    <div className="flex flex-col justify-center items-center mt-6">
      <label
        className={`input flex items-center gap-2 lg:w-1/4 focus-within:border-0 bg-transparent ${
          error
            ? "border-delete focus:outline-delete focus-within:outline-delete "
            : "border-primary focus:outline-primary focus-within:outline-primary "
        } `}
      >
        <input
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          type="text"
          className="grow placeholder:text-sm lg:placeholder:text-base border-r-2 border-r-primary rounded-none "
          placeholder="What are you looking for?"
        />
        <button onClick={handleSearch}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="h-7 w-7 opacity-70 fill-primary cursor-pointer"
          >
            <path
              fillRule="evenodd"
              d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </label>
      <p className="text-delete font-content text-xs md:text-sm mt-0.5">
        {error}
      </p>
    </div>
  );
};
export default SearchInput;
