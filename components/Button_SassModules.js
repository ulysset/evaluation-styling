import { useState } from "react";
import initStyle from "../initStyle";
import styles from "./Button_SassModules.module.scss";

export default function Button({ importance = "primary", size = "normal", children = "Click me", ...props }) {
  const [clicked, setClicked] = useState(false);

  const style = initStyle(
    {
      importance,
      size,
      clicked,
    },
    styles
  );

  return (
    <button {...style(styles.root, props.rootStyle)} onClick={() => setClicked(!clicked)}>
      {!clicked ? children : "Clicked"}
    </button>
  );
}
