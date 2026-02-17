import { buildFrequencyTable } from "../src/frequency.js";

test("counts character frequency correctly", () => {
  const text = "aaabbc";

  const table = buildFrequencyTable(text);

  expect(table.get("a")).toBe(3);
  expect(table.get("b")).toBe(2);
  expect(table.get("c")).toBe(1);
});
