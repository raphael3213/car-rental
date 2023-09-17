"use client";
import React from "react";
import { Fragment, useState } from "react";
import Router from "next/navigation";
import Image from "next/image";
import { Listbox, Transition } from "@headlessui/react";
import { useRouter } from "next/navigation";

function CustomFilter({ title, options }: CustomFilterProps) {
  const [selected, setSelected] = useState(options[0]);
  const router = useRouter();
  const handleUpdateParams = (type: string, value: string) => {
    const searchParams = new URLSearchParams(window.location.search);

    searchParams.set(type, value.toLowerCase());

    const newPathname = `${
      window.location.pathname
    }?${searchParams.toString()}`;
    router.push(newPathname);
  };
  return (
    <div className="w-fit">
      <Listbox
        value={selected}
        onChange={(e) => {
          console.log(e);
          setSelected(e);
          handleUpdateParams(title, e.value);
        }}
      >
        <div className="relative w-fit z-10">
          <Listbox.Button className="custom-filter__btn">
            <span className="block truncate">{selected.title}</span>
            <Image
              src="/chevron-up-down.svg"
              width={20}
              height={20}
              alt="chevron up down"
              className="object-contain ml-4"
            />
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className="custom-filter__options">
              {options.map((option) => (
                <Listbox.Option
                  key={option.title}
                  value={option}
                  className={({ active }) =>
                    `relative cursor-default select-none py-2 px-4 ${
                      active ? "bg-primary-blue text-white" : "text-gray-900"
                    }`
                  }
                >
                  {({ selected }) => (
                    <span
                      className={`block truncate ${
                        selected ? "font-medium" : "font-normal"
                      }`}
                    >
                      {option.title}
                    </span>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  );
}

export default CustomFilter;
