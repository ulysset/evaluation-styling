import { useState } from "react";

export default function ButtonTailwind({
  importance = "primary",
  size = "normal",
  children = "Click me",
  rootClassName = "",
}) {
  const [clicked, setClicked] = useState(false);

  return (
    <button
      className={`border border-transparent rounded-md focus:outline-none font-medium  transform hover:scale-110 transition-all
        ${
          importance === "primary" &&
          `text-white ${!clicked ? "bg-indigo-600 hover:bg-indigo-800" : "bg-red-600 hover:bg-red-800 text-white"}`
        }
        ${
          importance === "secondary" &&
          `bg-transparent border border-solid ${
            !clicked
              ? "border-indigo-600 hover:border-indigo-800 text-indigo-600 hover:text-indigo-800"
              : "border-red-600 hover:border-red-800 text-red-600 hover:text-red-800"
          }`
        }
        ${size === "normal" && "px-2 py-1 text-base"}
        ${size === "big" && "px-4 py-3 text-xl"}
        ${rootClassName}
      `}
      onClick={() => setClicked(!clicked)}
      type="button"
    >
      {!clicked ? children : "Clicked"}
    </button>
  );
}
