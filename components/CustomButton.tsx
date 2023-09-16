"use client";
import React from "react";
import Image from "next/image";
import { CustomButtonProps } from "@/types/CustomButtonProps";

function CustomButton({
  title,
  containerStyles,
  textStyles,
  handleClick,
  rightIcon,
  isDisabled,
}: CustomButtonProps) {
  return (
    <button
      disabled={false}
      type="button"
      onClick={handleClick}
      className={`custom-btn ${containerStyles}`}
    >
      <span className={`flex-1 ${textStyles}`}>{title}</span>
      {rightIcon && (
        <div className="relative w-6 h-6">
          <Image
            src={rightIcon}
            fill
            className="object-contain"
            alt="right icon"
          />
        </div>
      )}
    </button>
  );
}

export default CustomButton;
