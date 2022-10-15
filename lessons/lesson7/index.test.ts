import { simpleSort } from ".";

describe("Lesson 7", () => {
  test.skip("単純ソートによって数値がソートされること", () => {
    expect(simpleSort([3, 5, 2, 4, 7, 1, 6])).toStrictEqual([
      1, 2, 3, 4, 5, 6, 7,
    ]);
  });

  test("単純ソートによって数値がソートされること", () => {
    expect(simpleSort([3, 2, 4, 1])).toStrictEqual({
      result: [1, 2, 3, 4],
      histories: [
        [3, 2, 4, 1],
        [2, 3, 4, 1],
        [1, 3, 4, 2],
        [1, 2, 4, 3],
        [1, 2, 3, 4],
      ],
    });
  });
});
