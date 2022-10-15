import {
  getCharacterType,
  getCharacterTypeWithInputError,
  getWinCard,
  InputError,
  isAdult,
} from ".";

describe("Lesson 5", () => {
  /* (1) オブジェクト型の値を返す関数を実装してみよう */
  test.skip("18歳以上で成人済み、17歳以下で未成年であることを示すboolean型の値が返ってくること", () => {
    expect(isAdult(18)).toBe(true);
    expect(isAdult(17)).toBe(false);
  });

  /* (2) switch 文を使って条件分岐をする関数を実装してみよう */
  test.skip("じゃんけんの手を入力すると、それに対して勝つことのできる手がCard型の値で返ってくること", () => {
    expect(getWinCard("stone")).toBe("paper");
    expect(getWinCard("scissors")).toBe("stone");
    expect(getWinCard("paper")).toBe("scissors");
  });

  /* (3) 正規表現を使用して全角ひらがな、全角カタカナ、半角英数字を分類する関数を実装してみよう */
  test.skip("文字列を入力すると、全角ひらがな、全角カタカナ、半角英数字のどれかに分類されること", () => {
    expect(getCharacterType("A")).toBe("alphabets_and_numbers");
    expect(getCharacterType("ア")).toBe("zenkaku_katakana");
    expect(getCharacterType("あ")).toBe("zenkaku_hiragana");
    expect(() => getCharacterType("漢")).toThrowError("分類できませんでした。");
    expect(() => getCharacterType("123")).toThrowError(
      "文字数は1文字以下にしてください。"
    );
  });

  /* (5) 正規表現を使用して全角ひらがな、全角カタカナ、半角英数字を分類する関数を実装してみよう */
  test.skip("文字列を入力すると、全角ひらがな、全角カタカナ、半角英数字のどれかに分類されること", () => {
    expect(getCharacterTypeWithInputError("A")).toBe("alphabets_and_numbers");
    expect(getCharacterTypeWithInputError("ア")).toBe("zenkaku_katakana");
    expect(getCharacterTypeWithInputError("あ")).toBe("zenkaku_hiragana");
    expect(() => getCharacterType("漢")).toThrowError("分類できませんでした。");
    expect(() => getCharacterTypeWithInputError("123")).toThrow(InputError);
    expect(() => getCharacterTypeWithInputError("漢")).toThrowError(
      "文字数は1文字以下にしてください。"
    );
  });
});
