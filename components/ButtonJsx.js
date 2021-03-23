import { useState } from "react";

export default function ButtonTailwind({ importance = "primary", size = "normal", children = "Click me" }) {
  const [clicked, setClicked] = useState(false);
  const buttonType = clicked ? "clicked" : importance;
  return (
    <button onClick={() => setClicked(!clicked)} type="button">
      {!clicked ? children : "Clicked"}
      <style jsx>
        {`
          button {
            display: flex;
            justify-content: center;
            align-items: center;
            border-width: 1px;
            border-color: transparent;
            border-radius: 0.375rem;
            background-color: blue;
            padding: 0.2rem 0.5rem;
            font-size: 1rem;
            font-weight: bold;
            ${buttonType === "primary" ? `background-color: rgb(79, 70, 229); color: white` : ""};
            ${buttonType === "secondary" ? `background-color: rgb(224, 231, 255); color: rgb(67, 56, 202)` : ""};
            ${size === "big" ? `padding: 0.4rem 0.8rem; font-size: 1.25rem` : ""};
            ${!!clicked ? `background-color: rgba(220, 38, 38); color: white` : ""};
          }
          button:hover {
            background-color: rgb(67, 56, 202);
            ${buttonType === "secondary" ? `background-color: rgb(199, 210, 254)` : ""};
            ${!!clicked ? `background-color: rgb(185, 28, 28) ` : ""};
          }
          button:focus {
            outline: 2px solid transparent;
            outline-offset: 2px;
            box-shadow: 0 0 #000;
          }
        `}
      </style>
    </button>
  );
}
