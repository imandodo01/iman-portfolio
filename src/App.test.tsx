import { describe, expect, it } from "vitest";
import { renderToStaticMarkup } from "react-dom/server";
import App from "./App";

describe("Iman portfolio", () => {
  it("presents Iman before selected work", () => {
    const markup = renderToStaticMarkup(<App />);
    expect(markup.indexOf("I’m Iman.")).toBeLessThan(markup.indexOf("Qraft"));
    expect(markup).toContain("PERSONAL ENGINEERING JOURNAL");
    expect(markup).toContain("data-reveal");
    expect(markup).toContain("iman.dodo01@gmail.com");
    expect(markup).toContain("https://www.linkedin.com/in/iman-sujatmiko/");
    expect(markup).toContain('id="contact"');
    expect(markup).toContain("TECHNICAL TOOLKIT");
    expect(markup).toContain("HOW I THINK");
    expect(markup).toContain("WHAT I BUILD");
    expect(markup).toContain("WHAT DRIVES ME");
    expect(markup).toContain("removes everyday friction");
    expect(markup).toContain("game development");
    expect(markup).toContain("PHP · Laravel · Node.js");
    expect(markup).toContain("React Native");
    expect(markup).toContain("MySQL · SQL Server");
    expect(markup).toContain('aria-label="Main navigation"');
    expect(markup).toContain('aria-label="Collapse sidebar"');
    expect(markup).toContain('src="/images/steampunk-skull.png"');
  });

  it("keeps Qraft accurate and does not invent note articles", () => {
    const markup = renderToStaticMarkup(<App />);
    expect(markup).toContain("local-first digital toolbox");
    expect(markup).toContain("https://qraft-9y9.pages.dev/");
    expect(markup).toContain("https://github.com/imandodo01/Qraft");
    expect(markup).toContain('src="/images/portofolio-qraft.png"');
    expect(markup).not.toContain("NO ARTICLES PUBLISHED YET");
    expect(markup).not.toContain('href="#notes"');
    expect(markup).not.toContain("3+ Years");
  });

  it("presents AI Engineering Standard as an engineering resource, not an application", () => {
    const markup = renderToStaticMarkup(<App />);
    expect(markup).toContain("AI Engineering Standard");
    expect(markup).toContain("ENGINEERING METHODOLOGY · DEVELOPER RESOURCE");
    expect(markup).toContain("framework-agnostic set of guidelines");
    expect(markup).toContain("https://github.com/imandodo01/ai-engineering-standard");
    expect(markup).not.toContain("AI Engineering Standard</h3></div><div class");
  });
});
