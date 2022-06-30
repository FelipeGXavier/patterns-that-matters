export class TimeSpan {
  private days: number;
  private hours: number;
  private minutes: number;

  private constructor(days: number, hours: number, minutes: number) {
    this.days = days;
    this.hours = hours;
    this.minutes = minutes;
  }

  static fromDays(days: number) {
    return new this(days, 0, 0);
  }

  static fromHours(hours: number) {
    return new this(0, hours, 0);
  }

  static fromMinutes(minutes: number) {
    return new this(0, 0, minutes);
  }

  public getDays(): number {
    return this.days;
  }

  public getHours(): number {
    return this.hours;
  }

  public getMinutes(): number {
    return this.minutes;
  }
}
