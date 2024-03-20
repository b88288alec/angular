import {IRowData} from "./IRowData";
import {IFaData} from "./IFaData";

export class SummaryRowData implements IRowData<IRowData<IFaData>> {
  accountId: string;
  accountName: string;
  data: Array<IRowData<IFaData>>;
  isSummary: boolean = true;

  constructor(accountId: string, accountName: string, data: Array<IRowData<IFaData>>) {
    this.accountId = accountId;
    this.accountName = accountName;
    this.data = data;
  }

  getValue(time: string): number | string {
    return this.data.map(item => item.getValue(time)).reduce((a, b) => (a as number) + (b as number), 0);
  }

  setValue(time: string, value: number | string): void {
  }

}
