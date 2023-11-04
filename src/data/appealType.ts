export type AppealType = 'かっこよさ' | 'うつくしさ' | 'かわいさ' | 'かしこさ' | 'たくましさ'

const type2En = {
  かっこよさ: 'cool',
  うつくしさ: 'beautiful',
  かわいさ: 'cute',
  かしこさ: 'clever',
  たくましさ: 'tough',
} as const

export const toEn = (jp: AppealType) => type2En[jp]
