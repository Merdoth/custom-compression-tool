#!/usr/bin/env node
import fs from "fs";
import { buildFrequencyTable } from "./frequency.js";
import { buildTree } from "./tree.js";
import { generateCodes } from "./codes.js";
import { encodeText } from "./encodeText.js";
import { writeCompressed } from "./fileFormat.js";
import { bitsToBuffer } from "./bitstream.js";
import { encodeTree } from "./encodeTree.js";
import { bitsToBuffer } from "./bitstream.js";
// CLI entry point for the custom compression tool

const inputFile = process.argv[2];
const outputFile = process.argv[3];

if (!inputFile) {
  console.error("Usage: node cli.js input.txt output.huff");
  process.exit(1);
}

const text = fs.readFileSync(inputFile, "utf8");

const freq = buildFrequencyTable(text);
const tree = buildTree(freq);
const codes = generateCodes(tree);
const treeData = encodeTree(tree);
const encodedBits = encodeText(text, codes);
const buffer = bitsToBuffer(encodedBits);

writeCompressed(outputFile, treeData, buffer, text.length);
