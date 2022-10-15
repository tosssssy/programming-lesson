import { getAges, getTwoAges, getUser, pushUser, User } from ".";

describe("Lesson 4", () => {
  /* (1) オブジェクト型の値を返す関数を実装してみよう */
  test.skip("関数 getUser が オブジェクト型（User 型）を返すこと", () => {
    const user = getUser("tanaka", 25);
    expect(user).toStrictEqual({
      name: "tanaka",
      age: 25,
    });
  });

  /* (2) 配列型を返す関数を実装してみよう */
  test.skip("関数 getTwoAges が number 型の配列を返すこと", () => {
    const user = getTwoAges(25, 28);
    expect(user).toStrictEqual([25, 28]);
  });

  /* (3) 複数の number 型を格納して配列を返す関数を実装してみよう */
  test.skip("関数 getAges が複数の number 型の値を受け取り、配列として返すこと", () => {
    // const user = getAges(25, 28);
    // expect(user).toStrictEqual([25, 28]);
  });

  /* (4) User 型の配列に User 型のオブジェクトを Immutable に追加する関数を実装してみよう */
  test.skip("関数 getAges が複数の number 型の値を受け取り、配列として返すこと", () => {
    const users: Array<User> = [
      {
        name: "tanaka",
        age: 25,
      },
      {
        name: "sato",
        age: 28,
      },
    ];
    const result = pushUser(users, {
      name: "suzuki",
      age: 22,
    });
    // もとのusersが変化していないこと
    expect(users).toStrictEqual([
      {
        name: "tanaka",
        age: 25,
      },
      {
        name: "sato",
        age: 28,
      },
    ]);
    // pushUserで受け取った結果に第二引数のユーザーが追加されていること
    expect(result).toStrictEqual([
      {
        name: "tanaka",
        age: 25,
      },
      {
        name: "sato",
        age: 28,
      },
      {
        name: "suzuki",
        age: 22,
      },
    ]);
  });
});
