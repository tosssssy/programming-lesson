import { quickSort } from ".";

describe("Lesson 11", () => {
  test("クイックソートによって数値がソートされること", () => {
    expect(quickSort([3, 5, 2, 4, 7, 1, 6])).toStrictEqual([
      1, 2, 3, 4, 5, 6, 7,
    ]);
  });
});
