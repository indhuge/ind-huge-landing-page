import BigNumbersItem from "../BigNumbersItem/";
import React, { useEffect, useState } from "react";

export default function BigNumbersItens({ bigNumberProps }: { bigNumberProps: object }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleDotClick = (index: React.SetStateAction<number>) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === (bigNumberProps as Array<any>).length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [(bigNumberProps as Array<any>).length]);

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {(bigNumberProps as Array<any>).map((item: any, index: number) => (
          <div
            key={index}
            style={{ display: index === currentIndex ? "block" : "none" }}
          >
            {index !== 0 && (
              <div className="bg-[#177686] md:w-[0.1rem] md:h-16 bg-gradient-to-r from-teal-600 to-transparent w-0 h-0"></div>
            )}
            <BigNumbersItem
              number={item.bignumberslicetriggernumber ?? 0}
              title={item.bignumberslicetriggertitle ?? ""}
              isFraction={!!item.bignumberslicetriggernumberfraction}
            />
          </div>
        ))}
      </div>
      <div style={{ textAlign: "center", marginTop: "10px" }}>
        {(bigNumberProps as Array<any>).map((_: any, index: number) => (
          <span
            key={index}
            onClick={() => handleDotClick(index)}
            style={{
              cursor: "pointer",
              margin: " 0 0 20px 5px",
              display: "inline-block",
              width: "8px",
              height: "8px",
              borderRadius: "50%",
              backgroundColor: index === currentIndex ? "#177686" : "#ccc",
            }}
          />
        ))}
      </div>
    </div>
  );
}
