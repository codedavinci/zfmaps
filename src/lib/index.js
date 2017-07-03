import { EMOJIS, CDN } from '../constants'

export const getRating = (rate) => {
  switch (true) {
    case rate >= 4.5:
      return CDN + EMOJIS.LOVE
    case rate >= 3.5:
      return CDN + EMOJIS.LIKE
    case rate >= 2.5:
      return CDN + EMOJIS.NEUTRAL
    case rate >= 1.5:
      return CDN + EMOJIS.MEH
    default:
      return CDN + EMOJIS.POOP
  }
}

// export const getContentString = (place) => {
//   return (
//     <div>
//       <img src='place.photo' alt=""/>
//       <div>
//       </div>
//     </div>
//   )
// }