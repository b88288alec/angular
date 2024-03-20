import {AccountBalance} from "./AccountBalance";
import {IRowData} from "./IRowData";
import {IFaData} from "./IFaData";

export class GeneralRowData implements IRowData<IFaData> {
  accountId: string;
  accountName: string;
  data: Array<AccountBalance>;
  isSummary: boolean = false;

  constructor(accountId: string, accountName: string, data: Array<AccountBalance>) {
    this.accountId = accountId;
    this.accountName = accountName;
    this.data = data;
  }

  getValue(time: string): number | string {
    return this.data.filter(item => item.time === time)[0].value;
  }

  setValue(time: string, value: number | string): void {
    this.data.filter(item => item.time === time)[0].value = value as number;
  }
}
