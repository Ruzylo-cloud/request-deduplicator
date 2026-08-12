# Request Deduplicator

Deduplicate in-flight requests automatically. Saves costs, prevents thundering herd.

```javascript
const dedup = new RequestDeduplicator();
const result = await dedup.execute('user:123', () => fetchUser(123));
// Second call waits for first result, doesn't make new request
```

Solves: Duplicate API calls, cache stampedes, network waste.
License: MIT

Sponsored by [Ferrow](https://ferrow.ai)
