import { getHello, getOne, isOver100, plus } from "./index";

describe("Lesson 2", () => {
  /* (1) 変数を定義してみよう */
  test.skip("関数 getOne が 1 を返すこと", () => {
    expect(getOne()).toBe(1);
  });

  /* (2) 変数で文字列を定義してみよう */
  test.skip("関数 getHello が 'Hello' を返すこと", () => {
    expect(getHello()).toBe("Hello");
  });

  /* (3) 四則演算をしてみよう */
  test.skip("関数 isOver100 が、100以上の値を渡された時に true を返すこと", () => {
    expect(isOver100(99)).toBe(false);
    expect(isOver100(100)).toBe(true);
    expect(isOver100(101)).toBe(true);
  });

  /* (4) 変数によって演算子の挙動が代わることを確認しよう */
  test.skip("関数 plus が数値と文字列を渡された時の演算結果が正しいこと", () => {
    // expect(plus(1, "1")).toBe(/* ここに 1 と "1" を plus 関数に渡した際に出力される結果を記述しましょう */);
  });
});
