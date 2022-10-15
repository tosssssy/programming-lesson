import { bubbleSort, bubbleSortWithHistories } from ".";

describe("Lesson 8", () => {
  test.skip("バブルソートによって数値がソートされること", () => {
    expect(bubbleSort([3, 5, 2, 4, 7, 1, 6])).toStrictEqual([
      1, 2, 3, 4, 5, 6, 7,
    ]);
  });

  test("バブルソートによって数値がソートされること", () => {
    expect(bubbleSortWithHistories([3, 2, 4, 1])).toStrictEqual({
      result: [1, 2, 3, 4],
      histories: [
        [3, 2, 4, 1],
        [2, 3, 4, 1],
        [2, 3, 1, 4],
        [2, 1, 3, 4],
        [1, 2, 3, 4],
      ],
    });
  });
});
