import { useState } from "react";
import { css } from "@linaria/core";
import initStyle from "./../initStyleLinaria";
import { color } from "./../styles/theme";

export default function Button(props) {
  const [clicked, setClicked] = useState(false);

  const style = initStyle({
    variations: {
      importance: props.importance,
      size: props.size,
    },
    states: {
      clicked,
    },
  });

  return (
    <button
      onClick={() => setClicked(!clicked)}
      {...style(
        {
          hostStyle: props.rootStyle,
        },
        css`
          &.base {
            border-style: solid;
            border-color: transparent;
            border-radius: var(--radius-md);
            outline: none;

            cursor: pointer;
            transition: all var(--ease-out) var(--duration-100);

            border-width: var(--thickness-sm);

            white-space: nowrap;
            font-family: var(--font-sans-serif);
            font-weight: var(--font-weight-medium);
            color: ${color.white};

            &:hover {
              transform: scale(1.1);
            }
          }

          &.importance_primary {
            background-color: ${color.indigo.$5};

            &:hover {
              background-color: ${color.indigo.$6};
            }

            &.clicked_true {
              background-color: ${color.red.$5};
            }

            &.clicked_true:hover {
              background-color: ${color.red.$6};
            }
          }

          &.importance_secondary {
            color: var(--indigo-400);
            border-color: var(--indigo-400);

            &:hover {
              color: var(--indigo-500);
              border-color: var(--indigo-500);
            }

            &.clicked_true {
              color: var(--red-500);
              border-color: var(--red-500);
            }

            &.clicked_true:hover {
              color: var(--red-600);
              border-color: var(--red-600);
            }
          }

          &.size_normal {
            padding: var(--space-2) var(--space-3);
          }

          &.size_big {
            padding: var(--space-3) var(--space-5);
          }
        `
      )}
    >
      {!clicked ? props.children : "Clicked"}
    </button>
  );
}
