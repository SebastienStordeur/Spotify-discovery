import React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Button from "./Button";

describe("Button", () => {
  it("should render the button with provided text", () => {
    const buttonText = "Click me";
    const { getByText } = render(<Button>{buttonText}</Button>);
    const buttonElement = getByText(buttonText);
    expect(buttonElement).toBeInTheDocument();
  });

  it("should call the onClick function when the button is clicked", () => {
    const onClickMock = jest.fn();
    const { getByText } = render(<Button onClick={onClickMock}>Click me</Button>);
    const buttonElement = getByText("Click me");

    fireEvent.click(buttonElement);
    expect(onClickMock).toHaveBeenCalled();
  });

  it("should pass any aditionnal props to the button component", () => {
    const { getByTestId } = render(
      <Button data-testid="button-id" className="classname">
        Click me
      </Button>
    );
    const buttonElement = getByTestId("button-id");

    expect(buttonElement).toHaveClass("classname");
  });
});
