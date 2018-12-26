import {
  getFileAsString,
  getSortedWhitespaceFreeLines,
  getEntry,
  getEntries,
  sumEntryValues,
  owing
} from './index';

const filename = 'sample.csv';
const filenameAnswer = 'sampleAnswer.csv'
const fileAsString = "Alice,Bob,89.57\n" +
"Bob,Alice,29.96\n" +
"Carol,Alice,92.76\n" +
"Carol,Bob,41.64\n" +
"Bob,Carol,80.87\n" +
"Carol,Bob,99.70\n" +
"Carol,Alice,14.48\n" +
"Bob,Carol,73.64\n" +
"Bob,Alice,4.84\n" +
"Bob,Carol,29.01\n"

test('getFileAsString', () => {
  expect(
    getFileAsString(filename))
    .toBe(
      fileAsString)
});

test('getSortedWhitespaceFreeLines', () => {
  let fileAsString =
  "Alice, Bob, 89.57 \n" +
  " Bob,Alice,29.96\r\n  "
  expect(
    getSortedWhitespaceFreeLines(fileAsString).toString())
    .toBe(
      ["Alice,Bob,89.57","Bob,Alice,29.96"].toString())
});

test('getEntry', () => {
  let entry = getEntry("Alice,Bob,89.57")
  expect(entry[0]).toBe("Alice,Bob")
  expect(entry[1]).toBe("89.57")
})

test('getEntries', () => {
  let entries = getEntries(["Alice,Bob,89.57","Bob,Alice,29.96"])
  expect(entries[0].toString()).toBe(["Alice,Bob","89.57"].toString())
  expect(entries[1].toString()).toBe(["Bob,Alice","29.96"].toString())
})

test('sumEntryValues', () => {
  let entries = [
    ["Alice,Bob","89.57"],
    ["Bob,Alice","29.96"],
    ["Bob,Alice","4.84"]
  ]
  expect(sumEntryValues(entries).get("Alice,Bob")).toBe(89.57)
  expect(sumEntryValues(entries).get("Bob,Alice")).toBe(34.80)
})

test('owing', () => {
  expect(owing(filename)).toBe(getFileAsString(filenameAnswer))
})
