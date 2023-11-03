import { AppealType, toEn } from "../data/appealType"

const typeSpan = (t: AppealType) => `<span class="${toEn(t)}"><a href="../moves.html#${toEn(t)}">${t}</a></span>`

export const Type = (t: AppealType) => {
  const typeEn = toEn(t)

  return `<span class="${typeEn}"><a href="../moves.html#${typeEn}">${t}</a></span>`
}
