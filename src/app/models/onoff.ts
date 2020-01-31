export class OnOff {
  date: string;
  time: string;
  action: string;

  constructor(date: string, time: string, action: string) {
    this.date = date;
    this.time = time;
    this.action = action;
  }
}
