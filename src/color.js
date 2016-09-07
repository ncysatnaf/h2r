
export default class color {
  constructor(value){
    this.__value = value
  }
  static of = (value) => {
    return new color(value)
  }

  map = (f) => {
    return color.of(f(this.__value))
  }

  join = () => {
    return this.__value ?  this.__value : color.of(null)
  }

  chain = (f) => {
    return this.map(f).join()
  }

}
