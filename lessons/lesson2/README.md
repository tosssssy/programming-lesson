# Lesson 2

作業前に feature/lesson2 というブランチを main から作成しましょう。

## (1) 変数を定義してみよう

関数内で変数を定義し、それを return してみましょう。

1. `lessons/lesson2/index.test.ts` を開いて、 skip されている 1 つ目のテストから `skip` を取る
1. `yarn test` を実行して、テストが失敗することを確認する。
1. `lessons/lesson2/index.ts` の内容を編集して、`1` を返す `getOne` 関数を完成させる。
1. `yarn test` を実行して、テストが通過することを確認する。

## (2) 変数で文字列を定義してみよう

今度は、文字列を定義して、それを return してみましょう。

1. `lessons/lesson2/index.test.ts` を開いて、 skip されている 2 つ目のテストから `skip` を取る
1. `yarn test` を実行して、テストが失敗することを確認する。
1. `lessons/lesson2/index.ts` の内容を編集して、`"Hello"` を返す `getHello` 関数を完成させる。
1. `yarn test` を実行して、テストが通過することを確認する。

## (3) 比較演算子を使ってみよう

関数 `add` で使用した `+` 演算子の他にも、いろいろな演算子があります。比較演算子を使って、与えられた数値が `100` より大きいかどうかを判断する関数を作成してみましょう。

1. `lessons/lesson2/index.test.ts` を開いて、 skip されている 3 つ目のテストから `skip` を取る
1. `yarn test` を実行して、テストが失敗することを確認する。
1. `lessons/lesson2/index.ts` の内容を編集して、 `true` か `false` を返す `isOver100` 関数を完成させる。
1. `yarn test` を実行して、テストが通過することを確認する。

## (4) 変数によって演算子の挙動が代わることを確認しよう

同じ演算子でも、扱う変数によっては挙動が変化します。文字列と数値を足し合わせて、どのような挙動になるかを確認し、ユニットテストを完成させましょう。

1. `lessons/lesson2/index.ts` を開く。
1. `plus` 関数の内容を確認する。
1. `lessons/lesson2/index.test.ts` を開く。
1. (4) に該当するテストコードの skip 部分を削除し、活性化する。
1. (4) に該当するテストコードのコメントアウトを削除し、活性化する。
1. 活性化した行の `toBe` 関数の引数に、予想される結果を記述する。
1. `yarn test` を実行して、テストが通過することを確認する。

## (5) (1)〜(4)の内容を git で commit し、 push して Pull Request を作成してみましょう。

作業が終わったら、Lesson 1 と同様に GitHub に push してメンターにレビューを依頼してください。

1. CLI から `git add .` と入力し、作業したファイルを commit する
1. CLI から `git push origin feature/lesson-2` と入力し、push する
1. GitHub から、Create Pull Request を選択
1. Pull Request を作成し、やったことと動作確認項目を記述する
