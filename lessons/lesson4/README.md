# Lesson 5

作業前に feature/lesson4 というブランチを main から作成しましょう。

## (1) オブジェクト型の値を返す関数を実装してみよう

オブジェクト型とは、プロパティを持つ変数です。name と age をプロパティに持つ User 型を返す関数を定義してみましょう。

1. `lessons/lesson4/index.test.ts` を開いて、 skip されている 1 つ目のテストから `skip` を取り、コメントアウトを活性化させる。
1. `yarn test` を実行して、テストが失敗することを確認する。
1. `lessons/lesson4/index.ts` の内容を編集して、User 型を返す `getUser` 関数を完成させる。
1. `yarn test` を実行して、テストが通過することを確認する。

## (2) 配列型を返す関数を実装してみよう

配列型とは、複数の変数を内部に保持する変数です。number 型を複数持つ配列を返す関数を定義してみましょう。

1. `lessons/lesson4/index.test.ts` を開いて、 skip されている 2 つ目のテストから `skip` を取る
1. `yarn test` を実行して、テストが失敗することを確認する。
1. `lessons/lesson4/index.ts` の内容を編集して、number 型の配列を返す `getTwoAges` 関数を完成させる。
1. `yarn test` を実行して、テストが通過することを確認する。

## (3) 複数の number 型を格納して配列を返す関数を実装してみよう

複数の引数を渡し、引数をそのまま return して配列型の値が返ってくることを確認してみましょう。

1. `lessons/lesson4/index.test.ts` を開いて、 skip されている 3 つ目のテストから `skip` を取り、コメントアウトも活性化させる
1. エディタ上で型エラーが発生することを確認する
1. `lessons/lesson4/index.ts` の内容を編集して、number 型の配列を返す `getAges` 関数を完成させる。
1. `yarn test` を実行して、テストが通過することを確認する。

## (4) User 型の配列に User 型のオブジェクトを Immutable に追加する関数を実装してみよう

オブジェクト型と配列型を組み合わせて、User 型の配列に User 型のオブジェクトを Immutable に追加する関数を実装してみましょう。この時、渡した配列を破壊的に操作しないようにしてください。

1. `lessons/lesson4/index.test.ts` を開く。
1. (4) に該当するテストコードの skip 部分を削除し、活性化する。
1. コメントアウトを削除し、活性化して引数を記述する
1. `lessons/lesson4/index.ts` を開く。
1. 標準の組み込みクラス Date と getTime 関数を使って UNIX 時間を返す関数を実装する。
1. `yarn test` を実行して、テストが通過することを確認する。

## (5) (1)〜(4)の内容を git で commit し、 push して Pull Request を作成してみましょう。

作業が終わったら、Lesson 1 と同様に GitHub に push してメンターにレビューを依頼してください。

1. CLI から `git add .` と入力し、作業したファイルを commit する
1. CLI から `git push origin feature/lesson-4` と入力し、push する
1. GitHub から、Create Pull Request を選択
1. Pull Request を作成し、やったことと動作確認項目を記述する
