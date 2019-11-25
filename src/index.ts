export interface IEvent {
  set(key: string, records: [number]): void;
  get(key: string): [number] | undefined;
  dump(): object;
}

export class Event implements IEvent {
  private logs: Map<string, [number]>;
  constructor() {
    this.logs = new Map();
    //    this.logs = new Object()
  }
  public set(key: string, records: [number]): void {
    this.logs.set(key, records);
  }
  public get(key: string): [number] | undefined {
    return this.logs.get(key);
  }

  public push(key: string, value: number): void {
    const isExist = key in this.logs;
    if (isExist) {
      const records: [number] | undefined = this.logs.get(key);
      if (records !== undefined) {
        records.push(value);
      }
    } else {
      this.logs.set(key, [value]);
    }
  }

  public dump(): object {
    return this.logs;
  }
}
