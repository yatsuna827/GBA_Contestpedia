import combos from './combo'

import type { AppealType } from '../appealType'
import type { EffectId } from '../effects'

export type MoveId = (typeof moves)[number]['id']
export type Move = {
  id: MoveId
  name: string
  type: AppealType
  effectId: EffectId
}

export const moves = [
  { id: 1, name: 'はたく', type: 'たくましさ', effectId: 'A00' },
  { id: 2, name: 'からてチョップ', type: 'たくましさ', effectId: 'B04' },
  { id: 3, name: 'おうふくビンタ', type: 'たくましさ', effectId: 'D06' },
  { id: 4, name: 'れんぞくパンチ', type: 'たくましさ', effectId: 'B03' },
  { id: 5, name: 'メガトンパンチ', type: 'たくましさ', effectId: 'A00' },
  { id: 6, name: 'ネコにこばん', type: 'かしこさ', effectId: 'B05' },
  { id: 7, name: 'ほのおのパンチ', type: 'うつくしさ', effectId: 'A00' },
  { id: 8, name: 'れいとうパンチ', type: 'うつくしさ', effectId: 'A00' },
  { id: 9, name: 'かみなりパンチ', type: 'かっこよさ', effectId: 'A00' },
  { id: 10, name: 'ひっかく', type: 'たくましさ', effectId: 'A00' },
  { id: 11, name: 'はさむ', type: 'たくましさ', effectId: 'A00' },
  { id: 12, name: 'ハサミギロチン', type: 'かっこよさ', effectId: 'D04' },
  { id: 13, name: 'かまいたち', type: 'かっこよさ', effectId: 'B04' },
  { id: 14, name: 'つるぎのまい', type: 'うつくしさ', effectId: 'C02' },
  { id: 15, name: 'いあいぎり', type: 'かっこよさ', effectId: 'D04' },
  { id: 16, name: 'かぜおこし', type: 'かしこさ', effectId: 'E02' },
  { id: 17, name: 'つばさでうつ', type: 'かっこよさ', effectId: 'B03' },
  { id: 18, name: 'ふきとばし', type: 'かしこさ', effectId: 'E02' },
  { id: 19, name: 'そらをとぶ', type: 'かしこさ', effectId: 'C01' },
  { id: 20, name: 'しめつける', type: 'たくましさ', effectId: 'G00' },
  { id: 21, name: 'たたきつける', type: 'たくましさ', effectId: 'D05' },
  { id: 22, name: 'つるのムチ', type: 'かっこよさ', effectId: 'A00' },
  { id: 23, name: 'ふみつけ', type: 'たくましさ', effectId: 'D00' },
  { id: 24, name: 'にどげり', type: 'かっこよさ', effectId: 'B03' },
  { id: 25, name: 'メガトンキック', type: 'かっこよさ', effectId: 'A00' },
  { id: 26, name: 'とびげり', type: 'かっこよさ', effectId: 'F00' },
  { id: 27, name: 'まわしげり', type: 'かっこよさ', effectId: 'D02' },
  { id: 28, name: 'すなかけ', type: 'かわいさ', effectId: 'D06' },
  { id: 29, name: 'ずつき', type: 'たくましさ', effectId: 'D01' },
  { id: 30, name: 'つのでつく', type: 'かっこよさ', effectId: 'A00' },
  { id: 31, name: 'みだれづき', type: 'かっこよさ', effectId: 'D06' },
  { id: 32, name: 'つのドリル', type: 'かっこよさ', effectId: 'D04' },
  { id: 33, name: 'たいあたり', type: 'たくましさ', effectId: 'A00' },
  { id: 34, name: 'のしかかり', type: 'たくましさ', effectId: 'D00' },
  { id: 35, name: 'まきつく', type: 'たくましさ', effectId: 'G00' },
  { id: 36, name: 'とっしん', type: 'たくましさ', effectId: 'F00' },
  { id: 37, name: 'あばれる', type: 'たくましさ', effectId: 'F01' },
  { id: 38, name: 'すてみタックル', type: 'たくましさ', effectId: 'F00' },
  { id: 39, name: 'しっぽをふる', type: 'かわいさ', effectId: 'B01' },
  { id: 40, name: 'どくばり', type: 'かしこさ', effectId: 'D01' },
  { id: 41, name: 'ダブルニードル', type: 'かっこよさ', effectId: 'D01' },
  { id: 42, name: 'ミサイルばり', type: 'かっこよさ', effectId: 'D06' },
  { id: 43, name: 'にらみつける', type: 'かっこよさ', effectId: 'G00' },
  { id: 44, name: 'かみつく', type: 'たくましさ', effectId: 'D02' },
  { id: 45, name: 'なきごえ', type: 'かわいさ', effectId: 'B01' },
  { id: 46, name: 'ほえる', type: 'かっこよさ', effectId: 'E02' },
  { id: 47, name: 'うたう', type: 'かわいさ', effectId: 'D09' },
  { id: 48, name: 'ちょうおんぱ', type: 'かしこさ', effectId: 'E02' },
  { id: 49, name: 'ソニックブーム', type: 'かっこよさ', effectId: 'B03' },
  { id: 50, name: 'かなしばり', type: 'かしこさ', effectId: 'D09' },
  { id: 51, name: 'ようかいえき', type: 'かしこさ', effectId: 'D00' },
  { id: 52, name: 'ひのこ', type: 'うつくしさ', effectId: 'A00' },
  { id: 53, name: 'かえんほうしゃ', type: 'うつくしさ', effectId: 'A00' },
  { id: 54, name: 'しろいきり', type: 'うつくしさ', effectId: 'C01' },
  { id: 55, name: 'みずでっぽう', type: 'かわいさ', effectId: 'A00' },
  { id: 56, name: 'ハイドロポンプ', type: 'うつくしさ', effectId: 'A00' },
  { id: 57, name: 'なみのり', type: 'うつくしさ', effectId: 'B04' },
  { id: 58, name: 'れいとうビーム', type: 'うつくしさ', effectId: 'D05' },
  { id: 59, name: 'ふぶき', type: 'うつくしさ', effectId: 'A00' },
  { id: 60, name: 'サイケこうせん', type: 'うつくしさ', effectId: 'E02' },
  { id: 61, name: 'バブルこうせん', type: 'うつくしさ', effectId: 'D02' },
  { id: 62, name: 'オーロラビーム', type: 'うつくしさ', effectId: 'D05' },
  { id: 63, name: 'はかいこうせん', type: 'かっこよさ', effectId: 'F01' },
  { id: 64, name: 'つつく', type: 'かっこよさ', effectId: 'A00' },
  { id: 65, name: 'ドリルくちばし', type: 'かっこよさ', effectId: 'A00' },
  { id: 66, name: 'じごくぐるま', type: 'かっこよさ', effectId: 'F00' },
  { id: 67, name: 'けたぐり', type: 'たくましさ', effectId: 'D00' },
  { id: 68, name: 'カウンター', type: 'たくましさ', effectId: 'C00' },
  { id: 69, name: 'ちきゅうなげ', type: 'たくましさ', effectId: 'D05' },
  { id: 70, name: 'かいりき', type: 'たくましさ', effectId: 'D05' },
  { id: 71, name: 'すいとる', type: 'かしこさ', effectId: 'D01' },
  { id: 72, name: 'メガドレイン', type: 'かしこさ', effectId: 'D00' },
  { id: 73, name: 'やどりぎのタネ', type: 'かしこさ', effectId: 'D03' },
  { id: 74, name: 'せいちょう', type: 'うつくしさ', effectId: 'C02' },
  { id: 75, name: 'はっぱカッター', type: 'かっこよさ', effectId: 'B04' },
  { id: 76, name: 'ソーラービーム', type: 'かっこよさ', effectId: 'A00' },
  { id: 77, name: 'どくのこな', type: 'かしこさ', effectId: 'D08' },
  { id: 78, name: 'しびれごな', type: 'かしこさ', effectId: 'D04' },
  { id: 79, name: 'ねむりごな', type: 'かしこさ', effectId: 'D02' },
  { id: 80, name: 'はなびらのまい', type: 'うつくしさ', effectId: 'F01' },
  { id: 81, name: 'いとをはく', type: 'かしこさ', effectId: 'D01' },
  { id: 82, name: 'りゅうのいかり', type: 'かっこよさ', effectId: 'B02' },
  { id: 83, name: 'ほのおのうず', type: 'うつくしさ', effectId: 'G00' },
  { id: 84, name: 'でんきショック', type: 'かっこよさ', effectId: 'A00' },
  { id: 85, name: '10まんボルト', type: 'かっこよさ', effectId: 'A00' },
  { id: 86, name: 'でんじは', type: 'かっこよさ', effectId: 'D04' },
  { id: 87, name: 'かみなり', type: 'かっこよさ', effectId: 'D03' },
  { id: 88, name: 'いわおとし', type: 'たくましさ', effectId: 'B03' },
  { id: 89, name: 'じしん', type: 'たくましさ', effectId: 'D02' },
  { id: 90, name: 'じわれ', type: 'たくましさ', effectId: 'D04' },
  { id: 91, name: 'あなをほる', type: 'かしこさ', effectId: 'C01' },
  { id: 92, name: 'どくどく', type: 'かしこさ', effectId: 'D08' },
  { id: 93, name: 'ねんりき', type: 'かしこさ', effectId: 'D01' },
  { id: 94, name: 'サイコキネシス', type: 'かしこさ', effectId: 'D02' },
  { id: 95, name: 'さいみんじゅつ', type: 'かしこさ', effectId: 'D02' },
  { id: 96, name: 'ヨガのポーズ', type: 'うつくしさ', effectId: 'C02' },
  { id: 97, name: 'こうそくいどう', type: 'かっこよさ', effectId: 'E00' },
  { id: 98, name: 'でんこうせっか', type: 'かっこよさ', effectId: 'E00' },
  { id: 99, name: 'いかり', type: 'かっこよさ', effectId: 'I00' },
  { id: 100, name: 'テレポート', type: 'かっこよさ', effectId: 'C01' },
  { id: 101, name: 'ナイトヘッド', type: 'かしこさ', effectId: 'D05' },
  { id: 102, name: 'ものまね', type: 'かわいさ', effectId: 'B07' },
  { id: 103, name: 'いやなおと', type: 'かしこさ', effectId: 'D02' },
  { id: 104, name: 'かげぶんしん', type: 'かっこよさ', effectId: 'C00' },
  { id: 105, name: 'じこさいせい', type: 'かしこさ', effectId: 'D05' },
  { id: 106, name: 'かたくなる', type: 'たくましさ', effectId: 'C00' },
  { id: 107, name: 'ちいさくなる', type: 'かわいさ', effectId: 'C00' },
  { id: 108, name: 'えんまく', type: 'かしこさ', effectId: 'D07' },
  { id: 109, name: 'あやしいひかり', type: 'かしこさ', effectId: 'E02' },
  { id: 110, name: 'からにこもる', type: 'かわいさ', effectId: 'C01' },
  { id: 111, name: 'まるくなる', type: 'かわいさ', effectId: 'C00' },
  { id: 112, name: 'バリアー', type: 'かっこよさ', effectId: 'C01' },
  { id: 113, name: 'ひかりのかべ', type: 'うつくしさ', effectId: 'C01' },
  { id: 114, name: 'くろいきり', type: 'うつくしさ', effectId: 'D08' },
  { id: 115, name: 'リフレクター', type: 'かしこさ', effectId: 'C01' },
  { id: 116, name: 'きあいだめ', type: 'かっこよさ', effectId: 'D02' },
  { id: 117, name: 'がまん', type: 'たくましさ', effectId: 'C01' },
  { id: 118, name: 'ゆびをふる', type: 'かわいさ', effectId: 'I00' },
  { id: 119, name: 'オウムがえし', type: 'かしこさ', effectId: 'B07' },
  { id: 120, name: 'じばく', type: 'うつくしさ', effectId: 'F02' },
  { id: 121, name: 'タマゴばくだん', type: 'たくましさ', effectId: 'A00' },
  { id: 122, name: 'したでなめる', type: 'たくましさ', effectId: 'D00' },
  { id: 123, name: 'スモッグ', type: 'たくましさ', effectId: 'D02' },
  { id: 124, name: 'ヘドロこうげき', type: 'たくましさ', effectId: 'D00' },
  { id: 125, name: 'ホネこんぼう', type: 'たくましさ', effectId: 'D06' },
  { id: 126, name: 'だいもんじ', type: 'うつくしさ', effectId: 'A00' },
  { id: 127, name: 'たきのぼり', type: 'たくましさ', effectId: 'B01' },
  { id: 128, name: 'からではさむ', type: 'たくましさ', effectId: 'G00' },
  { id: 129, name: 'スピードスター', type: 'かっこよさ', effectId: 'B00' },
  { id: 130, name: 'ロケットずつき', type: 'たくましさ', effectId: 'D00' },
  { id: 131, name: 'とげキャノン', type: 'かっこよさ', effectId: 'D06' },
  { id: 132, name: 'からみつく', type: 'たくましさ', effectId: 'D01' },
  { id: 133, name: 'ドわすれ', type: 'かわいさ', effectId: 'C02' },
  { id: 134, name: 'スプーンまげ', type: 'かしこさ', effectId: 'G00' },
  { id: 135, name: 'タマゴうみ', type: 'うつくしさ', effectId: 'A00' },
  { id: 136, name: 'とびひざげり', type: 'かっこよさ', effectId: 'F00' },
  { id: 137, name: 'へびにらみ', type: 'たくましさ', effectId: 'D02' },
  { id: 138, name: 'ゆめくい', type: 'かしこさ', effectId: 'D03' },
  { id: 139, name: 'どくガス', type: 'かしこさ', effectId: 'D08' },
  { id: 140, name: 'たまなげ', type: 'たくましさ', effectId: 'B03' },
  { id: 141, name: 'きゅうけつ', type: 'かしこさ', effectId: 'D01' },
  { id: 142, name: 'あくまのキッス', type: 'うつくしさ', effectId: 'D02' },
  { id: 143, name: 'ゴッドバード', type: 'かっこよさ', effectId: 'B04' },
  { id: 144, name: 'へんしん', type: 'かしこさ', effectId: 'I00' },
  { id: 145, name: 'あわ', type: 'かわいさ', effectId: 'D03' },
  { id: 146, name: 'ピヨピヨパンチ', type: 'かっこよさ', effectId: 'D00' },
  { id: 147, name: 'キノコのほうし', type: 'うつくしさ', effectId: 'D02' },
  { id: 148, name: 'フラッシュ', type: 'うつくしさ', effectId: 'D07' },
  { id: 149, name: 'サイコウェーブ', type: 'かしこさ', effectId: 'D04' },
  { id: 150, name: 'はねる', type: 'かわいさ', effectId: 'B01' },
  { id: 151, name: 'とける', type: 'たくましさ', effectId: 'C02' },
  { id: 152, name: 'クラブハンマー', type: 'たくましさ', effectId: 'B04' },
  { id: 153, name: 'だいばくはつ', type: 'うつくしさ', effectId: 'F02' },
  { id: 154, name: 'みだれひっかき', type: 'たくましさ', effectId: 'D06' },
  { id: 155, name: 'ホネブーメラン', type: 'たくましさ', effectId: 'A00' },
  { id: 156, name: 'ねむる', type: 'かわいさ', effectId: 'C00' },
  { id: 157, name: 'いわなだれ', type: 'たくましさ', effectId: 'D02' },
  { id: 158, name: 'ひっさつまえば', type: 'かっこよさ', effectId: 'D00' },
  { id: 159, name: 'かくばる', type: 'かわいさ', effectId: 'C02' },
  { id: 160, name: 'テクスチャー', type: 'うつくしさ', effectId: 'B03' },
  { id: 161, name: 'トライアタック', type: 'うつくしさ', effectId: 'D03' },
  { id: 162, name: 'いかりのまえば', type: 'たくましさ', effectId: 'D04' },
  { id: 163, name: 'きりさく', type: 'かっこよさ', effectId: 'B04' },
  { id: 164, name: 'みがわり', type: 'かしこさ', effectId: 'C00' },
  // { id: 165, name: 'わるあがき' },
  { id: 166, name: 'スケッチ', type: 'かしこさ', effectId: 'B07' },
  { id: 167, name: 'トリプルキック', type: 'かっこよさ', effectId: 'A00' },
  { id: 168, name: 'どろぼう', type: 'たくましさ', effectId: 'B08' },
  { id: 169, name: 'クモのす', type: 'かしこさ', effectId: 'D09' },
  { id: 170, name: 'こころのめ', type: 'かしこさ', effectId: 'G00' },
  { id: 171, name: 'あくむ', type: 'かしこさ', effectId: 'D02' },
  { id: 172, name: 'かえんぐるま', type: 'うつくしさ', effectId: 'A00' },
  { id: 173, name: 'いびき', type: 'かわいさ', effectId: 'A00' },
  { id: 174, name: 'のろい', type: 'たくましさ', effectId: 'E01' },
  { id: 175, name: 'じたばた', type: 'かわいさ', effectId: 'B02' },
  { id: 176, name: 'テクスチャー2', type: 'うつくしさ', effectId: 'B03' },
  { id: 177, name: 'エアロブラスト', type: 'かっこよさ', effectId: 'B04' },
  { id: 178, name: 'わたほうし', type: 'うつくしさ', effectId: 'D06' },
  { id: 179, name: 'きしかいせい', type: 'かっこよさ', effectId: 'B01' },
  { id: 180, name: 'うらみ', type: 'たくましさ', effectId: 'B02' },
  { id: 181, name: 'こなゆき', type: 'うつくしさ', effectId: 'A00' },
  { id: 182, name: 'まもる', type: 'かわいさ', effectId: 'C01' },
  { id: 183, name: 'マッハパンチ', type: 'かっこよさ', effectId: 'E00' },
  { id: 184, name: 'こわいかお', type: 'たくましさ', effectId: 'D06' },
  { id: 185, name: 'だましうち', type: 'かしこさ', effectId: 'B00' },
  { id: 186, name: 'てんしのキッス', type: 'かわいさ', effectId: 'D09' },
  { id: 187, name: 'はらだいこ', type: 'かわいさ', effectId: 'C02' },
  { id: 188, name: 'ヘドロばくだん', type: 'たくましさ', effectId: 'D06' },
  { id: 189, name: 'どろかけ', type: 'かわいさ', effectId: 'D06' },
  { id: 190, name: 'オクタンほう', type: 'たくましさ', effectId: 'D06' },
  { id: 191, name: 'まきびし', type: 'かしこさ', effectId: 'D09' },
  { id: 192, name: 'でんじほう', type: 'かっこよさ', effectId: 'A00' },
  { id: 193, name: 'みやぶる', type: 'かしこさ', effectId: 'D08' },
  { id: 194, name: 'みちづれ', type: 'かしこさ', effectId: 'F02' },
  { id: 195, name: 'ほろびのうた', type: 'うつくしさ', effectId: 'D04' },
  { id: 196, name: 'こごえるかぜ', type: 'うつくしさ', effectId: 'D02' },
  { id: 197, name: 'みきり', type: 'かっこよさ', effectId: 'C00' },
  { id: 198, name: 'ボーンラッシュ', type: 'たくましさ', effectId: 'A00' },
  { id: 199, name: 'ロックオン', type: 'かしこさ', effectId: 'G00' },
  { id: 200, name: 'げきりん', type: 'かっこよさ', effectId: 'F01' },
  { id: 201, name: 'すなあらし', type: 'たくましさ', effectId: 'E02' },
  { id: 202, name: 'ギガドレイン', type: 'かしこさ', effectId: 'D06' },
  { id: 203, name: 'こらえる', type: 'たくましさ', effectId: 'C00' },
  { id: 204, name: 'あまえる', type: 'かわいさ', effectId: 'D05' },
  { id: 205, name: 'ころがる', type: 'たくましさ', effectId: 'G00' },
  { id: 206, name: 'みねうち', type: 'かっこよさ', effectId: 'D02' },
  { id: 207, name: 'いばる', type: 'かわいさ', effectId: 'B00' },
  { id: 208, name: 'ミルクのみ', type: 'かわいさ', effectId: 'B03' },
  { id: 209, name: 'スパーク', type: 'かっこよさ', effectId: 'D00' },
  { id: 210, name: 'れんぞくぎり', type: 'かっこよさ', effectId: 'I00' },
  { id: 211, name: 'はがねのつばさ', type: 'かっこよさ', effectId: 'B03' },
  { id: 212, name: 'くろいまなざし', type: 'うつくしさ', effectId: 'D09' },
  { id: 213, name: 'メロメロ', type: 'かわいさ', effectId: 'D09' },
  { id: 214, name: 'ねごと', type: 'かわいさ', effectId: 'I00' },
  { id: 215, name: 'いやしのすず', type: 'うつくしさ', effectId: 'B01' },
  { id: 216, name: 'おんがえし', type: 'かわいさ', effectId: 'H00' },
  { id: 217, name: 'プレゼント', type: 'かわいさ', effectId: 'I00' },
  { id: 218, name: 'やつあたり', type: 'かわいさ', effectId: 'H00' },
  { id: 219, name: 'しんぴのまもり', type: 'うつくしさ', effectId: 'C01' },
  { id: 220, name: 'いたみわけ', type: 'かしこさ', effectId: 'D00' },
  { id: 221, name: 'せいなるほのお', type: 'うつくしさ', effectId: 'A00' },
  { id: 222, name: 'マグニチュード', type: 'たくましさ', effectId: 'B05' },
  { id: 223, name: 'ばくれつパンチ', type: 'かっこよさ', effectId: 'D06' },
  { id: 224, name: 'メガホーン', type: 'かっこよさ', effectId: 'B03' },
  { id: 225, name: 'りゅうのいぶき', type: 'かっこよさ', effectId: 'D02' },
  { id: 226, name: 'バトンタッチ', type: 'かわいさ', effectId: 'D09' },
  { id: 227, name: 'アンコール', type: 'かわいさ', effectId: 'D09' },
  { id: 228, name: 'おいうち', type: 'かしこさ', effectId: 'D04' },
  { id: 229, name: 'こうそくスピン', type: 'かっこよさ', effectId: 'C00' },
  { id: 230, name: 'あまいかおり', type: 'かわいさ', effectId: 'D02' },
  { id: 231, name: 'アイアンテール', type: 'かっこよさ', effectId: 'D00' },
  { id: 232, name: 'メタルクロー', type: 'かっこよさ', effectId: 'A00' },
  { id: 233, name: 'あてみなげ', type: 'かっこよさ', effectId: 'E01' },
  { id: 234, name: 'あさのひざし', type: 'うつくしさ', effectId: 'B06' },
  { id: 235, name: 'こうごうせい', type: 'かしこさ', effectId: 'B06' },
  { id: 236, name: 'つきのひかり', type: 'うつくしさ', effectId: 'B06' },
  { id: 237, name: 'めざめるパワー', type: 'かしこさ', effectId: 'I00' },
  { id: 238, name: 'クロスチョップ', type: 'かっこよさ', effectId: 'B04' },
  { id: 239, name: 'たつまき', type: 'かっこよさ', effectId: 'E02' },
  { id: 240, name: 'あまごい', type: 'たくましさ', effectId: 'B05' },
  { id: 241, name: 'にほんばれ', type: 'うつくしさ', effectId: 'B05' },
  { id: 242, name: 'かみくだく', type: 'たくましさ', effectId: 'D00' },
  { id: 243, name: 'ミラーコート', type: 'うつくしさ', effectId: 'C00' },
  { id: 244, name: 'じこあんじ', type: 'かしこさ', effectId: 'B03' },
  { id: 245, name: 'しんそく', type: 'かっこよさ', effectId: 'E00' },
  { id: 246, name: 'げんしのちから', type: 'たくましさ', effectId: 'C02' },
  { id: 247, name: 'シャドーボール', type: 'かしこさ', effectId: 'D07' },
  { id: 248, name: 'みらいよち', type: 'かしこさ', effectId: 'G00' },
  { id: 249, name: 'いわくだき', type: 'たくましさ', effectId: 'B09' },
  { id: 250, name: 'うずしお', type: 'うつくしさ', effectId: 'G00' },
  { id: 251, name: 'ふくろだたき', type: 'かしこさ', effectId: 'D04' },
  { id: 252, name: 'ねこだまし', type: 'かわいさ', effectId: 'D05' },
  { id: 253, name: 'さわぐ', type: 'かわいさ', effectId: 'E02' },
  { id: 254, name: 'たくわえる', type: 'たくましさ', effectId: 'C00' },
  { id: 255, name: 'はきだす', type: 'たくましさ', effectId: 'A00' },
  { id: 256, name: 'のみこむ', type: 'たくましさ', effectId: 'C02' },
  { id: 257, name: 'ねっぷう', type: 'うつくしさ', effectId: 'A00' },
  { id: 258, name: 'あられ', type: 'うつくしさ', effectId: 'D02' },
  { id: 259, name: 'いちゃもん', type: 'たくましさ', effectId: 'D09' },
  { id: 260, name: 'おだてる', type: 'かしこさ', effectId: 'D09' },
  { id: 261, name: 'おにび', type: 'うつくしさ', effectId: 'D00' },
  { id: 262, name: 'おきみやげ', type: 'たくましさ', effectId: 'F02' },
  { id: 263, name: 'からげんき', type: 'かわいさ', effectId: 'B01' },
  { id: 264, name: 'きあいパンチ', type: 'たくましさ', effectId: 'E01' },
  { id: 265, name: 'きつけ', type: 'かしこさ', effectId: 'D01' },
  { id: 266, name: 'このゆびとまれ', type: 'かわいさ', effectId: 'G00' },
  { id: 267, name: 'しぜんのちから', type: 'うつくしさ', effectId: 'B05' },
  { id: 268, name: 'じゅうでん', type: 'かしこさ', effectId: 'B03' },
  { id: 269, name: 'ちょうはつ', type: 'かしこさ', effectId: 'D09' },
  { id: 270, name: 'てだすけ', type: 'かしこさ', effectId: 'D09' },
  { id: 271, name: 'トリック', type: 'かしこさ', effectId: 'B03' },
  { id: 272, name: 'なりきり', type: 'かわいさ', effectId: 'B08' },
  { id: 273, name: 'ねがいごと', type: 'かわいさ', effectId: 'G00' },
  { id: 274, name: 'ねこのて', type: 'かわいさ', effectId: 'B06' },
  { id: 275, name: 'ねをはる', type: 'かしこさ', effectId: 'C01' },
  { id: 276, name: 'ばかぢから', type: 'たくましさ', effectId: 'F00' },
  { id: 277, name: 'マジックコート', type: 'うつくしさ', effectId: 'C01' },
  { id: 278, name: 'リサイクル', type: 'かしこさ', effectId: 'I00' },
  { id: 279, name: 'リベンジ', type: 'たくましさ', effectId: 'E01' },
  { id: 280, name: 'かわらわり', type: 'かっこよさ', effectId: 'D00' },
  { id: 281, name: 'あくび', type: 'かわいさ', effectId: 'D09' },
  { id: 282, name: 'はたきおとす', type: 'かしこさ', effectId: 'D00' },
  { id: 283, name: 'がむしゃら', type: 'たくましさ', effectId: 'B01' },
  { id: 284, name: 'ふんか', type: 'うつくしさ', effectId: 'B02' },
  { id: 285, name: 'スキルスワップ', type: 'かしこさ', effectId: 'B08' },
  { id: 286, name: 'ふういん', type: 'かしこさ', effectId: 'D08' },
  { id: 287, name: 'リフレッシュ', type: 'かわいさ', effectId: 'C02' },
  { id: 288, name: 'おんねん', type: 'たくましさ', effectId: 'B02' },
  { id: 289, name: 'よこどり', type: 'かしこさ', effectId: 'D04' },
  { id: 290, name: 'ひみつのちから', type: 'かしこさ', effectId: 'B09' },
  { id: 291, name: 'ダイビング', type: 'うつくしさ', effectId: 'C00' },
  { id: 292, name: 'つっぱり', type: 'たくましさ', effectId: 'D06' },
  { id: 293, name: 'ほごしょく', type: 'かしこさ', effectId: 'B04' },
  { id: 294, name: 'ほたるび', type: 'うつくしさ', effectId: 'C02' },
  { id: 295, name: 'ラスターパージ', type: 'かしこさ', effectId: 'D01' },
  { id: 296, name: 'ミストボール', type: 'かしこさ', effectId: 'D00' },
  { id: 297, name: 'フェザーダンス', type: 'うつくしさ', effectId: 'B01' },
  { id: 298, name: 'フラフラダンス', type: 'かわいさ', effectId: 'F01' },
  { id: 299, name: 'ブレイズキック', type: 'うつくしさ', effectId: 'A00' },
  { id: 300, name: 'どろあそび', type: 'かわいさ', effectId: 'A00' },
  { id: 301, name: 'アイスボール', type: 'うつくしさ', effectId: 'G00' },
  { id: 302, name: 'ニードルアーム', type: 'かしこさ', effectId: 'D00' },
  { id: 303, name: 'なまける', type: 'かわいさ', effectId: 'B02' },
  { id: 304, name: 'ハイパーボイス', type: 'かっこよさ', effectId: 'D02' },
  { id: 305, name: 'どくどくのキバ', type: 'かしこさ', effectId: 'D08' },
  { id: 306, name: 'ブレイククロー', type: 'かっこよさ', effectId: 'D00' },
  { id: 307, name: 'ブラストバーン', type: 'うつくしさ', effectId: 'F01' },
  { id: 308, name: 'ハイドロカノン', type: 'うつくしさ', effectId: 'F01' },
  { id: 309, name: 'コメットパンチ', type: 'かっこよさ', effectId: 'B03' },
  { id: 310, name: 'おどろかす', type: 'かしこさ', effectId: 'D01' },
  { id: 311, name: 'ウェザーボール', type: 'かしこさ', effectId: 'A00' },
  { id: 312, name: 'アロマセラピー', type: 'かしこさ', effectId: 'B01' },
  { id: 313, name: 'うそなき', type: 'かしこさ', effectId: 'B01' },
  { id: 314, name: 'エアカッター', type: 'かっこよさ', effectId: 'D05' },
  { id: 315, name: 'オーバーヒート', type: 'うつくしさ', effectId: 'F00' },
  { id: 316, name: 'かぎわける', type: 'かしこさ', effectId: 'D08' },
  { id: 317, name: 'がんせきふうじ', type: 'かしこさ', effectId: 'G00' },
  { id: 318, name: 'ぎんいろのかぜ', type: 'うつくしさ', effectId: 'C02' },
  { id: 319, name: 'きんぞくおん', type: 'かしこさ', effectId: 'D02' },
  { id: 320, name: 'くさぶえ', type: 'かしこさ', effectId: 'D02' },
  { id: 321, name: 'くすぐる', type: 'かわいさ', effectId: 'D08' },
  { id: 322, name: 'コスモパワー', type: 'かっこよさ', effectId: 'C02' },
  { id: 323, name: 'しおふき', type: 'うつくしさ', effectId: 'B02' },
  { id: 324, name: 'シグナルビーム', type: 'うつくしさ', effectId: 'E02' },
  { id: 325, name: 'シャドーパンチ', type: 'かしこさ', effectId: 'B00' },
  { id: 326, name: 'じんつうりき', type: 'かっこよさ', effectId: 'D00' },
  { id: 327, name: 'スカイアッパー', type: 'かっこよさ', effectId: 'D05' },
  { id: 328, name: 'すなじごく', type: 'かしこさ', effectId: 'G00' },
  { id: 329, name: 'ぜったいれいど', type: 'うつくしさ', effectId: 'D04' },
  { id: 330, name: 'だくりゅう', type: 'たくましさ', effectId: 'D06' },
  { id: 331, name: 'タネマシンガン', type: 'かっこよさ', effectId: 'D04' },
  { id: 332, name: 'つばめがえし', type: 'かっこよさ', effectId: 'B00' },
  { id: 333, name: 'つららばり', type: 'うつくしさ', effectId: 'D05' },
  { id: 334, name: 'てっぺき', type: 'たくましさ', effectId: 'C01' },
  { id: 335, name: 'とおせんぼう', type: 'かわいさ', effectId: 'D09' },
  { id: 336, name: 'とおぼえ', type: 'かっこよさ', effectId: 'C02' },
  { id: 337, name: 'ドラゴンクロー', type: 'かっこよさ', effectId: 'D05' },
  { id: 338, name: 'ハードプラント', type: 'かっこよさ', effectId: 'F01' },
  { id: 339, name: 'ビルドアップ', type: 'うつくしさ', effectId: 'C02' },
  { id: 340, name: 'とびはねる', type: 'かわいさ', effectId: 'C01' },
  { id: 341, name: 'マッドショット', type: 'たくましさ', effectId: 'D02' },
  { id: 342, name: 'ポイズンテール', type: 'かしこさ', effectId: 'D08' },
  { id: 343, name: 'ほしがる', type: 'かわいさ', effectId: 'B08' },
  { id: 344, name: 'ボルテッカー', type: 'かっこよさ', effectId: 'F00' },
  { id: 345, name: 'マジカルリーフ', type: 'うつくしさ', effectId: 'B00' },
  { id: 346, name: 'みずあそび', type: 'かわいさ', effectId: 'A00' },
  { id: 347, name: 'めいそう', type: 'かしこさ', effectId: 'C00' },
  { id: 348, name: 'リーフブレード', type: 'かっこよさ', effectId: 'B04' },
  { id: 349, name: 'りゅうのまい', type: 'かっこよさ', effectId: 'C02' },
  { id: 350, name: 'ロックブラスト', type: 'たくましさ', effectId: 'B03' },
  { id: 351, name: 'でんげきは', type: 'かっこよさ', effectId: 'B00' },
  { id: 352, name: 'みずのはどう', type: 'うつくしさ', effectId: 'E02' },
  { id: 353, name: 'はめつのねがい', type: 'かっこよさ', effectId: 'G00' },
  { id: 354, name: 'サイコブースト', type: 'かしこさ', effectId: 'F00' },
] as const

// わるあがきのIDが飛ばされているため、そのまま配列へのインデックスアクセスをするとズレる
const _moves = Object.fromEntries(moves.map((move) => [move.id, move])) as Record<number, Move>
export const comboTo = ({ id }: Pick<Move, 'id'>) =>
  combos.filter(({ from }) => from === id).map(({ to }) => _moves[to] as Move)
export const comboFrom = ({ id }: Pick<Move, 'id'>) =>
  combos.filter(({ to }) => to === id).map(({ from }) => _moves[from] as Move)
