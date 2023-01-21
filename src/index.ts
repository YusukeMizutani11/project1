/*
 *  index.ts
 *  Project: First Exercise
 *
 *  Author: Yusuke Mizutani
 *  Created on: Jan 19, 2023
 */

function merge(arr1: Array<number>, arr2: Array<number>): Array<number> {
  const arr3: Array<number> = [];
  const max_length: number = Math.max(arr1.length, arr2.length);

  for (let i = 0; i < max_length; i += 1) {
    if (arr1[i] !== undefined) arr3.push(arr1[i]);
    if (arr2[i] !== undefined) arr3.push(arr2[i]);
  }
  return arr3;
}

// const array1: Array<number> = [4, 5, 23, 18, 9, -5, 31];
// const array2: Array<number> = [18, 74, 88, 3];

// const mergedArray: Array<number> = merge(array1, array2);
// console.log(mergedArray);

const array1: Array<number> = [18, 74, 88, 3];
const array2: Array<number> = [4, 5, 23, 18, 9, -5, 31];

const mergedArray: Array<number> = merge(array1, array2);
console.log(mergedArray);

function checkWord(s1: string, s2: string) {
  let s3: string = '';
  for (let i = 0; i < s1.length; i += 1) {
    if (s2[i].includes(s1[i])) s3 += 'c';
    else if (s2.includes(s1[i])) s3 += 'p';
    else s3 += `a`;
  }
  return s3;
}

const attempts = ['rains', 'shout', 'scope', 'spoke'];

for (const word of attempts) {
  const result = checkWord(word, 'spoke');
  console.log(result);
}

type Candidate = {
  name: string;
  votes: Array<number>;
  funding: number;
};

// Create a single candidate
const edward: Candidate = {
  name: 'Edward Underwood',
  votes: [192, 147, 186, 114, 267],
  funding: 58182890,
};

// Make the other three candidates
const rose: Candidate = {
  name: 'Rose Olsen',
  votes: [48, 90, 12, 21, 13],
  funding: 78889263,
};

const leonard: Candidate = {
  name: 'Leonard Willis',
  votes: [206, 312, 121, 408, 382],
  funding: 36070689,
};
const nathanial: Candidate = {
  name: 'Nathaniel Taylor',
  votes: [37, 21, 38, 39, 29],
  funding: 6317921937,
};

const candidates: Array<Candidate> = [edward, rose, leonard, nathanial];

let total_votes: number = 0;
for (let i = 0; i < 5; i += 1) {
  total_votes += edward.votes[i] + rose.votes[i] + leonard.votes[i] + nathanial.votes[i];
}

let ed_votes: number = 0;
let rose_votes: number = 0;
let leo_votes: number = 0;
let nath_votes: number = 0;

for (let i = 0; i < 5; i += 1) {
  ed_votes = ed_votes += edward.votes[i];
  rose_votes = rose_votes += rose.votes[i];
  leo_votes = leo_votes += leonard.votes[i];
  nath_votes = nath_votes += nathanial.votes[i];
}

const ed_per: number = (ed_votes / total_votes) * 100;
const rose_per: number = (rose_votes / total_votes) * 100;
const leo_per: number = (leo_votes / total_votes) * 100;
const nath_per: number = (nath_votes / total_votes) * 100;

console.log('Edward Underwood -- ', ed_votes, 'votes -- ', ed_per.toFixed(2), '%');
console.log('Rose Olson -- ', rose_votes, 'votes -- ', rose_per.toFixed(2), '%');
console.log('Leonard Willis -- ', leo_votes, 'votes -- ', leo_per.toFixed(2), '%');
console.log('Nathaniel Taylor -- ', nath_votes, 'votes -- ', nath_per.toFixed(2), '%\n');

const votes_per_percinct: Array<number> = [];

for (let i = 0; i < 5; i += 1) {
  votes_per_percinct[i] = edward.votes[i] + rose.votes[i] + leonard.votes[i] + nathanial.votes[i];
}

