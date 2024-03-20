import {IFaData} from "./IFaData";

export interface IRowData<T> {
  accountId: string;
  accountName: string;
  data: Array<T>;
  isSummary: boolean;
  getValue(time: string): number | string;
  setValue(time: string, value: number | string): void;
}
