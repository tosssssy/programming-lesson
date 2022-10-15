# Lesson 5

作業前に feature/lesson5 というブランチを main から作成しましょう。

## (1) if 文を使って条件分岐をする関数を実装してみよう

if 文を使うことで関数の処理を分岐させることができます。年齢を引数で渡し、成人済みかどうかを返す関数を if 文を使用して実装してみましょう。

1. `lessons/lesson5/index.test.ts` を開いて、 skip されている 1 つ目のテストから `skip` を取る。
1. `yarn test` を実行して、テストが失敗することを確認する。
1. `lessons/lesson5/index.ts` の内容を編集して、boolean 型を返す `isAdult` 関数を完成させる。
1. `yarn test` を実行して、テストが通過することを確認する。

## (2) switch 文を使って条件分岐をする関数を実装してみよう

switch 文を使うことで関数の処理をケースごとに分けて記述し、分岐させることができます。じゃんけんで勝つ手を返すプログラムを、switch 文で実装してみましょう。

1. `lessons/lesson5/index.test.ts` を開いて、 skip されている 2 つ目のテストから `skip` を取る。
1. `yarn test` を実行して、テストが失敗することを確認する。
1. `lessons/lesson5/index.ts` の内容を編集して、Card 型を返す `getWinCard` 関数を完成させる。
1. `yarn test` を実行して、テストが通過することを確認する。

## (3) 正規表現を使用して全角ひらがな、全角カタカナ、半角英数字を分類する関数を実装してみよう

引数で文字列を渡し、正規表現を使用して全角ひらがな、全角カタカナ、半角英数字を分類する関数を実装してみましょう。その際、1 文字の長さ以外の入力は例外として扱いましょう。

1. `lessons/lesson5/index.test.ts` を開いて、 skip されている 3 つ目のテストから `skip` を取る。
1. `yarn test` を実行して、テストが失敗することを確認する。
1. `lessons/lesson5/index.ts` の内容を編集して、string 型の配列を返す `getCharacterType` 関数を完成させる。
1. `yarn test` を実行して、テストが通過することを確認する。

## (4) (1)〜(3)の内容を git で commit し、 push して Pull Request を作成してみましょう。

作業が終わったら、GitHub に push してメンターにレビューを依頼してください。

1. CLI から `git checkout -b feature/lesson-1` と入力し、ブランチを作成する
1. CLI から `git add .` と入力し、作業したファイルを commit する
1. CLI から `git push origin feature/lesson-1` と入力し、push する
1. GitHub から、Create Pull Request を選択
1. Pull Request を作成し、やったことと動作確認項目を記述する

## (5) (3)で作成した関数をコピーし、InputError というカスタムエラーを作成してそれを例外としてスローする関数に作り変えましょう。

1. `lessons/lesson5/index.test.ts` を開く。
1. (4) に該当するテストコードの skip 部分を削除し、活性化する。
1. コメントアウトを削除し、活性化して引数を記述する
1. `lessons/lesson5/index.ts` を開く。
1. 標準の組み込みクラス Date と getTime 関数を使って UNIX 時間を返す関数を実装する。
1. `yarn test` を実行して、テストが通過することを確認する。

## (6) (1)〜(4)の内容を git で commit し、 push して Pull Request を作成してみましょう。

作業が終わったら、新しいブランチを作成して GitHub に push し、メンターにレビューを依頼してください。

1. CLI から `git add .` と入力し、作業したファイルを commit する
1. CLI から `git push origin feature/lesson-5` と入力し、push する
1. GitHub から、Create Pull Request を選択
1. Pull Request を作成し、やったことと動作確認項目を記述する
