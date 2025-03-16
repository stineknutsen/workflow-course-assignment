import { isActivePath } from "./userInterface.js";
import { describe, it, expect } from "vitest";

describe("isActivePath", () => {
  it("returns true when current path matches href exactly", () => {
    const href = "/login";
    const currentPath = "/login";
    expect(isActivePath(href, currentPath)).toBe(true);
  });

  it("returns true for root path ('/') when path is '/' or '/index.html'", () => {
    const href = "/";
    const currentPath = "/index.html";
    expect(isActivePath(href, currentPath)).toBe(true);
  });

  it("returns true when current path includes href", () => {
    const href = "/venue";
    const currentPath = "/venue/?id=1";
    expect(isActivePath(href, currentPath)).toBe(true);
  });

  it("returns false when paths don't match", () => {
    const href = "/login";
    const currentPath = "/register";
    expect(isActivePath(href, currentPath)).toBe(false);
  });
});
