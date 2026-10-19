function serializeQuery(params) {
  if (!params || typeof params !== 'object') {
    return '';
  }

  const pairs = [];
  for (const [key, value] of Object.entries(params)) {
    if (value === undefined || value === null) {
      continue;
    }
    if (Array.isArray(value)) {
      pairs.push(`${encodeURIComponent(key)}=${encodeURIComponent(value.join(','))}`);
    } else {
      pairs.push(`${encodeURIComponent(key)}=${encodeURIComponent(String(value))}`);
    }
  }

  return pairs.join('&');
}

module.exports = { serializeQuery };
