import { expect, test } from "vitest";
import App from "../src/App.vue";

test("mount component", async () => {
  expect(App).toBeTruthy();
});
