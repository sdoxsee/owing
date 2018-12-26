## Owing

A command-line application that, given an input CSV of monetary debts, generates an output CSV summarising who owes whom money.

## Installation

* Install NodeJS
* Install Yarn
* Install babel-cli globally `yarn global add babel-cli`
* `unzip owing.zip` wherever you've downloaded owing.zip
* `cd owing`
* `yarn install`
* `yarn link`
* Go to where you want to run it and run `yarn link owing`
* You're ready to use it

## Usage


`owing example.csv > result.csv`

Where **example.csv** is your original csv of debts and **result.csv** is the resulting csv you wish to create

If you just run `owing example.csv`, the results will be logged to the console.

## Testing

To run tests, go to the original owing directory and run `yarn test`

## Example Input and answer

Given the following CSV:

```csv
Alice,Bob,89.57
Bob,Alice,29.96
Carol,Alice,92.76
Carol,Bob,41.64
Bob,Carol,80.87
Carol,Bob,99.70
Carol,Alice,14.48
Bob,Carol,73.64
Bob,Alice,4.84
Bob,Carol,29.01
```

The answer would be:

```csv
Alice,Bob,89.57
Bob,Alice,34.80
Bob,Carol,183.52
Carol,Alice,107.24
Carol,Bob,141.34
```
