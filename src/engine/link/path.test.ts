import { expect, test, describe } from 'bun:test'
import { getBranchPoint, getRelativePath } from '../../engine/link/path'

describe('getBranchPoint', () => {
  test('途中まで同じ場合', () => {
    const array1 = ['apple', 'banana', 'cherry', 'doggo', 'eggplant', 'fig']
    const array2 = ['apple', 'banana', 'cherry', 'date', 'earth', 'fish']

    const result = getBranchPoint(array1, array2)
    expect(result).toBe(3)
  })

  test('共通する要素を持たない場合', () => {
    const array1 = ['apple', 'banana', 'cherry']
    const array2 = ['date', 'fig', 'grape']
    const result = getBranchPoint(array1, array2)

    expect(result).toBe(0)
  })

  test('片方を完全に包含する場合', () => {
    const array1 = ['apple', 'banana', 'cherry']
    const array2 = ['apple', 'banana', 'cherry', 'date', 'fig', 'grape']
    {
      const result = getBranchPoint(array1, array2)
      expect(result).toBe(3)
    }
    {
      const result = getBranchPoint(array2, array1)
      expect(result).toBe(3)
    }
  })

  test('両方の配列が同じ場合', () => {
    const array1 = ['apple', 'banana', 'cherry', 'doggo']
    const array2 = ['apple', 'banana', 'cherry', 'doggo']
    const result = getBranchPoint(array1, array2)

    expect(result).toBe(4)
  })

  test('片方に空配列が渡された場合', () => {
    const array1 = [] as string[]
    const array2 = ['apple', 'banana', 'cherry', 'doggo']
    const result = getBranchPoint(array1, array2)

    expect(result).toBe(0)
  })

  test('両方に空配列が渡された場合', () => {
    const array1 = [] as string[]
    const array2 = [] as string[]
    const result = getBranchPoint(array1, array2)

    expect(result).toBe(0)
  })

  test('包含するが先頭が異なる場合', () => {
    const array1 = ['apple', 'banana', 'cherry']
    const array2 = ['banana', 'cherry']
    const result = getBranchPoint(array1, array2)

    expect(result).toBe(0)
  })
})

describe('getRelativePath', () => {
  test('共通のディレクトリから派生して深さが同じ', () => {
    const path1 = ['apple', 'banana', 'cherry', 'doggo', 'eggplant', 'fig.html']
    const path2 = ['apple', 'banana', 'cherry', 'date', 'earth', 'fish.html']

    const result = getRelativePath(path1, path2)
    expect(result).toBe('../../date/earth/fish.html')
  })

  test('共通のディレクトリから派生してtoのほうが深い', () => {
    const path1 = ['apple', 'banana', 'cherry', 'doggo.html']
    const path2 = ['apple', 'banana', 'code', 'date', 'earth', 'fish.html']

    const result = getRelativePath(path1, path2)
    expect(result).toBe('../code/date/earth/fish.html')
  })

  test('同じディレクトリにあるファイル', () => {
    const path1 = ['apple', 'banana', 'cherry', 'dog.html']
    const path2 = ['apple', 'banana', 'cherry', 'cat.html']

    const result = getRelativePath(path1, path2)
    expect(result).toBe('./cat.html')
  })

  test('現在のディレクトリのサブディレクトリ', () => {
    const path1 = ['apple', 'banana', 'cherry', 'dog.html']
    const path2 = ['apple', 'banana', 'cherry', 'foo', 'bar', 'cat.html']

    const result = getRelativePath(path1, path2)
    expect(result).toBe('./foo/bar/cat.html')
  })

  test('ディレクトリと同じ名前のファイル', () => {
    const path1 = ['apple', 'banana', 'cherry', 'doggo.html']
    const path2 = ['apple', 'banana', 'cherry.html']

    const result = getRelativePath(path1, path2)
    expect(result).toBe('../cherry.html')
  })

  test('共通のディレクトリを持たない', () => {
    const path1 = ['apple', 'banana', 'cherry', 'dog.html']
    const path2 = ['art', 'bomb', 'clock.html']

    const result = getRelativePath(path1, path2)
    expect(result).toBe('../../../art/bomb/clock.html')
  })

  test('toがroot', () => {
    const path1 = ['apple', 'banana', 'cherry', 'dog.html']
    const path2 = [] as string[]

    const result = getRelativePath(path1, path2)
    expect(result).toBe('../../..')
  })

  test('fromがroot', () => {
    const path1 = [] as string[]
    const path2 = ['apple', 'banana', 'cherry', 'dog.html']

    const result = getRelativePath(path1, path2)
    expect(result).toBe('./apple/banana/cherry/dog.html')
  })
})
