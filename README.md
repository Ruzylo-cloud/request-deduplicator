# Request Deduplicator
![CI](https://github.com/FerrowAI/request-deduplicator/actions/workflows/ci.yml/badge.svg)

Deduplicate in-flight requests automatically. Saves costs, prevents thundering herd.

```javascript
const dedup = new RequestDeduplicator();
const result = await dedup.execute('user:123', () => fetchUser(123));
// Second call waits for first result, doesn't make new request
```

Solves: Duplicate API calls, cache stampedes, network waste.
License: MIT

Sponsored by [Ferrow](https://ferrow.ai)

---
Part of the [ferrow-toolkit](https://github.com/FerrowAI/ferrow-toolkit) collection · Sponsored by [Ferrow](https://ferrow.ai)
