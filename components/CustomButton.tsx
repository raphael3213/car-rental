"use client";
import React from "react";
import Image from "next/image";
import { CustomButtonProps } from "@/types/CustomButtonProps";

function CustomButton({
  title,
  containerStyles,
  handleClick,
}: CustomButtonProps) {
  return (
    <button
      disabled={false}
      type="button"
      onClick={handleClick}
      className={`custom-btn ${containerStyles}`}
    >
      <span className={`flex-1`}>{title}</span>
    </button>
  );
}

export default CustomButton;
