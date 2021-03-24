import { useState } from "react";
import classnames from "classnames";
export default function ButtonTailwind({
  importance = "primary",
  size = "normal",
  children = "Click me",
  rootStyle = "",
}) {
  const [clicked, setClicked] = useState(false);
  return (
    <button
      className={classnames(
        rootStyle,
        "border rounded-md focus:outline-none font-medium transform hover:scale-110 transition-all",
        importance === "primary" && !clicked && "text-white bg-indigo-600 hover:bg-indigo-800",
        importance === "primary" && clicked && "text-white bg-red-600 hover:bg-red-800",
        importance === "secondary" &&
          !clicked &&
          "bg-transparent border border-solid border-indigo-600 hover:border-indigo-800 text-indigo-600 hover:text-indigo-800",
        importance === "secondary" &&
          clicked &&
          "bg-transparent border border-solid border-red-600 hover:border-red-800 text-red-600 hover:text-red-800",
        size === "normal" && "px-2 py-1 text-base",
        size === "big" && "px-4 py-3 text-xl"
      )}
      onClick={() => setClicked(!clicked)}
      type="button"
    >
      {!clicked ? children : "Clicked"}
    </button>
  );
}
