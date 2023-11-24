export const getBranchPoint = (a: string[], b: string[]) => {
  const max = Math.min(a.length, b.length)

  for (let i = 0; i < max; i++) {
    if (a[i] !== b[i]) return i
  }

  return max
}

export const getRelativePath = (from: string[], to: string[]) => {
  const currentDir = from.slice(0, -1)
  const bp = getBranchPoint(currentDir, to)

  // fromとtoの共通部分までのパス
  const branchPath = bp < currentDir.length ? new Array<string>(currentDir.length - bp).fill('..') : ['.']

  return [...branchPath, ...to.slice(bp)].join('/')
}
