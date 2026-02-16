
export function encodeTree(node) {
  if (node.isLeaf()) {
    return "1" + node.char;
  }

  return "0" + encodeTree(node.left) + encodeTree(node.right);
}
