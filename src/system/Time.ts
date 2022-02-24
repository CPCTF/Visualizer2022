export class Time {
  private static startTime = -1
  private static _time = -1
  private static _deltaTime = -1
  private static prevTime = -1

  public static get time() {
    return this._time
  }
  public static get deltaTime() {
    return this._deltaTime
  }

  public static start(timestamp: number) {
    this.startTime = timestamp
    this.prevTime = timestamp
  }

  public static update(timestamp: number) {
    this._time = timestamp - this.startTime
    this._deltaTime = timestamp - this.prevTime
    this.prevTime = timestamp
  }
}
