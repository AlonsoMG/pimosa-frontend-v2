export class Accessory {
  name: string;
  description: string;

  constructor(name: string, description: string) {
    this.name = name;
    this.description = description;
  }
}

export class AccessoryLog {
  date: string;
  time: string;
  action: string;

  constructor(date: string, time: string, action: string) {
    this.date = date;
    this.time = time;
    this.action = action;
  }
}
