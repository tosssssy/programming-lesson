import { addGenderProperty, convertToWareki, drawUntil21, factorial } from ".";

describe("Lesson 6", () => {
  test.skip("西暦の配列を入力すると、和暦の配列に変換されること", () => {
    expect(
      convertToWareki([
        1868, 1911, 1912, 1925, 1926, 1988, 1989, 2018, 2019, 2022,
      ])
    ).toStrictEqual([
      {
        nengo: "meiji",
        year: 1,
      },
      {
        nengo: "meiji",
        year: 44,
      },
      {
        nengo: "taisho",
        year: 1,
      },
      {
        nengo: "taisho",
        year: 14,
      },
      {
        nengo: "showa",
        year: 1,
      },
      {
        nengo: "showa",
        year: 63,
      },
      {
        nengo: "heisei",
        year: 1,
      },
      {
        nengo: "heisei",
        year: 30,
      },
      {
        nengo: "reiwa",
        year: 1,
      },
      {
        nengo: "reiwa",
        year: 4,
      },
    ]);
    expect(() => convertToWareki([1867])).toThrowError(
      "対応していない西暦の範囲が含まれています。"
    );
  });

  test.skip("number型の配列を渡し、0番目から順に引いて合計数が21以上になったら処理を中断して引いたカードの配列が返ってくること", () => {
    expect(drawUntil21([3, 4, 5, 6, 7, 8])).toStrictEqual([3, 4, 5, 6, 7]);
    expect(drawUntil21([10, 10, 1, 1])).toStrictEqual([10, 10, 1]);
    expect(() => drawUntil21([1, 2, 3, 4])).toThrowError(
      "引けるカードなくなりました。"
    );
  });

  test.skip("User型の配列とGender型の配列を渡し、User型に新たにgenderプロパティを追加した配列が返ってくること", () => {
    const users = [
      {
        name: "sato",
        age: 28,
      },
      {
        name: "suzuki",
        age: 22,
      },
    ];
    expect(addGenderProperty(users, ["male", "female"])).toStrictEqual([
      {
        name: "sato",
        age: 28,
        gender: "male",
      },
      {
        name: "suzuki",
        age: 22,
        gender: "female",
      },
    ]);

    // usersが破壊的操作をされていないこと
    expect(users).toStrictEqual([
      {
        name: "sato",
        age: 28,
      },
      {
        name: "suzuki",
        age: 22,
      },
    ]);
    expect(() => addGenderProperty(users, ["male"])).toThrowError(
      "入力データの配列の長さが異なります。"
    );
  });

  test.skip("引数で受け取った数値の階乗が返ってくること", () => {
    expect(factorial(3)).toBe(6);
    expect(factorial(10)).toBe(3628800);
  });
});
