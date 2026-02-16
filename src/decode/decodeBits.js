export function decodeBits(buffer, tree, totalChars) {
  let result = "";
  let node = tree;

  for (const byte of buffer) {
    for (let i = 7; i >= 0; i--) {
      const bit = (byte >> i) & 1;
      node = bit === 0 ? node.left : node.right;

      if (node.isLeaf()) {
        result += node.char;
        node = tree;

        if (result.length === totalChars) {
          return result;
        }
      }
    }
  }

  return result;
}
