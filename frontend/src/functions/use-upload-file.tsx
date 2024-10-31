import { useState } from "react";
import Papa from "papaparse";

export function useUploadFile() {
  const [colDefs, setColDefs] = useState([]);
  const [rowData, setRowData] = useState([]);
  const [csv, setCSV] = useState(null);

  const handleOnDrop = (file: File) => {
    Papa.parse(file, {
      complete: (results: Papa.ParseResult<string[]>) => {
        setCSV(results);
        const fieldsArray = createFieldsArray(results.data[1]);
        const resultArray = createResultArray(results.data.slice(2), fieldsArray);
        setColDefs(fieldsArray);
        setRowData(resultArray);
      },
    });
  };

  const createFieldsArray = (data: string[]) => {
    return data.map((value) => ({ field: value }));
  };

  const createResultArray = (data: string[][], fieldsArray: { field: string }[]) => {
    return data.map((entry) => {
      return fieldsArray.reduce((obj, { field }, index) => {
        obj[field] = entry[index];
        return obj;
      }, {});
    });
  };

  return {
    colDefs,
    rowData,
    csv,
    handleOnDrop,
  };
}
