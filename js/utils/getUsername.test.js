import { getUsername } from "./storage.js";
import { describe, it, expect, beforeEach } from "vitest";

describe("getUsername", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it("returns the name from the user object in storage", () => {
    const user = { name: "Peter Pan" };
    localStorage.setItem("user", JSON.stringify(user));
    expect(getUsername()).toBe("Peter Pan");
  });

  it("returns null when no user exists in storage", () => {
    expect(getUsername()).toBe(null);
  });
});
