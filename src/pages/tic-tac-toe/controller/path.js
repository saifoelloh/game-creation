export const checkSelection = (row = -1, col = -1, arr) => {
  return !arr[row][col].status
}

const horizontalPath = (arr = [], player = "") => {
  const temp = arr.map((items = []) =>
    items.reduce((acc, cur) => {
      if (cur.player === player) {
        acc += cur.status ? 1 : 0
      } else {
        acc += 0
      }
      return acc
    }, 0),
  )
  const status = temp.filter((item) => item === arr.length)
  return status.length > 0
}

const verticalPath = (arr = [], player = "") => {
  const temp = arr.map((items = [], id) =>
    items.reduce((acc, cur, idx) => {
      const temp = arr[idx][id]
      if (temp.player === player) {
        acc += temp.status ? 1 : 0
      } else {
        acc += 0
      }
      return acc
    }, 0),
  )
  const status = temp.filter((item) => item === arr.length)
  return status.length > 0
}

const crossPath = (arr = [], player = "") => {
  const temp = arr.map((items = []) =>
    items.reduce((acc, cur, idx) => {
      const temp = arr[idx][idx]
      if (temp.player === player) {
        acc += temp.status ? 1 : 0
      } else {
        acc += 0
      }
      return acc
    }, 0),
  )
  const status = temp.filter((item) => item === arr.length)
  return status.length > 0
}

const reverseCrossPath = (arr = [], player = "") => {
  const temp = arr.map((items = [], id) =>
    items.reduce((acc, cur, idx) => {
      const index = items.length - (idx + 1)
      const temp = arr[idx][index]
      if (temp.player === player) {
        acc += temp.status ? 1 : 0
      } else {
        acc += 0
      }
      return acc
    }, 0),
  )
  const status = temp.filter((item) => item === arr.length)
  return status.length > 0
}

export const checkMovement = (arr = [], player = "") => {
  return (
    horizontalPath(arr, player) ||
    verticalPath(arr, player) ||
    crossPath(arr, player) ||
    reverseCrossPath(arr, player)
  )
}
