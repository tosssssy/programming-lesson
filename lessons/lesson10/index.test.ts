import { heapSort, heapSortWithHistories } from ".";

describe("Lesson 10", () => {
  test.skip("ヒープソートによって数値がソートされること", () => {
    expect(heapSort([3, 5, 2, 4, 7, 1, 6])).toStrictEqual([
      1, 2, 3, 4, 5, 6, 7,
    ]);
  });

  test("ヒープソートによって数値がソートされること", () => {
    expect(heapSortWithHistories([3, 2, 4, 1])).toStrictEqual({
      result: [1, 2, 3, 4],
      histories: [
        [3, 2, 4, 1],
        [1, 2, 4, 3],
        [1, 2, 3, 4],
      ],
    });
  });
});
