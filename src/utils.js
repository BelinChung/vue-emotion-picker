import { emotionMap, baseResUrl } from './data'

export const parseEmotion = (text, baseUrl) => {
  baseUrl = baseUrl || baseResUrl
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
          url = baseUrl + url
          return '<img class="v-emotion" src="' + url + '" alt="' + $1 + '" />'
        }
      }
      return $1
    })
  return text
}
