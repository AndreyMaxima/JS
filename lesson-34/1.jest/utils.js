const sum = (a, b) => (Number(a) || 0) + (Number(b) || 0)

const returnNull = () => null

const isNumberMoreZero = (num) => num > 0

const throwErrorIfFalseElseReturnParam = (value) => {
 if(value === false) {
  throw new Error('param is false')
 }
 return value
}


module.exports = {
 sum,
 returnNull,
 isNumberMoreZero,
 throwErrorIfFalseElseReturnParam
}
