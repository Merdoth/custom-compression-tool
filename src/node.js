export class Node {
  constructor(char, freq, left = null, right = null) {
    this.char = char; // Character stored in the node
    this.freq = freq; // Frequency of the character
    this.left = left; // Left child node
    this.right = right; // Right child node 
  }

  isLeaf() {
    return !this.left && !this.right;
  }
}