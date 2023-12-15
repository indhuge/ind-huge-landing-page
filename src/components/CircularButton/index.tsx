"use client";
import { useState } from "react";

export default function CircularButton({
  text,
  onClick,
  isSelected,
}: {
  text: string;
  onClick: () => void;
  isSelected: boolean;
}) {
  const defaultClassSelected =
    "select-none rounded-full bg-green px-5 py-2 w-fit text-darkblue transition-all";
  const defaultClass =
    "select-none rounded-full bg-transparent px-5 py-2 w-fit text-darkgray transition-all hover:bg-lightgray";

  return (
    <div className={isSelected ? defaultClassSelected : defaultClass}>
      <p onClick={onClick} className="text-center">
        {text}
      </p>
    </div>
  );
}
