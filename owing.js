import path from 'path';
import fs from 'fs';

export const getFileAsString = filename => {
  const filepath = path.resolve(process.cwd(), filename)
  return fs
  .readFileSync(filepath, 'utf8')
  .toString()
}

export const getSortedWhitespaceFreeLines = fileAsString => {
  return fileAsString
    .replace(/ /g, '')
    .split(/(\r\n|\r|\n)+/g)
    .filter(line => (line.trim().length !== 0))
    .sort()
}

export const getEntries = lines => {
  let result = []
  lines.forEach((line) => (result.push(getEntry(line))))
  return result
}

export const getEntry = line => {
  let key = line.substring(0, line.lastIndexOf(","))
  let value = line.substring(line.lastIndexOf(",") + 1, line.length)
  return [key, value]
}

export const sumEntryValues = entries => {
  let map = new Map()
  entries.forEach(entry => {
    let current = map.get(entry[0])
    if (!current) {
      current = 0
    }
    map.set(entry[0], current + Number(entry[1]) )
  })
  return map
}

export const owing = filename => {
  let entries = sumEntryValues(
    getEntries(
      getSortedWhitespaceFreeLines(
        getFileAsString(filename)
      )
    )
  ).entries()

  let results = []
  for (let entry of entries) {
    results.push(entry[0] + ',' + Number(entry[1]).toFixed(2));
  }
  return results.join('\n') + '\n'
}
