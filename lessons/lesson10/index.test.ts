import { heapSort, heapSortWithHistories } from ".";

describe("Lesson 10", () => {
  test.skip("ヒープソートによって数値がソートされること", () => {
    expect(heapSort([3, 5, 2, 4, 7, 1, 6])).toStrictEqual([
      1, 2, 3, 4, 5, 6, 7,
    ]);
  });

  test.skip("ヒープソートによって数値がソートされること", () => {
    expect(heapSortWithHistories([8, 2, 7, 6, 9, 1, 4, 3, 5])).toStrictEqual({
      result: [1, 2, 3, 4, 5, 6, 7, 8, 9],
      histories: [
        [8, 2, 7, 6, 9, 1, 4, 3, 5],
        [5, 8, 7, 6, 2, 1, 4, 3],
        [3, 6, 7, 5, 2, 1, 4],
        [3, 6, 4, 5, 2, 1],
        [1, 5, 4, 3, 2],
        [2, 3, 4, 1],
        [1, 3, 2],
        [2, 1],
        [1],
      ],
    });
  });
});
