import { useState } from "react";
import styled from "@emotion/styled";

const css = (string) => string;

export default function ButtonTailwind({ importance = "primary", size = "normal", children = "Click me" }) {
  const [clicked, setClicked] = useState(false);
  const buttonType = clicked ? "clicked" : importance;
  return (
    <Button onClick={() => setClicked(!clicked)} type="button" buttonType={buttonType} size={size} clicked={clicked}>
      {!clicked ? children : "Clicked"}
    </Button>
  );
}

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border-width: 1px;
  border-color: transparent;
  border-radius: 0.375rem;
  background-color: blue;
  padding: 0.2rem 0.5rem;
  font-size: 1rem;
  font-weight: bold;
  &:hover {
    background-color: rgb(67, 56, 202);
    /* ${(props) => (!!props.clicked ? `background-color: rgb(185, 28, 28);` : "")}; */
    /* &:hover { background-color: rgb(199, 210, 254)} */
  }
  ${(props) =>
    props.buttonType === "primary"
      ? css`
          background-color: rgb(79, 70, 229);
          color: white;
        `
      : ""};
  ${(props) =>
    props.buttonType === "secondary"
      ? css`
          background-color: rgb(224, 231, 255);
          color: rgb(67, 56, 202);
        `
      : ""};
  ${(props) =>
    props.size === "big"
      ? css`
          padding: 0.4rem 0.8rem;
          font-size: 1.25rem;
        `
      : ""};
  ${(props) =>
    props.clicked
      ? css`
          background-color: rgba(220, 38, 38);
          color: white;
          &:hover {
            background-color: orange;
          }
        `
      : ""};
  &:focus {
    outline: 2px solid transparent;
    outline-offset: 2px;
    box-shadow: 0 0 #000;
  }
`;
