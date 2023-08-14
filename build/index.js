"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const matches = fs_1.default
    .readFileSync('football.csv', {
    // readFileSync can read any type of file: image, executable, json, csv, ..
    // Encoding tells readFileSync that we expect text content encoded
    // with utf-8 and that will return us back string representing the content
    // If we don't add encoding flag, it would give a buffer with raw data
    encoding: 'utf-8',
})
    .split('\n')
    .map((row) => {
    return row.split(',');
});
console.log(matches);
