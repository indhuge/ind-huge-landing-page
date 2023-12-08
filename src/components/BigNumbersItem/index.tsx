import React, { useState, useEffect, useRef } from "react";

export default function BigNumbersItens({
  number,
  title,
}: {
  number: number;
  title: string;
}) {
  const [currentNumber, setCurrentNumber] = useState(0);
  const numberRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const incrementSpeed = Math.ceil(number / 19);
            const interval = setInterval(() => {
              setCurrentNumber((prevNumber) => {
                const difference = number - prevNumber;
                const increment =
                  difference > incrementSpeed ? incrementSpeed : difference;
                const nextNumber = prevNumber + increment;
                return nextNumber >= number ? number : nextNumber;
              });
            }, 50);

            return () => clearInterval(interval);
          }
        });
      },
      { threshold: 0.5 }
    );

    if (numberRef.current) {
      observer.observe(numberRef.current);
    }

    return () => {
      if (numberRef.current) {
        observer.unobserve(numberRef.current);
      }
    };
  }, [number]);

  return (
    <React.Fragment>
      <div
        className="flex flex-col items-center mb-4 md:mb-000"
        ref={numberRef}
      >
        <p className="text-5xl font-bold text-green">+{currentNumber}</p>
        <h3 className="text-white text-center leading-trim text-cap font-inter text-xs font-normal uppercase">
          {title}
        </h3>
      </div>
      <div className="bg-[#177686] w-[0.1rem] h-16 bg-gradient-to-r from-teal-600 to-transparent"></div>
    </React.Fragment>
  );
}
