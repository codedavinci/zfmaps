import { Icon } from 'semantic-ui-react'
import { EMOJIS, CDN } from '../constants'

export const getRating = (rate) => {
  rate = Math.round(rate)
  switch (true) {
    case rate >= 4.5:
      return CDN + EMOJIS.LOVE
    case rate >= 3.5:
      return CDN + EMOJIS.LIKE
    case rate >= 2.5:
      return CDN + EMOJIS.NEUTRAL
    case rate >= 1.5 :
      return CDN + EMOJIS.MEH
    default:
      return CDN + EMOJIS.POOP
  }
} 