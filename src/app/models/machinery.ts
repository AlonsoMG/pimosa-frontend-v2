export class Machinery {

  name: string;
  code: string;
  cost: number;
  acquisitionDate: string;
  maintenanceCost: number;
  status: string;

  constructor(name: string, code: string, cost: number, acquisitionDate: string, maintenanceCost: number, status: string) {
    this.name = name;
    this.code = code;
    this.cost = cost;
    this.acquisitionDate = acquisitionDate;
    this.maintenanceCost = maintenanceCost;
    this.status = status;
  }

}
