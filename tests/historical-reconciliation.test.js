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
