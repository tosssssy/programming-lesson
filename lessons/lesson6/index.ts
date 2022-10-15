export type Wareki = {
  nengo: "meiji" | "taisho" | "showa" | "heisei" | "reiwa";
  year: number;
};

export type User = {
  name: string;
  age: number;
  gender?: "male" | "female";
};

export function convertToWareki(years: Array<number>) {
  // ここに配列で受け取った西暦を、それぞれ和暦に変換する関数を実装してみましょう。
}

export function drawUntil21(cards: Array<number>) {
  // 数字の書かれたカードを引いていき、カードに書かれている数字の合計数が 21 以上になったらカードを引くのをやめて引いたカードの数字を出力する関数を実装してみましょう。
  // カードが無くなった場合も処理を中断し、「引けるカードなくなりました。」というエラーメッセージと共に例外をスローしましょう。
  // 返却する値はArray<number>とします。
}

export function addGenderProperty(
  users: Array<User>,
  genders: Array<User["gender"]>
) {
  // User型の配列とGender型の配列を渡し、User型に新たにgenderプロパティを追加した配列が返ってくること
  // 第一引数と第二引数の長さが違う場合は、「入力データの配列の長さが異なります。」というエラーメッセージの例外をスローすること
}

export function factorial(value: number) {
  // まずは value で渡された数値を1ずつ減らした number 型の配列を作りましょう。
  // 次に、values.reduce で数値同士をかけ合わせていき、最終的な階乗の値を計算してみましょう。
}
