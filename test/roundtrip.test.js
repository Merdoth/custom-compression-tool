import { buildFrequencyTable } from "../src/frequency.js";
import { buildTree } from "../src/tree.js";
import { generateCodes } from "../src/codes.js";
import { encodeText } from "../src/encodeText.js";
import { encodeTree } from "../src/encodeText.js";
import { decodeTree } from "../src/decodeTree.js";
import { decodeBits } from "../src/decodeTree.js";
import { bitsToBuffer } from "../src/bitstream.js";


test("encodes and decodes text correctly", () => {
  const text = "this is a huffman test";

  const freq = buildFrequencyTable(text);
  const tree = buildTree(freq);
  const codes = generateCodes(tree);

  const encodedBits = encodeText(text, codes);
  const buffer = bitsToBuffer(encodedBits);

  const treeData = encodeTree(tree);
  const rebuiltTree = decodeTree(treeData);

  const decoded = decodeBits(buffer, rebuiltTree, text.length);

  expect(decoded).toBe(text);
});
