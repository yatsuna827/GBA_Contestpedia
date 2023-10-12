
const type2En = {
  "かっこよさ": "cool",
  "うつくしさ": "beautiful",
  "かわいさ": "cute",
  "かしこさ": "clever",
  "たくましさ": "tough",
}
const typeSpan = (t) => `<span class="${typeToEng[t]}"><a href="../moves.html#${typeToEng[t]}">${t}</a></span>`

export const Type = (t) => {
  const typeEn = type2En[t]

  return `<span class="${typeEn}"><a href="../moves.html#${typeEn}">${t}</a></span>`
}
