
export function buildFrequencyTable(text) {
  const table = new Map();

  for (const char of text) {
    table.set(char, (table.get(char) || 0) + 1);
  }
  return table;
}