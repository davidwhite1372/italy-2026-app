'use strict';
const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const data = fs.readFileSync('data.js', 'utf8');
test('historical itinerary contains replacement flight and water taxi', () => {
  assert.match(data, /flight-dl112/);
  assert.match(data, /Hotel-booked water taxi/);
  assert.match(data, /tl-history-burano-lunch/);
  assert.match(data, /tl-history-venice-pre-tour-lunch/);
});

test('historical outbound references preserve superseded Copenhagen flights', () => {
  assert.match(data, /flightId:"flight-dl112"/);
  assert.match(data, /flight:"DL112"/);
  assert.match(data, /flight:"SK928"[^\n]*status:"Superseded"/);
  assert.match(data, /flight:"SK681"[^\n]*status:"Superseded"/);
});

test('Venice transfer is recorded as water taxi', () => {
  assert.match(data, /Hotel-booked water taxi/);
  assert.match(data, /08:15/);
  assert.match(data, /09:15/);
});

test('return journey uses Delta DL1636 and confirmed seats', () => {
  assert.match(data, /flight:"DL1636"/);
  assert.match(data, /24H \(David\), 24G \(Melody\)/);
});
