import {makeArray, compose, chain, join} from './utils'
import color from './color'

const getHex = (rawHex) => {
  return new color(makeArray(rawHex))
}

const parse = (hex) => {
  return new color(hex
    .map(o=> {
      o = o = o.replace('#','')
      let r = parseInt(o.substring(0,2), 16)
      let g = parseInt(o.substring(2,4), 16)
      let b = parseInt(o.substring(4,6), 16)
      return `rgb(${r},${g},${b})`
    })
  )
}

export const parseHex = compose(join,chain(parse), getHex)
