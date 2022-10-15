export function convertToBinaryNumber(decimalNumber: number) {
  return parseInt(decimalNumber.toString(), 10).toString(2);
}

export function convertToBinaryNumberWithoutParseIntAndToString(
  decimalNumber: number
) {
  // 2進数は、2のべき乗を足し合わせて表すことができます。
  // フローチャートなどを作成し、while文やfor文、文字列の足し算などで一つずつ実装していきましょう。
}
