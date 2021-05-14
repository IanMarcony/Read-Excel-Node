const excelToJson = require("convert-excel-to-json");
const path = require("path");
const filePath = path.resolve(__dirname, "TESTE-PARA-O-IAN.xlsx");

const result = excelToJson({
  sourceFile: filePath,
  header: {
    rows: 1,
  },
  columnToKey: {
    A: "{{A1}}",
    B: "{{B1}}",
    C: "{{C1}}",
    D: "{{D1}}",
    E: "{{E1}}",
    F: "{{F1}}",
    G: "{{G1}}",
    H: "{{H1}}",
    I: "{{I1}}",
    J: "{{J1}}",
  },
  sheets: ["Exportar Planilha"],
});

console.log(result);
