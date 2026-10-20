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
test('properly URL-encodes special characters in array values', () => {
  assert.equal(
    serializeQuery({ tags: ['web dev', 'node&express']}),
    'tags=web%20dev&tags=node%26express'
  );
});
test('handles empty arrays without appending stray keys', () => {
  assert.equal(serializeQuery({ items: [], status: 'ready'}), 'status=ready');
});