import { selectionSort, selectionSortWithHistories } from ".";

describe("Lesson 9", () => {
  test.skip("選択ソートによって数値がソートされること", () => {
    expect(selectionSort([3, 5, 2, 4, 7, 1, 6])).toStrictEqual([
      1, 2, 3, 4, 5, 6, 7,
    ]);
  });

  test.skip("選択ソートによって数値がソートされること", () => {
    expect(selectionSortWithHistories([3, 2, 4, 1])).toStrictEqual({
      result: [1, 2, 3, 4],
      histories: [
        [3, 2, 4, 1],
        [1, 2, 4, 3],
        [1, 2, 3, 4],
      ],
    });
  });
});
