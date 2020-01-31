export class Work {

  name: string;
  description: string;
  startDate: string;
  programmedDate: string;
  endDate: string;

  constructor(
    name: string,
    description: string,
    startDate: string,
    programmedDate: string,
    endDate: string
  ) {
    this.name = name;
    this.description = description;
    this.startDate = startDate;
    this.programmedDate = programmedDate;
    this.endDate = endDate;
  }

}
