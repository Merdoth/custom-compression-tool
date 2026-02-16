
import fs from "fs";

export function writeCompressed(filePath, treeData, bitBuffer) {
  const header = Buffer.from(treeData.length + "\n" + treeData);
  const output = Buffer.concat([header, bitBuffer]);

  fs.writeFileSync(filePath, output);
}
