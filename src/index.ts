export class RequestDeduplicator {
  private inFlight = new Map<string, Promise<any>>();
  
  async execute<T>(key: string, fn: () => Promise<T>): Promise<T> {
    if (this.inFlight.has(key)) {
      return this.inFlight.get(key)!;
    }
    
    const promise = fn().finally(() => this.inFlight.delete(key));
    this.inFlight.set(key, promise);
    return promise;
  }
}
