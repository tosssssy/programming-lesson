# Lesson 11

作業前に feature/lesson11 というブランチを main から作成しましょう。

## (1) クイックソートを実装してみましょう

number 型の配列を引数にクイックソートを実装してみましょう。基準値は、配列の中央の値とします。配列の長さが偶数の場合は、右側を基準値とします。

1. `lessons/lesson11/index.test.ts` を開いて、 skip されている 1 つ目のテストから `skip` を取る。
1. `yarn test` を実行して、テストが失敗することを確認する。
1. `lessons/lesson11/index.ts` の内容を編集して、string 型を返す `quickSort` 関数を完成させる。
1. `yarn test` を実行して、テストが通過することを確認する。

## (2) (1)の内容を git で commit し、 push して Pull Request を作成してみましょう。

作業が終わったら、新しいブランチを作成して GitHub に push し、メンターにレビューを依頼してください。

1. CLI から `git add .` と入力し、作業したファイルを commit する
1. CLI から `git push origin feature/lesson-11` と入力し、push する
1. GitHub から、Create Pull Request を選択
1. Pull Request を作成し、やったことと動作確認項目を記述する
