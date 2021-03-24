import { useState } from "react";

export default function ButtonTailwind({ importance = "primary", size = "normal", children = "Click me" }) {
  const [clicked, setClicked] = useState(false);

  const buttonType = clicked ? "clicked" : importance;
  return (
    <button
      className={`flex space-x-28 place-items-center border border-transparent rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 font-medium
        ${buttonType === "secondary" ? 'bg-indigo-100 hover:bg-indigo-200 text-indigo-700 focus:ring-indigo-400"' : ""}
        ${buttonType === "primary" ? "bg-indigo-600 hover:bg-indigo-700 text-white focus:ring-indigo-400" : ""}
        ${buttonType === "clicked" ? "bg-red-600 hover:bg-red-700 text-white focus:ring-red-400" : ""}
        ${size === "normal" ? "px-2 py-1 text-base" : ""}
        ${size === "big" ? "px-4 py-3 text-xl" : ""}
      `}
      onClick={() => setClicked(!clicked)}
      type="button"
    >
      {!clicked ? children : "Clicked"}
    </button>
  );
}
