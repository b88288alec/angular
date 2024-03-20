import {IFaData} from "./IFaData";

export class AccountBalance implements IFaData {
  time: string;
  value: number;
  remark?: string;

  constructor(time: string, amount: number, remark?: string) {
    this.time = time;
    this.value = amount;
    this.remark = remark;
  }
}
