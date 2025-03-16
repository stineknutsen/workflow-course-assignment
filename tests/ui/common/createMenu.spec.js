import { test, expect } from "@playwright/test";

test.describe("navigation", () => {
  test("user can navigate from the home page to a venue details page", async ({
    page,
  }) => {
    // Navigates to home page
    await page.goto("/");

    //Waits for the venue list to load
    await page.waitForSelector("#venue-container");

    //Clicks the first venue
    await page.locator("#venue-container a").first().click();

    //Verifies that when the venue details page loads there are the words “Venue details” in the heading
    await expect(page.locator("h1")).toContainText("Venue details");
  });
});
