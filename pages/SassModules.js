import styles from "./SassModules.module.scss";
import initStyle from "../initStyle";
import Button from "../components/Button_SassModules";

export default function Home() {
  const style = initStyle(styles);

  return (
    <>
      <h2 {...style(styles.title)}>Sass Modules</h2>
      <div {...style(styles.container)}>
        <Button importance="primary" size="normal" rootStyle={styles.Button_root}>
          Click me
        </Button>
        <Button importance="primary" size="big">
          Click me
        </Button>
        <Button importance="secondary" size="normal">
          Click me
        </Button>
        <Button importance="secondary" size="big">
          Click me
        </Button>
      </div>
    </>
  );
}
