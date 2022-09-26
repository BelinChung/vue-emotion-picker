import { getBaseResUrl, getEmotionMap } from './options'

let emotionMap

export const parseEmotion = (text, baseResUrl) => {
  if (!emotionMap) {
    emotionMap = getEmotionMap()
  }

  baseResUrl = baseResUrl || getBaseResUrl()
  text = text
    .replace(/<.*?>/g, ($1) => {
      $1 = $1.replace('[', '&#91;')
      $1 = $1.replace(']', '&#93;')
      return $1
    })
    .replace(/\[[^[\]]*?]/g, ($1) => {
      if (emotionMap[$1]) {
        let url = emotionMap[$1].url
        if (url) {
          url = baseResUrl + url
          return `<img class="v-emotion" src="${url}" alt="${$1}" title="${$1}" />`
        }
      }
      return $1
    })
  return text
}
