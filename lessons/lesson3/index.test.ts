import { getNumber, getString } from ".";

describe("Lesson 3", () => {
  /* (1) 様々な型を使用した関数を作ってみよう */
  test.skip("関数 getNumber が number 型を返すこと", () => {
    expect(typeof getNumber() === "number").toBe(true);
  });

  test.skip("関数 getString が string 型を返すこと", () => {
    expect(typeof getString() === "string").toBe(true);
  });

  /* (2) リテラル型を意識した関数を作ってみよう */
  test.skip("関数 getPet が 'dog' というリテラルで評価され、型エラーが発生しないことと、実際の値がdogであること", () => {
    // const pet: Pet = getPet();
    // expect(pet).toBe("dog");
  });

  /* (3) リテラル型によってエディタ上で型補完ができることを確認しよう */
  test.skip("関数 getPetName の引数にPet型を渡すことで各Petに対応する値が返ってくること", () => {
    // expect(getPetName()).toBe("tama"); // getPetNameの引数部分にカーソルを合わせ、Command + i キーで型補完の候補が出ることを確認しよう
    // expect(getPetName()).toBe("pochi"); // 上記と同様に補完を使ってテストを完成させましょう
  });

  /* (4) 型変換を行って明示的に型を変換しよう */
  test.skip("関数 toUnixSeconds の引数に年月日を渡し、期待するUNIX時間（秒）が返ってくること", () => {
    // 2022年 10月 10日 を指定して 1665327600 が返ってくることを確認する
    // expect(toUnixSeconds(/* 引数を入力 */)).toBe(1665327600);
  });
});
