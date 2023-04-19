import React from "react";
import { render, fireEvent } from "@testing-library/react";
import EmojiResults from "./EmojiResults";

describe("<EmojiResults />", () => {
  it("should copy emoji when clicking on copy button", async () => {
    const emojiData = [
      { symbol: "😀", title: "Grinning Face" },
      { symbol: "🤔", title: "Thinking Face" },
      { symbol: "👍", title: "Thumbs Up" },
    ];

    // mock clipboard object
    const clipboard = {
      writeText: jest.fn(),
    };
    Object.assign(navigator, {
      clipboard,
    });

    const { container } = render(<EmojiResults emojiData={emojiData} />);
    const copyButtons = container.querySelectorAll(".copy-to-clipboard");

    // Trigger clipboard copy event on first button
    fireEvent.click(copyButtons[0]);

    // Wait for clipboard API to be called asynchronously
    await new Promise((resolve) => setTimeout(resolve, 0));

    // Check if text is copied to clipboard
    expect(clipboard.writeText).toHaveBeenCalledWith("😀");
  });

  it("should not copy emoji when clicking on non-copy button", async () => {
    const emojiData = [
      { symbol: "😀", title: "Grinning Face" },
      { symbol: "🤔", title: "Thinking Face" },
      { symbol: "👍", title: "Thumbs Up" },
    ];

    // mock clipboard object
    const clipboard = {
      writeText: jest.fn(),
    };
    Object.assign(navigator, {
      clipboard,
    });

    const { container } = render(<EmojiResults emojiData={emojiData} />);
    const nonCopyButtons = container.querySelectorAll(".emoji");

    // Trigger clipboard copy event on first button
    fireEvent.click(nonCopyButtons[0]);

    // Wait for clipboard API to be called asynchronously
    await new Promise((resolve) => setTimeout(resolve, 0));

    // Check if text is not copied to clipboard
    expect(clipboard.writeText).not.toHaveBeenCalled();
  });
});
