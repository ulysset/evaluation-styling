import { useState } from "react";
import classNames from "classnames";

export default function Button(props) {
  const [clicked, setClicked] = useState(false);

  const className = classNames({
    [`_importance:${props.importance}`]: props.importance,
    [`_size:${props.size}`]: props.size,
    clicked,
  });
  return (
    <button className={`Button_root ${className}`} data-id={props.dataId} onClick={() => setClicked(!clicked)}>
      {!clicked ? props.children : "Clicked"}
    </button>
  );
}
