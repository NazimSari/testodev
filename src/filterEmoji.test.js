import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import filterEmoji from "./filterEmoji";

import emojiList from "./emojiList.json";

describe("filterEmoji", () => {
  it("should return an empty array if no emojis match the search text", () => {
    const filteredEmojis = filterEmoji("invalid search text", 5);
    expect(filteredEmojis).toEqual([]);
  });

  it("should return an array of emojis that match the search text", () => {
    const filteredEmojis = filterEmoji("smile", 5);
    const expectedEmojis = emojiList
      .filter(
        (emoji) =>
          emoji.title.toLowerCase().includes("smile") ||
          emoji.keywords.includes("smile")
      )
      .slice(0, 5);
    expect(filteredEmojis).toEqual(expectedEmojis);
  });

  it("should return an array of emojis with a length of maxResults or less", () => {
    const filteredEmojis = filterEmoji("smile", 2);
    expect(filteredEmojis.length).toBeLessThanOrEqual(2);
  });
});
