"use client";
import { useState } from "react";

export default function CircularButton({
  text,
  onClick,
  isSelected,
  className,
}: {
  text: string;
  onClick: () => void;
  isSelected: boolean;
  className: string | null;
}) {
  const defaultClassSelected =
    "select-none rounded-full bg-green px-5 py-2 w-fit text-darkblue transition-all";
  const defaultClass =
    "select-none rounded-full bg-transparent px-5 py-2 w-fit text-darkgray transition-all hover:bg-lightgray";

  return (
    <div
      className={
        (isSelected ? defaultClassSelected : defaultClass) + " " + className
      }
      onClick={onClick}
    >
      <p className="text-center">{text}</p>
    </div>
  );
}
