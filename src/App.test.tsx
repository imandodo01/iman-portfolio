import { describe, expect, it } from "vitest";
import { renderToStaticMarkup } from "react-dom/server";
import App from "./App";

describe("Iman application shell", () => {
  it("renders the project identity and foundation notice", () => {
    const markup = renderToStaticMarkup(<App />);
    expect(markup).toContain("Iman");
    expect(markup).toContain("Development foundation");
  });
});
