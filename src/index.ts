import fs from 'fs';

const matches = fs
  .readFileSync('football.csv', {
    // readFileSync can read any type of file: image, executable, json, csv, ..
    // Encoding tells readFileSync that we expect text content encoded
    // with utf-8 and that will return us back string representing the content
    // If we don't add encoding flag, it would give a buffer with raw data
    encoding: 'utf-8',
  })
  .split('\n')
  .map((row: string): string[] => {
    return row.split(',');
  });

enum MatchResult {
  HomeWin = 'H',
  AwayWin = 'A',
  Draw = 'D',
};

let manUnitedWins = 0;

for (let match of matches) {
  if (match[1] === 'Man United' && match[5] === MatchResult.HomeWin) {
    manUnitedWins++;
  } else if (match[2] === 'Man United' && match[5] === MatchResult.AwayWin) {
    manUnitedWins++;
  }
}

console.log(`Man United won ${manUnitedWins} games`);
