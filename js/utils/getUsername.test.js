import { getUsername } from "storage.js";
import { describe, it, expect, beforeEach } from "vitest";

describe("getUsername", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  // test 1: returns the name from the user object in storage (first save user object to storage)
  it("returns the name from the user object in storage", () => {
    const user = { name: "Peter Pan" };
    localStorage.setItem("user", JSON.stringify(user));
    expect(getUsername()).toBe("Peter Pan");
  });

  // test 2: returns null when no user exists in storage
  it("returns null when no user exists in storage", () => {
    expect(getUsername()).toBe(null);
  });
});
