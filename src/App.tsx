import React, { useState, useEffect } from "react";

import Table from "./components/tables/Tables";
import { getDummyData } from "./api/getTableData";

const App = () => {
  const defaultRow = {
    id: 0,
    employee_name: "Fetching details please wait",
    employee_age: "-",
    employee_salary: "-",
  };
  const [tableData, setTableData] = useState([defaultRow]);

  const data = {
    columns: [
      {
        label: "ID",
        field: "id",
        width: "10%",
        isNumeric: true,
      },
      {
        label: "Employee Name",
        field: "employee_name",
        width: "30%",
      },
      {
        label: "Age",
        field: "employee_age",
        width: "30%",
        isNumeric: true,
      },
      {
        label: "Salary",
        field: "employee_salary",
        width: "20%",
        isNumeric: true,
      },
    ],
    rows: tableData,
  };

  useEffect(() => {
    // make API call to fetch dummy data
    getDummyData().then((result: any) => {
      setTableData(result.data);
    });
  }, []);

  return (
    <>
      <Table data={data} isStriped hovered />
    </>
  );
};

export default App;
