export class Time {
  private startTime = -1
  private _time = -1
  private _deltaTime = -1
  private prevTime = -1

  constructor() {
    this.startTime = performance.now()
  }

  public get time() {
    return this._time
  }
  public get deltaTime() {
    return this._deltaTime
  }

  public start(timestamp: number) {
    this.startTime = timestamp
    this.prevTime = timestamp
  }

  public update(timestamp: number) {
    this._time = timestamp - this.startTime
    this._deltaTime = timestamp - this.prevTime
    this.prevTime = timestamp
  }
}
