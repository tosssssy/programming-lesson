export type Card = "stone" | "scissors" | "paper";

export type CharacterType =
  | "zenkaku_hiragana"
  | "zenkaku_katakana"
  | "alphabets_and_numbers";

export function isAdult(age: number) {
  // 引数で渡された年齢をもとに、成人していればtrue、そうでなければfalseを返す関数を実装してみましょう。
}

export function getWinCard(card: Card) {
  // 引数で受け取ったカードに対して、じゃんけんで勝てるCard型の値を返しましょう。
}

export function getCharacterType(character: string) {
  /**
   * ユニットテストが通るように、要件を満たす関数を実装しましょう。
   * - 文字列を入力すると、全角ひらがな、全角カタカナ、半角英数字のどれかに分類されること
   * - それ以外を入力すると「分類できませんでした。」というエラーメッセージを返す例外をスローすること
   * - 1文字以上を入力すると「文字数は1文字以下にしてください。」というエラーメッセージを返す例外をスローすること
   */
}

export class InputError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "InputError";
  }
}

export function getCharacterTypeWithInputError(character: string) {
  /**
   * ユニットテストが通るように、要件を満たす関数を実装しましょう。
   * - 文字列を入力すると、全角ひらがな、全角カタカナ、半角英数字のどれかに分類されること
   * - それ以外を入力すると「分類できませんでした。」というエラーメッセージを返す例外をスローすること
   * - 1文字以上を入力すると「文字数は1文字以下にしてください。」というエラーメッセージを返す例外をスローすること
   */
  throw new InputError("文字数は1文字以下にしてください。");
}
