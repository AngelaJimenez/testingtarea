import React from "react";
import ReactDOM from "react-dom";
import { act } from "react-dom/test-utils";
import Like from "../like";
import ReactTestUtils from 'react-dom/test-utils';
let container;

beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
  act(() => {
    ReactDOM.render(
      <Like labelActive="Active" labelInactive="Inactive" />,
      container
    );
  });
});

afterEach(() => {
  document.body.removeChild(container);
  container = null;
});

describe("Testing Checkbox component", () => {
  it("Defaults to 0 Likes", () => {
    const plikes = container.querySelector("p");
    expect(plikes.textContent).toBe("Likes: 0");
  });
  it("Likes Plus 1 when clicks like", () => {
    const like = document.getElementById("increment");
    const plikes = container.querySelector("p");
    ReactTestUtils.Simulate.click(like);
    expect(plikes.textContent).toBe("Likes: 1");
  });
  it("Likes less 1 when clicks like", () => {
    const dislike = document.getElementById("decrement");
    const plikes = container.querySelector("p");
    ReactTestUtils.Simulate.click(dislike);
    expect(plikes.textContent).toBe("Likes: -1");
  });




  
});