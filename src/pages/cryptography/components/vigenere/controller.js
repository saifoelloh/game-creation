const getCode = (ch = '') => parseInt(ch.charCodeAt(0) - 97)

const keyGenerator = (key = '', text = '') => {
  const kLen = key.length
  const temp = text.split('')
  const result = temp.map((item, id) => {
    return key[(kLen + id) % kLen]
  })

  return result.join('')
}

export { keyGenerator, getCode }
