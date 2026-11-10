import { describe, expect, it } from "vitest";
import { renderToStaticMarkup } from "react-dom/server";
import App from "./App";

describe("Iman portfolio", () => {
  it("renders the primary identity and portfolio navigation", () => {
    const markup = renderToStaticMarkup(<App />);
    expect(markup).toContain("Building software");
    expect(markup).toContain('aria-label="Main navigation"');
    expect(markup).toContain('href="#experience"');
  });

  it("renders the selected personal project and engineering notes section", () => {
    const markup = renderToStaticMarkup(<App />);
    expect(markup).toContain("Qraft");
    expect(markup).toContain("ENGINEERING NOTES");
  });
});
