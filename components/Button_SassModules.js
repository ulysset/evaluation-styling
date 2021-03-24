import { useState } from "react";
import initStyle from "../initStyle";
import styles from "./Button_SassModules.module.scss";

export default function Button(props) {
  const [clicked, setClicked] = useState(false);

  const style = initStyle(styles, {
    variations: {
      importance: props.importance,
      size: props.size,
    },
    states: {
      clicked,
    },
  });

  return (
    <button {...style(styles.root, props.rootStyle)} onClick={() => setClicked(!clicked)}>
      {!clicked ? props.children : "Clicked"}
    </button>
  );
}
