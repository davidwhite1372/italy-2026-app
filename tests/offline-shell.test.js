// Verify offline installation retains the two critical application files.
const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');
const path = require('node:path');

const source = fs.readFileSync(path.join(__dirname, '..', 'sw.js'), 'utf8');

test('service worker caches core files even if an optional guide fails', async () => {
  const handlers = {};
  const stored = new Map();
  let skipped = false;
  const scope = {
    self: {
      addEventListener: (name, handler) => { handlers[name] = handler; },
      skipWaiting: () => { skipped = true; }
    },
    caches: {
      open: async () => ({ put: async (key, response) => { stored.set(key, response); } })
    },
    fetch: async (asset) => {
      if (asset.includes('/guides/')) throw new Error('Optional guide unavailable');
      return { ok: true, status: 200, type: 'basic' };
    },
    console: { warn: () => {} },
    URL, Set, Promise, Error
  };
  vm.runInNewContext(source, scope);
  let install;
  handlers.install({ waitUntil: promise => { install = promise; } });
  await install;
  assert.equal(skipped, true);
  assert.equal(stored.has('./index.html'), true);
  assert.equal(stored.has('./data.js'), true);
});

test('service worker rejects install when a core file is unavailable', async () => {
  const handlers = {};
  const scope = {
    self: { addEventListener: (name, handler) => { handlers[name] = handler; }, skipWaiting: () => {} },
    caches: { open: async () => ({ put: async () => {} }) },
    fetch: async (asset) => asset === './data.js' ? { ok: false, status: 404, type: 'basic' } : { ok: true, status: 200, type: 'basic' },
    console: { warn: () => {} },
    URL, Set, Promise, Error
  };
  vm.runInNewContext(source, scope);
  let install;
  handlers.install({ waitUntil: promise => { install = promise; } });
  await assert.rejects(install, /Required offline assets missing/);
});
