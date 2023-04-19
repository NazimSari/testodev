import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Header from "./Header";

test("renders header title correctly", () => {
  const { getByText } = render(<Header />);
  const headerTitle = getByText(/Emoji Search/i);
  expect(headerTitle).toBeInTheDocument();
});
