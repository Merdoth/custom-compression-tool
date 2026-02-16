
import fs from "fs";

export function writeCompressed(filePath, treeData, bitBuffer, originalLength) {
  const treeBuffer = Buffer.from(treeData, "utf8");

  const header = Buffer.alloc(8);
  header.writeUInt32BE(treeBuffer.length, 0);
  header.writeUInt32BE(originalLength, 4);

  const output = Buffer.concat([header, treeBuffer, bitBuffer]);

  fs.writeFileSync(filePath, output);
}
