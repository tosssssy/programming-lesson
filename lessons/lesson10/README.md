# Lesson 10

作業前に feature/lesson10 というブランチを main から作成しましょう。

## (1) ヒープソートを実装してみましょう

number 型の配列を引数にヒープソートを実装してみましょう。実装の際は、配列を二分木に見立て、参照している node に対して左の node の index が index \* 2 + 1、右の node の index が index \* 2 + 2 となる性質を利用しましょう。最大値を抽出した後、二分木を再構築の際に配列の末尾を配列の初頭に移動してください。

1. `lessons/lesson10/index.test.ts` を開いて、 skip されている 1 つ目のテストから `skip` を取る。
1. `yarn test` を実行して、テストが失敗することを確認する。
1. `lessons/lesson10/index.ts` の内容を編集して、string 型を返す `heapSort` 関数を完成させる。
1. `yarn test` を実行して、テストが通過することを確認する。

## (2) ヒープソートの経過を履歴として保存し、結果と一緒に返すような実装にしてみましょう

number 型の配列を引数にヒープソートを実装し、 Array<number> 型の result と Array<Array<number>> 型の histories をプロパティに持つオブジェクトを返す関数を実装してみましょう。histories には、最初に作成される二分木に見立てた配列と、それ以降に再構築した二分木に見立てた配列を順に格納してください。

1. `lessons/lesson10/index.test.ts` を開いて、 skip されている 2 つ目のテストから `skip` を取る。
1. `yarn test` を実行して、テストが失敗することを確認する。
1. `lessons/lesson10/index.ts` の内容を編集して、string 型を返す `heapSortWithHistories` 関数を完成させる。
1. `yarn test` を実行して、テストが通過することを確認する。

## (3) (1)〜(2)の内容を git で commit し、 push して Pull Request を作成してみましょう。

作業が終わったら、新しいブランチを作成して GitHub に push し、メンターにレビューを依頼してください。

1. CLI から `git add .` と入力し、作業したファイルを commit する
1. CLI から `git push origin feature/lesson-10` と入力し、push する
1. GitHub から、Create Pull Request を選択
1. Pull Request を作成し、やったことと動作確認項目を記述する
