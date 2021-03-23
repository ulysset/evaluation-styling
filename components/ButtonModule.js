import { useState } from "react";
import styles from "./Button.module.scss";
export default function ButtonTailwind({ importance = "primary", size = "normal", children = "Click me" }) {
  const [clicked, setClicked] = useState(false);

  const buttonType = clicked ? "clicked" : importance;
  return (
    <button className={`${styles.test} ${styles.test1}`} onClick={() => setClicked(!clicked)} type="button">
      {!clicked ? children : "Clicked"}
    </button>
  );
}
