import { add } from "./index";
// import { hello } from "./index"; // (4) で使用します。

describe("Lesson 1", () => {
  /* (1) 関数を実装してみよう */
  test("関数addに対し、1と2を渡して3が得られること", () => {
    expect(add(1, 2)).toBe(3);
  });

  /* (2) テストコードで skip されている項目を活性化しよう */
  // (1) のテストコードのように .skip を削除し、テストを実行してください。
  test.skip("関数addに対し、2と3を渡して5が得られること", () => {
    expect(add(2, 3)).toBe(5);
  });

  /* (3) 自分でテストコードを追加してみよう */
  // この行のコメントを消して、自分でテストコードを追加してみましょう。

  /* (4) 引数のない関数を追加してみよう */
  test.skip("hello関数から Hello, world! という文字列が得られること", () => {
    // expect(hello()).toBe("Hello, world!");
  });
});
