import { css } from "@linaria/core";
import initStyle from "./../initStyleLinaria";
import { breakpoint } from "./../styles/theme";
import Button from "../components/Button_Linaria";

export default function Home() {
  const style = initStyle();

  return (
    <>
      <h2
        {...style(css`
          &.base {
            font-size: var(--text-lg);
            font-weight: var(--font-weight-bold);
          }
        `)}
      >
        Linaria
      </h2>
      <div
        {...style(css`
          &.base {
            margin-top: var(--space-3);
            width: 100%;

            display: grid;
            grid-template-rows: repeat(4, 1fr);
            place-items: center;
            gap: var(--space-3);

            ${breakpoint.large} {
              grid-template-columns: repeat(4, 1fr);
            }
          }
        `)}
      >
        <Button
          importance="primary"
          size="normal"
          rootStyle={css`
            &.base {
              justify-self: start;
              align-self: start;

              ${breakpoint.large} {
                justify-self: end;
                align-self: end;
              }
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
