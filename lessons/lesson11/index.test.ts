import { quickSort, quickSortWithHistories } from ".";

describe("Lesson 11", () => {
  test.skip("クイックソートによって数値がソートされること", () => {
    expect(quickSort([3, 5, 2, 4, 7, 1, 6])).toStrictEqual([
      1, 2, 3, 4, 5, 6, 7,
    ]);
  });

  test("クイックソートによって数値がソートされること", () => {
    expect(quickSortWithHistories([3, 2, 4, 1])).toStrictEqual({
      result: [1, 2, 3, 4],
      histories: [
        [3, 2, 4, 1],
        [1, 2, 4, 3],
        [1, 2, 3, 4],
      ],
    });
  });
});
