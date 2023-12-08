import { useEffect } from "react";
import { saveAs } from "file-saver";
//import * as XlsxPopulate from "xlsx-populate";

export default function Download() {
  function getSheetData(data:any, header:any) {
    var fields = Object.keys(data[0]);
    var sheetData = data.map(function (row:any) {
      return fields.map(function (fieldName) {
        return row[fieldName] ? row[fieldName] : "";
      });
    });
    sheetData.unshift(header);
    return sheetData;
  }

  async function saveAsExcel() {
    var data = [
      { name: "John", city: "Seattle" },
      { name: "Mike", city: "Los Angeles" },
      { name: "Zach", city: "New York" }
    ];
    let header = ["Name", "City"];

    // XlsxPopulate.fromBlankAsync().then(async (workbook:any) => {
    //   const sheet1 = workbook.sheet(0);
    //   const sheetData = getSheetData(data, header);
    //   const totalColumns = sheetData[0].length;

    //   sheet1.cell("A1").value(sheetData);
    //   const range = sheet1.usedRange();
    //   const endColumn = String.fromCharCode(64 + totalColumns);
    //   sheet1.row(1).style("bold", true);
    //   sheet1.range("A1:" + endColumn + "1").style("fill", "BFBFBF");
    //   range.style("border", true);
    //   return workbook.outputAsync().then((res: any) => {
    //     saveAs(res, "file.xlsx");
    //   });
    // });
  }

  return (
    <button type="button" onClick={saveAsExcel}>
      Download
    </button>
  );
}
