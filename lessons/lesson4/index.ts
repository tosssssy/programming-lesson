export type User = {
  name: string;
  age: number;
};

export function getUser(name: string, age: number) {
  // 引数で渡されたnameとageをプロパティに持つUserオブジェクトを返すような実装をしてみましょう
}

export function getTwoAges(age1: number, age2: number) {
  // age1とage2を配列型にして返すような関数を実装してみましょう
}

export function getAges(/* 複数の引数を受け取れるようにしてみよう */) {
  // 引数をそのまま返そう
}

export function pushUser(users: Array<User>, user: User) {
  // 第一引数の配列の末尾に第二引数を加えて返す関数を実装してみましょう。
}
