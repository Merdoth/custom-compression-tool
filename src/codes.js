
export function generateCodes(node, prefix = "", table = {}) {
  if (node.isLeaf()) {
    table[node.char] = prefix || "0";
    return table;
  }

  generateCodes(node.left, prefix + "0", table);
  generateCodes(node.right, prefix + "1", table);

  return table;
}
