"use client";
import React, { useState } from "react";
import SearchManufacturer from "./SearchManufacturer";
import Image from "next/image";

function SearchButton({ otherClasses }: { otherClasses: string }) {
  return (
    <button type="submit" className={`-ml-3 z-10 ${otherClasses}`}>
      <Image
        src="/magnifying-glass.svg"
        alt="close"
        width={40}
        height={40}
        className="object-contain"
      />
    </button>
  );
}

export default SearchBar;
function SearchBar() {
  const [model, setModel] = useState("");
  const [manufacturer, setManufacturer] = useState("");
  const handleSearch = () => {};
  return (
    <form className="searchbar" onSubmit={handleSearch}>
      <div className="searchbar__item">
        <SearchManufacturer
          manufacturer={manufacturer}
          setManufacturer={setManufacturer}
        />
        <SearchButton otherClasses="sm:hidden" />
      </div>
      <div className="searchbar__item">
        <Image
          src="/model-icon.png"
          alt="close"
          width={25}
          height={25}
          className="absolute w-[20px] h-[20px] ml-4"
        />
        <input type="text" name="model" value={model} />
      </div>
    </form>
  );
}
