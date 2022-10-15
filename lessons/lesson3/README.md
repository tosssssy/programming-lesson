# Lesson 3

作業前に feature/lesson3 というブランチを main から作成しましょう。

## (1) 様々な型を返す関数を作ってみよう

TypeScript には様々な型が存在します。ここではプリミティブな型を扱う関数を作成し、ユニットテストを通してみましょう。

1. `lessons/lesson3/index.test.ts` を開いて、 skip されている 1 つ目と 2 つ目テストから `skip` を取る
1. `yarn test` を実行して、テストが失敗することを確認する。
1. `lessons/lesson3/index.ts` の内容を編集して、number 型を返す `getNumber` 関数を完成させる。
1. `lessons/lesson3/index.ts` の内容を編集して、string 型を返す `getString` 関数を完成させる。
1. `yarn test` を実行して、テストが通過することを確認する。

## (2) リテラル型を意識した関数を作ってみよう

typeof は実行時に評価される JavaScript の演算子です。実行前に型エラーをチェックするリテラル型を実装し、TypeScript が評価するエラーを確認してみましょう。その後、それを正しい状態に修正してみましょう。

1. `lessons/lesson3/index.test.ts` を開いて、 skip されている 3 つ目のテストから `skip` を取る
1. (2)に対応するユニットテストのコメントアウトを外し、エディタ上で型エラーが発生することを確認する。
1. `yarn test` を実行して、テストが失敗することを確認する。
1. `lessons/lesson3/index.ts` の内容を編集して、`Pet型` の値 `"dog"` を返す `getPet` 関数を完成させる。
1. `yarn test` を実行して、テストが通過することを確認する。

## (3) リテラル型によってエディタ上で型補完ができることを確認しよう

関数 `getPetName` では引数に `Pet型` を受け取ります。VSCode の機能を使って、リテラル型はエディタ上で型補完ができることを確認し、ユニットテストを編集してテストを疎通させましょう。

1. `lessons/lesson3/index.test.ts` を開いて、 skip されている 4 つ目のテストから `skip` を取る
1. (3)に対応するユニットテストのコメントアウトを外し、エディタ上で型エラーが発生することを確認する。
1. 1 行目の `getPetName` の引数部分にカーソルを合わせ、 `Command + i` キーで型補完の候補が出ることを確認して、補完の候補からテストが疎通するような値を選択してテストを修正する。
1. 2 行目も同様の手順でテストを修正する。
1. `yarn test` を実行して、テストが通過することを確認する。

## (4) 型変換を行って明示的に型を変換しよう

`toUnixSeconds` 関数を実装し、引数で渡した年月日を UNIX 時間（単位は秒）に変換してみましょう。

1. `lessons/lesson3/index.test.ts` を開く。
1. (4) に該当するテストコードの skip 部分を削除し、活性化する。
1. コメントアウトを削除し、活性化して引数を記述する
1. `lessons/lesson3/index.ts` を開く。
1. 標準の組み込みクラス Date と getTime 関数を使って UNIX 時間を返す関数を実装する。
1. `yarn test` を実行して、テストが通過することを確認する。

## (5) (1)〜(4)の内容を git で commit し、 push して Pull Request を作成してみましょう。

作業が終わったら、Lesson 1 と同様に GitHub に push してメンターにレビューを依頼してください。

1. CLI から `git add .` と入力し、作業したファイルを commit する
1. CLI から `git push origin feature/lesson-3` と入力し、push する
1. GitHub から、Create Pull Request を選択
1. Pull Request を作成し、やったことと動作確認項目を記述する
