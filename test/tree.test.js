import { buildTree } from "../src/tree.js";
import { buildFrequencyTable } from "../src/frequency.js";

test("builds a tree with correct total frequency", () => {
  const text = "aaabbc";
  const freq = buildFrequencyTable(text);

  const tree = buildTree(freq);

  expect(tree.freq).toBe(text.length);
});
