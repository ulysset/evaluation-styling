import { css } from "@linaria/core";
import Button from "../components/Button_Linaria";
import initStyle from "./../initStyleLinaria";

const bp = {
  lg: "@media (min-width: 1064px)",
};

export default function Home() {
  const style = initStyle();

  return (
    <>
      <h2
        {...style(css`
          font-size: var(--text-lg);
          font-weight: var(--font-weight-bold);
        `)}
      >
        Linaria
      </h2>
      <div
        {...style(css`
          margin-top: var(--space-3);
          width: 100%;

          display: grid;
          grid-template-rows: repeat(4, 1fr);
          place-items: center;
          gap: var(--space-3);

          ${bp.lg} {
            grid-template-columns: repeat(4, 1fr);
          }
        `)}
      >
        <Button
          importance="primary"
          size="normal"
          rootStyle={css`
            justify-self: start;
            align-self: start;

            ${bp.lg} {
              justify-self: end;
              align-self: end;
            }
          `}
        >
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
