import {GeneralRowData} from "./GeneralRowData";
import {AccountBalance} from "./AccountBalance";
import {SummaryRowData} from "./SummaryRowData";
import {IRowData} from "./IRowData";

const id1700 = new GeneralRowData("1700", "現金及約當現金", [
  new AccountBalance("2021-12-31", 15368, "現金"),
  new AccountBalance("2022-12-31", 9293),
  new AccountBalance("2023-12-31", 9088)]);
const id1560 = new GeneralRowData("1560", "金融資產-流動", [
  new AccountBalance("2021-12-31", 0),
  new AccountBalance("2022-12-31", 0),
  new AccountBalance("2023-12-31", 0)
]);
const id1540 = new GeneralRowData("1540", "應收帳款及票據-關係人", [
  new AccountBalance("2021-12-31", 60),
  new AccountBalance("2022-12-31", 0),
  new AccountBalance("2023-12-31", 0)
]);
const id1640 = new GeneralRowData("1640", "應收帳款及票據-非關係人", [
  new AccountBalance("2021-12-31", 0),
  new AccountBalance("2022-12-31", 0),
  new AccountBalance("2023-12-31", 0)
]);
const id1575 = new GeneralRowData("1640", "應收建造合約款", [
  new AccountBalance("2021-12-31", 0),
  new AccountBalance("2022-12-31", 0),
  new AccountBalance("2023-12-31", 0)
]);
const id1680 = new GeneralRowData("1680", "其他應收款", [
  new AccountBalance("2021-12-31", 0),
  new AccountBalance("2022-12-31", 0),
  new AccountBalance("2023-12-31", 40)
]);
const id1595 = new GeneralRowData("1595", "資金貸予他人", [
  new AccountBalance("2021-12-31", 26001),
  new AccountBalance("2022-12-31", 20001),
  new AccountBalance("2023-12-31", 20401)
]);
const id1520 = new GeneralRowData("1520", "存貨", [
  new AccountBalance("2021-12-31", 1196627),
  new AccountBalance("2022-12-31", 1347874),
  new AccountBalance("2023-12-31", 1590582)
]);

const summary = new SummaryRowData("0", "流動資產", [id1700, id1560, id1540, id1640, id1575, id1680, id1595, id1520]);

export const rowData: IRowData<unknown>[] = [id1700, id1560, id1540, id1640, id1575, id1680, id1595, id1520, summary];
