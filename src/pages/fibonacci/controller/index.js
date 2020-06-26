const fibonacci = (num = 0, memo = Array) => {
  let result = -1
  if (memo[num] !== null) {
    return memo[num]
  } else if (num <= 2) {
    result = 1
  } else {
    result = fibonacci(num - 1, memo) + fibonacci(num - 2, memo)
  }

  memo[num] = result
  return result
}

export { fibonacci }
