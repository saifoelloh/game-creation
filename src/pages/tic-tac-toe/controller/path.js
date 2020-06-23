export const checkSelection = (row = -1, col = -1, arr) => {
  return !arr[row][col].status
}

const horizontalPath = (arr = [], player = '') => {
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

const verticalPath = (arr = [], player = '') => {
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

const crossPath = (arr = [], player = '') => {
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

const reverseCrossPath = (arr = [], player = '') => {
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

export const checkMovement = (arr = [], player = '') => {
  const temp = arr.map((items) => items.filter((x) => x.player === player))
  const result = {
    horizontal: [0, 0, 0],
    vertical: [0, 0, 0],
    cross: [0, 0],
  }

  temp.forEach((items, id) => {
    const len = items.length - 1
    result.horizontal[id] = items.reduce((acc, cur) => acc + cur, 0)
    result.vertical[id] = items.reduce(
      (acc, cur, idx) => acc + temp[idx][id],
      0,
    )
    result.cross[0] = items.reduce((acc, cur, idx) => acc + temp[idx][idx], 0)
    result.cross[1] = items.reduce(
      (acc, cur, idx) => acc + temp[len - idx][len - idx],
      0,
    )
  })

  return Object.entries(result).some((items) =>
    items.some((item) => item === 3),
  )
}

export const CheckPossibilities = (paths = []) => {
  const avail = paths.map((row = []) => {
    const temp = row.filter(
      (col = Object) => col.player === 'computer' && !col.status,
    )
    return temp.map((x = Object) => x.status)
  })

  return avail
}
