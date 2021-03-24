import { useState } from "react";
import initStyle from "../initStyle";
import styles from "./Button_SassModules.module.scss";

export default function Button({ importance = "primary", size = "normal", children = "Click me", rootStyle = "" }) {
  const [clicked, setClicked] = useState(false);

  const style = initStyle(
    {
      variations: {
        importance,
        size,
      },
      states: {
        clicked,
      },
    },
    styles
  );

  return (
    <button {...style(styles.root, rootStyle)} onClick={() => setClicked(!clicked)}>
      {!clicked ? children : "Clicked"}
    </button>
  );
}
