import {
  convertToBinaryNumber,
  convertToBinaryNumberWithoutParseIntAndToString,
} from '.'

describe('Lesson 12', () => {
  test.skip('number型の整数が2進数の文字列に変換されること', () => {
    expect(convertToBinaryNumber(10)).toBe('1010')
    expect(convertToBinaryNumber(100)).toBe('1100100')
  })

  test('number型の整数が2進数の文字列に変換されること', () => {
    expect(convertToBinaryNumberWithoutParseIntAndToString(10)).toBe('1010')
    expect(convertToBinaryNumberWithoutParseIntAndToString(100)).toBe('1100100')
  })
})