const ed_per_per: Array<number> = [];
const rose_per_per: Array<number> = [];
const leo_per_per: Array<number> = [];
const nath_per_per: Array<number> = [];

for (let i = 0; i < 5; i += 1) {
  ed_per_per[i] = (edward.votes[i] / votes_per_percinct[i]) * 100;
  rose_per_per[i] = (rose.votes[i] / votes_per_percinct[i]) * 100;
  leo_per_per[i] = (leonard.votes[i] / votes_per_percinct[i]) * 100;
  nath_per_per[i] = (nathanial.votes[i] / votes_per_percinct[i]) * 100;
}

console.log('Edward Underwood:');
for (let i = 0; i < 5; i += 1) {
  console.log('Precinct ', i + 1, ' -- ', ed_per_per[i].toFixed(2), '%');
}

console.log('Rose Olson:');
for (let i = 0; i < 5; i += 1) {
  console.log('Precinct ', i + 1, ' -- ', rose_per_per[i].toFixed(2), '%');
}

console.log('Leonard Willis:');
for (let i = 0; i < 5; i += 1) {
  console.log('Precinct ', i + 1, ' -- ', leo_per_per[i].toFixed(2), '%');
}

console.log('Nathaniel Taylor:');
for (let i = 0; i < 5; i += 1) {
  console.log('Precinct ', i + 1, ' -- ', nath_per_per[i].toFixed(2), '%');
}

const ed_amont_spent_per_vote: number = edward.funding / ed_votes;
const rose_amount_spent_per_vote: number = rose.funding / rose_votes;
const leo_amount_spent_per_vote: number = leonard.funding / leo_votes;
const nath_amount_spent_per_vote: number = nathanial.funding / nath_votes;

console.log('\nEdward Underwood spent  $', ed_amont_spent_per_vote.toFixed(2), ' per vote');
console.log('Rose Olsen spent  $', rose_amount_spent_per_vote.toFixed(2), ' per vote');
console.log('Leonard Willis spent  $', leo_amount_spent_per_vote.toFixed(2), ' per vote');
console.log('Nathaniel Taylor spent  $', nath_amount_spent_per_vote.toFixed(2), ' per vote');

let win_or_lose1: Array<number> = [ed_per_per[0], rose_per_per[0], leo_per_per[0], nath_per_per[0]];
let win_or_lose2: Array<number> = [ed_per_per[1], rose_per_per[1], leo_per_per[1], nath_per_per[1]];
let win_or_lose3: Array<number> = [ed_per_per[2], rose_per_per[2], leo_per_per[2], nath_per_per[2]];
let win_or_lose4: Array<number> = [ed_per_per[3], rose_per_per[3], leo_per_per[3], nath_per_per[3]];
let win_or_lose5: Array<number> = [ed_per_per[4], rose_per_per[4], leo_per_per[4], nath_per_per[4]];

win_or_lose1 = win_or_lose1.sort((a, b) => b - a);
win_or_lose2 = win_or_lose2.sort((a, b) => b - a);
win_or_lose3 = win_or_lose3.sort((a, b) => b - a);
win_or_lose4 = win_or_lose4.sort((a, b) => b - a);
win_or_lose5 = win_or_lose5.sort((a, b) => b - a);

if (win_or_lose1[0] > 50) console.log('\nPrecint1: winner is --');
else console.log('\nPrecint1: Leonard Willis, Edward Underwood');

if (win_or_lose2[0] > 50) console.log('Precint2: winner is Leonard Willis');
else console.log('Precint2: Edward Underwood, Rose Olson');

if (win_or_lose3[0] > 50) console.log('Precint3: winner is Edward Underwood');
else console.log('Precint3: --');

if (win_or_lose4[0] > 50) console.log('Precint4: winner is Leonard Willis');
else console.log('Precint4: --');

if (win_or_lose5[0] > 50) console.log('Precint5: winner is Leonard Willis');
else console.log('Precint5: --');
