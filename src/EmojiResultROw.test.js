import React from "react";
import { render } from "@testing-library/react";
import EmojiResultRow from "./EmojiResultRow";
import "@testing-library/jest-dom/extend-expect";

describe("<EmojiResultRow />", () => {
  it("should render an image with a valid src URL", () => {
    const symbol = "😀";
    const title = "Grinning Face";
    const { getByRole } = render(
      <EmojiResultRow symbol={symbol} title={title} />
    );
    const imgElement = getByRole("img");
    expect(imgElement).toBeInTheDocument();
    expect(imgElement).toHaveAttribute("src");
  });
});
