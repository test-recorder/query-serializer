function serializeQuery(params) {
  if (!params || typeof params !== 'object') {
    return '';
  }

  const pairs = [];
  for (const [key, value] of Object.entries(params)) {
    if (value === undefined || value === null) {
      continue;
    }
    if (Array.isArray(value)){
      for (const item of value) {
        if (item !== undefined && item !== null) {
          pairs.push(`${encodeURIComponent(key)}=${encodeURIComponent(String(item))}`);
        }
      }
    }else{
      pairs.push(`${encodeURIComponent(key)}=${encodeURIComponent(String(value))}`);
    }
  }
  return pairs.join('&');
}

module.exports = { serializeQuery };
