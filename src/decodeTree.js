import { Node } from "./node.js";

export function decodeTree(data) {
  let index = 0;

  function build() {
    if (data[index++] === "1") {
      const char = data[index++];
      return new Node(char, 0);
    }

    const left = build();
    const right = build();
    return new Node(null, 0, left, right);
  }

  return build();
}


// decodes a bitstream using the Huffman tree

export function decodeBits(buffer, tree, totalChars) {
  let result = "";
  let node = tree;

  for (const byte of buffer) {
    for (let i = 7; i >= 0; i--) {
      const bit = (byte >> i) & 1;
      node = bit === 0 ? node?.left : node?.right;

      if (node?.isLeaf()) {
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