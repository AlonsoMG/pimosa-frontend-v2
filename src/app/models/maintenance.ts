export class Maintenance {
  date: string;
  time: string;
  description: string;
  cost: number;

  constructor(date: string, time: string, description: string, cost: number) {
    this.date = date;
    this.time = time;
    this.description = description;
    this.cost = cost;
  }
}
