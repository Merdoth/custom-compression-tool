
export function encodeText(text, codeTable) {
  let bitString = "";

  for (const char of text) {
    bitString += codeTable[char];
  }

  return bitString;
}


// encodes a Huffman tree to a string format

export function encodeTree(node) {
  if (node.isLeaf()) {
    return "1" + node.char;
  }

  return "0" + encodeTree(node.left) + encodeTree(node.right);
}
