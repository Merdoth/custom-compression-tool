import { buildTree } from "../src/tree.js";
import { buildFrequencyTable } from "../src/frequency.js";
import { generateCodes } from "../src/codes.js";

test("generates prefix-free codes", () => {
  const text = "aaabbc";

  const freq = buildFrequencyTable(text);
  const tree = buildTree(freq);
  const codes = generateCodes(tree);

  const values = Object.values(codes);

  // Ensure no code is prefix of another
  for (let i = 0; i < values.length; i++) {
    for (let j = 0; j < values.length; j++) {
      if (i !== j) {
        expect(values[j].startsWith(values[i])).toBe(false);
      }
    }
  }
});
