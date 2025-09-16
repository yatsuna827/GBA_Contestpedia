import { type Move, moves } from './moves'

// prettier-ignore
export const effects = [
  { id: "A00", appeal: 4, jamming: 0, inGameDescription: "たくさん アピール できる", description: "（追加効果なし）" },
  { id: "B00", appeal: 2, jamming: 0, inGameDescription: "1ばん はじめに アピールすると アピールが すごく うまくいく", description: "順番が1匹目なら6点、それ以外なら2点。" },
  { id: "B01", appeal: 2, jamming: 0, inGameDescription: "1ばん さいごに アピールすると アピールが すごく うまくいく", description: "順番が4匹目なら6点、それ以外なら2点。" },
  { id: "B02", appeal: 1, jamming: 0, inGameDescription: "みんなの あとで アピールするほど すごい アピールに みせられる", description: "行動順に応じて得点が変動。（早いほうから順に1点、2点、4点、6点）" },
  { id: "B03", appeal: 2, jamming: 0, inGameDescription: "1つまえの ポケモンの アピールと タイプが おなじなら きにいられる", description: "直前のポケモンのアピールと同じタイプなら6点。" },
  { id: "B04", appeal: 3, jamming: 0, inGameDescription: "1つまえの ポケモンの アピールの うまさに えいきょう される", description: "直前のポケモンのアピールの得点が2以下なら6点、3点なら3点、4以上なら0点。" },
  { id: "B05", appeal: 1, jamming: 0, inGameDescription: "かいじょうが もりあがっている ほど アピールが きにいられる", description: "エキサイトに応じて得点が変動。（エキサイト0から順に1点、2点、3点、5点、6点）" },
  { id: "B06", appeal: 1, jamming: 0, inGameDescription: "だすときに よって アピールの できぐあいが いろいろと かわる", description: "ランダムで得点が変動（30%で1点、30%で2点、20%で4点、10%で6点、10%で8点）" },
  { id: "B07", appeal: 1, jamming: 0, inGameDescription: "1つまえの ポケモンの アピールと おなじくらい うまく できる", description: "直前のポケモンの得点+1点の得点。" },
  { id: "B08", appeal: 1, jamming: 0, inGameDescription: "それまでの ポケモンの アピールと おなじくらいの アピールに みせる", description: "自分より前のポケモンたちの得点合計の半分（切り捨て）+1点の得点。ただしマイナスの得点は無視する。" },
  { id: "B09", appeal: 1, jamming: 0, inGameDescription: "ちょうしが いいときに だすと アピールが とても うまくいく", description: "調子ボーナスを3倍で計算する。" },
  { id: "C00", appeal: 2, jamming: 0, inGameDescription: "ほかの ポケモンに おどかされても 1ど くらいは がまんできる", description: "そのターン中、1回だけ妨害を受けない。" },
  { id: "C01", appeal: 1, jamming: 0, inGameDescription: "ほかの ポケモンに おどかされても がまんできる", description: "そのターン中、妨害を受けない。" },
  { id: "C02", appeal: 1, jamming: 0, inGameDescription: "アピールの ちょうしが あがる きんちょうも しにくくなる", description: "調子が上がる。" },
  { id: "D00", appeal: 1, jamming: 4, inGameDescription: "じぶんの まえに アピールした ポケモンを かなり おどろかす", description: "直前のポケモンに4点の減点。" },
  { id: "D01", appeal: 2, jamming: 3, inGameDescription: "じぶんの まえに アピールした ポケモンを おどろかす", description: "直前のポケモンに3点の減点。" },
  { id: "D02", appeal: 1, jamming: 3, inGameDescription: "アピールが おわっている ポケモン みんなを かなり おどろかす", description: "自分より前のポケモンたちに3点の減点。" },
  { id: "D03", appeal: 2, jamming: 2, inGameDescription: "アピールが おわっている ポケモン みんなを おどろかす", description: "自分より前のポケモンたちに2点の減点。" },
  { id: "D04", appeal: 2, jamming: 1, inGameDescription: "アピールが うまくいった ポケモン みんなを かなり おどろかす", description: "得点が1点以上あれば得点の半分（切り上げ）の減点、0以下の場合は1点の減点。" },
  { id: "D05", appeal: 2, jamming: 1, inGameDescription: "おなじ タイプの アピールを した ポケモンを とくに おどろかす", description: "同じタイプのアピールをしていたら4点、そうでないなら1点の減点。" },
  { id: "D06", appeal: 2, jamming: 1, inGameDescription: "しんさいんに ちゅうもく されている ポケモンを とくに おどろかす", description: "コンボ待機状態なら5点、そうでないなら1点減点。" },
  { id: "D07", appeal: 3, jamming: 0, inGameDescription: "しんさいんの ほかの ポケモンへの ちゅうもくを そらすことが できる", description: "自分より前のポケモンたちのコンボ待機状態を解除する。" },
  { id: "D08", appeal: 3, jamming: 0, inGameDescription: "アピールが おわった ポケモンのちょうしを さげる", description: "自分より前のポケモンたちの調子を0に戻す。" },
  { id: "D09", appeal: 2, jamming: 0, inGameDescription: "このあと アピールする ポケモン みんなを きんちょう させる", description: "自分より後のポケモンたちを緊張させる。" },
  { id: "E00", appeal: 3, jamming: 0, inGameDescription: "このつぎの アピールを はじめの ほうに だすことが できる", description: "自分の次のターンの行動順を1番目に予約する。" },
  { id: "E01", appeal: 3, jamming: 0, inGameDescription: "このつぎの アピールを おわりの ほうに だすことが できる", description: "自分の次のターンの行動順を4番目に予約する。" },
  { id: "E02", appeal: 3, jamming: 0, inGameDescription: "このつぎの アピールの じゅんばんを めちゃくちゃに する", description: "全員の次のターンの行動順がランダムに予約される。" },
  { id: "F00", appeal: 6, jamming: 0, inGameDescription: "この アピールの あと びっくり しやすく なってしまう", description: "そのターン中、 妨害による減点が2倍になる。" },
  { id: "F01", appeal: 4, jamming: 4, inGameDescription: "みんなの じゃまを しまくって つぎの アピールは さんか しない", description: "自分より前のポケモンたちに4点の減点。自分は次のターン、行動不能状態になる。" },
  { id: "F02", appeal: 8, jamming: 0, inGameDescription: "すごいアピールに なるが このあと さいごまで なにも できなくなる", description: "自分は次ターン以降、 行動不能状態になる。" },
  { id: "G00", appeal: 3, jamming: 0, inGameDescription: "このアピールのあと かいじょうが しばらく もりあがらなく なる", description: "そのターン中、エキサイトが変動しなくなる。" },
  { id: "H00", appeal: 1, jamming: 0, inGameDescription: "どの コンテストで みせても かならず もりあがる アピール", description: "部門によらずエキサイトが上昇する。" },
  { id: "I00", appeal: 3, jamming: 0, inGameDescription: "つづけて だしても しんさいんに あきられずに アピール できる", description: "連続で使ってもペナルティがつかない。" }
] as const

export type EffectId = (typeof effects)[number]['id']
export type MoveEffect = {
  id: EffectId
  appeal: number
  jamming: number
  inGameDescription: string
  description: string
}

const _effectsMap = new Map<EffectId, MoveEffect>(effects.map((e) => [e.id, e]))

export const getEffect = (id: EffectId): MoveEffect => _effectsMap.get(id)!
export const getMoves = (effectId: EffectId): Move[] => moves.filter((m) => m.effectId === effectId)
