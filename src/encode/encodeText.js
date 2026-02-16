
export function encodeText(text, codeTable) {
  let bitString = "";

  for (const char of text) {
    bitString += codeTable[char];
  }

  return bitString;
}
