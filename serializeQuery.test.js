const test = require('node:test');
const assert = require('node:assert/strict');
const { serializeQuery } = require('./serializeQuery');

test('returns empty string for empty object or null', () => {
  assert.equal(serializeQuery({}), '');
  assert.equal(serializeQuery(null), '');
});

test('serializes single primitive key-value pairs', () => {
  assert.equal(serializeQuery({ role: 'admin' }), 'role=admin');
});

test('serializes numeric and boolean values', () => {
  assert.equal(serializeQuery({ page: 2, active: true }), 'page=2&active=true');
});

test('serializes array parameters with repeated keys', () => {
  assert.equal(
    serializeQuery({ filter: ['first', 'second'] }),
    'filter=first&filter=second'
  );
});
