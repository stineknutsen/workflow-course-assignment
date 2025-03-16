import { isActivePath } from "./userInterface.js";
import { describe, it, expect } from "vitest";

describe("isActivePath", () => {
  // test 1: return true when current path matches href exactly
  it("returns true when current path matches href exactly", () => {
    const href = "/login";
    const currentPath = "/login";
    expect(isActivePath(href, currentPath)).toBe(true);
  });

  // test 2: return true for root path ("/") when path is "/" or " "/index.html"
  it("returns true for root path ('/') when path is '/' or '/index.html'", () => {
    const href = "/";
    const currentPath = "/index.html";
    expect(isActivePath(href, currentPath)).toBe(true);
  });

  // test 3: return true when current path includes href
  it("returns true when current path includes href", () => {
    const href = "/venue";
    const currentPath = "/venue/?id=1";
    expect(isActivePath(href, currentPath)).toBe(true);
  });

  // test 4: return false when paths don't match
  it("returns false when paths don't match", () => {
    const href = "/login";
    const currentPath = "/register";
    expect(isActivePath(href, currentPath)).toBe(false);
  });
});
