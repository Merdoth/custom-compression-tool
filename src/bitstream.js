
export function bitsToBuffer(bitString) {
  const bytes = [];

  for (let i = 0; i < bitString.length; i += 8) {
    const byte = bitString.slice(i, i + 8);
    bytes.push(parseInt(byte.padEnd(8, "0"), 2));
  }

  return Buffer.from(bytes);
}
