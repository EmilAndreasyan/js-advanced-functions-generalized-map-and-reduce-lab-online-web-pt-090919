// Add your functions here

function map(src, cb) {
  let result = []

  for (let i = 0; i < src.length; i++) {
    result.push(cb(src[i]))
  }
  return result;
}

function reduce(src, cb, starting){
  let r = (!!starting) ? starting : src[0] // r = starting if staring is true, esle src first element
  let i = (!!starting) ? 0 : 1 // index = 0 if starting is true, else 1

  for (; i < src.length; i++) {
    r = cb(src[i], r)
  }

  return r;
}
