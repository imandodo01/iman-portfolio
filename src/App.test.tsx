import { describe, expect, it } from "vitest";
import { renderToStaticMarkup } from "react-dom/server";
import App from "./App";

describe("Iman portfolio", () => {
  it("renders the primary identity and portfolio navigation", () => {
    const markup = renderToStaticMarkup(<App />);
    expect(markup).toContain("Building software");
    expect(markup).toContain('src="/images/steampunk-skull.png"');
    expect(markup).toContain('alt=""');
    expect(markup).toContain('aria-label="Main navigation"');
    expect(markup).toContain('href="#experience"');
  });

  it("renders the selected personal project and engineering notes section", () => {
    const markup = renderToStaticMarkup(<App />);
    expect(markup).toContain("Qraft");
    expect(markup).toContain("local-first digital toolbox");
    expect(markup).toContain("https://qraft-9y9.pages.dev/");
    expect(markup).toContain("https://github.com/imandodo01/Qraft");
    expect(markup).not.toContain("<span>React</span>");
    expect(markup).toContain('src="/images/portofolio-qraft.png"');
    expect(markup).toContain('alt="Qraft application interface showing its QR code and vCard tools"');
    expect(markup).toContain("ENGINEERING NOTES");
  });
});
