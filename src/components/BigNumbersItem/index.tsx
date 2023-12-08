import React, { useState, useEffect } from "react";

export default function BigNumbersItens({
  number,
  title,
}: {
  number: number;
  title: string;
}) {
  const [currentNumber, setCurrentNumber] = useState(0);

  useEffect(() => {
    const incrementSpeed = Math.ceil(number / 19); // Adjust the speed factor as needed
    const interval = setInterval(() => {
      setCurrentNumber((prevNumber) => {
        const difference = number - prevNumber;
        const increment =
          difference > incrementSpeed ? incrementSpeed : difference;
        const nextNumber = prevNumber + increment;
        return nextNumber >= number ? number : nextNumber;
      });
    }, 50); // Adjust the interval duration as needed

    return () => clearInterval(interval);
  }, [number]);

  return (
    <React.Fragment>
      <div className="flex flex-col items-center mb-4 md:mb-0">
        <p className="text-5xl font-bold text-green">+{currentNumber}</p>
        <h3 className="text-white text-center leading-trim text-cap font-inter text-xs font-normal uppercase">
          {title}
        </h3>
      </div>
      <div className="bg-[#177686] w-[0.1rem] h-16 bg-gradient-to-r from-teal-600 to-transparent"></div>
    </React.Fragment>
  );
}
