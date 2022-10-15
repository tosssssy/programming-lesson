export type Pet = "dog" | "cat";

export function getNumber() {
  // どのような値でも良いので、number型をreturnしてみましょう。
}

export function getString() {
  // どのような値でも良いので、string型をreturnしてみましょう。
}

export function getPet() {
  const pet = "dog"; // 型を指定しないと、petはstring型として定義されてしまう。Pet型として定義することで型を揃える。
  return pet;
}

export function getPetName(pet: Pet) {
  return pet === "dog" ? "pochi" : "tama";
}

/**
 * 年月日をUNIX時間（秒）に変換します。
 * @param {string} year - 年: 2022年 なら 2022
 * @param {string} month - 月: 10月 なら 10
 * @param {string} year - 日: 10日 なら 10
 * @return {number} - UNIX時間（秒）
 */
export function toUnixSeconds(year: number, month: number, date: number) {
  // 標準の組み込みクラス Date と getTime 関数を使ってUNIX時間を返す関数を実装しましょう。
}
