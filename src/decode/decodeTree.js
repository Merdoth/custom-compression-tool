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
