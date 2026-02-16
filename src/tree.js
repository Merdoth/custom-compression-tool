import { Node } from "./node";


export function buildTree(freqTable) {
  const nodes = [];

  for (const [char, freq] of freqTable) {
    nodes.push(new Node(char, freq));
  }

  while (nodes.length > 1) {
    nodes.sort((a, b) => a.freq - b.freq);
    
    const left = nodes.shift();
    const right = nodes.shift();

    const parent = new Node(null, left.freq + right.freq, left, right);

    nodes.push(parent);
  }

  return nodes[0]; // The root of the Huffman tree
}