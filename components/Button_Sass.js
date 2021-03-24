import { useState } from "react";
import classNames from "classnames";

export default function Button({
  importance = "primary",
  size = "normal",
  children = "Click me",
  rootClassName = "",
  dataId = "null",
}) {
  const [clicked, setClicked] = useState(false);

  const className = classNames({
    [`_importance:${importance}`]: importance,
    [`_size:${size}`]: size,
    clicked,
  });
  return (
    <button className={`Button_root ${className}`} data-id={dataId} onClick={() => setClicked(!clicked)}>
      {!clicked ? children : "Clicked"}
    </button>
  );
}
