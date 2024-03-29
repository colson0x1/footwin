import fs from 'fs';

export abstract class CsvFileReader<T> {
  data: T[] = [];

  constructor(public filename: string) {}

  abstract mapRow(row: string[]): T;

  read(): void {
    this.data = fs
      .readFileSync(this.filename, {
        // readFileSync can read any type of file: image, executable, json, csv, ..
        // Encoding tells readFileSync that we expect text content encoded
        // with utf-8 and that will return us back string representing the content
        // If we don't add encoding flag, it would give a buffer with raw data
        encoding: 'utf-8',
      })
      .split('\n')
      .map((row: string): string[] => {
        return row.split(',');
      })
      .map(this.mapRow);
  }
}
