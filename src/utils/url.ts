/// <reference types="vite/client" />

const base = (() => {
  const base = import.meta.env.BASE_URL
  return base.at(-1) === '/' ? base : base + '/'
})()

export const url = (path: string) => {
  const sub = path
    .split('/')
    .filter((c) => c && c != '.')
    .join('/')

  return base.at(-1) === '/' ? `${base}${sub}` : `${base}/${sub}`
}
