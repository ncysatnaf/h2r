
export const curry = (f, ...fn) => fn.length === f.length ? f(...fn) : curry.bind(this, f, ...fn)

export const compose = (f,...fn) => fn.length === 0 ? f : (...args) => f(compose(...fn)(...args))

export const map = curry((f,xs) => xs.map(f))

export const chain = curry((f,functor) => functor.chain(f))

export const join = (x) => x.join()

export const makeArray = (value) => Array.isArray(value) ? value.slice(0) : [value]
