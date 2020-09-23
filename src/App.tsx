import React from "react";
import Table from "./components/tables/Tables";

const App = () => {
  const data = {
    columns: [
      {
        label: "Sr No",
        field: "srNo",
        width: "10%",
      },
      {
        label: "First Name",
        field: "firstName",
        width: "30%",
      },
      {
        label: "Last Name",
        field: "lastName",
        width: "30%",
      },
      {
        label: "Employee ID",
        field: "empId",
        width: "20%",
      },
      {
        label: "Action",
        field: "action",
        width: "10%",
      },
    ],
    rows: [
      {
        srNo: 2,
        firstName: "John",
        lastName: "Doe",
        empId: 46017970,
        action: <button onClick={() => actionHandler(2)}>Actoin</button>,
      },
      {
        srNo: 1,
        firstName: "Jigar",
        lastName: "Kothari",
        empId: 46017969,
        action: <button onClick={() => actionHandler(1)}>Actoin</button>,
      },
      {
        srNo: 3,
        firstName: "Mary",
        lastName: "Jane",
        empId: 46017971,
        action: <button onClick={() => actionHandler(3)}>Actoin</button>,
      },
      {
        srNo: 4,
        firstName: "Jigar",
        lastName: "Kothari",
        empId: 46017969,
        action: <button onClick={() => actionHandler(4)}>Actoin</button>,
      },
      {
        srNo: 5,
        firstName: "John",
        lastName: "Doe",
        empId: 46017970,
        action: <button onClick={() => actionHandler(5)}>Actoin</button>,
      },
      {
        srNo: 6,
        firstName: "Mary",
        lastName: "Jane",
        empId: 46017971,
        action: <button onClick={() => actionHandler(6)}>Actoin</button>,
      },
      {
        srNo: 7,
        firstName: "Jigar",
        lastName: "Kothari",
        empId: 46017969,
        action: <button onClick={() => actionHandler(7)}>Actoin</button>,
      },
      {
        srNo: 8,
        firstName: "John",
        lastName: "Doe",
        empId: 46017970,
        action: <button onClick={() => actionHandler(8)}>Actoin</button>,
      },
      {
        srNo: 9,
        firstName: "Mary",
        lastName: "Jane",
        empId: 46017971,
        action: <button onClick={() => actionHandler(9)}>Actoin</button>,
      },
      {
        srNo: 10,
        firstName: "Jigar",
        lastName: "Kothari",
        empId: 46017969,
        action: <button onClick={() => actionHandler(10)}>Actoin</button>,
      },
      {
        srNo: 11,
        firstName: "John",
        lastName: "Doe",
        empId: 46017970,
        action: <button onClick={() => actionHandler(11)}>Actoin</button>,
      },
      {
        srNo: 12,
        firstName: "Mary",
        lastName: "Jane",
        empId: 46017971,
        action: <button onClick={() => actionHandler(12)}>Actoin</button>,
      },
      {
        srNo: 13,
        firstName: "Jigar",
        lastName: "Kothari",
        empId: 46017969,
        action: <button onClick={() => actionHandler(13)}>Actoin</button>,
      },
      {
        srNo: 14,
        firstName: "John",
        lastName: "Doe",
        empId: 46017970,
        action: <button onClick={() => actionHandler(14)}>Actoin</button>,
      },
      {
        srNo: 15,
        firstName: "Mary",
        lastName: "Jane",
        empId: 46017971,
        action: <button onClick={() => actionHandler(15)}>Actoin</button>,
      },
      {
        srNo: 16,
        firstName: "Jigar",
        lastName: "Kothari",
        empId: 46017969,
        action: <button onClick={() => actionHandler(16)}>Actoin</button>,
      },
      {
        srNo: 17,
        firstName: "John",
        lastName: "Doe",
        empId: 46017970,
        action: <button onClick={() => actionHandler(17)}>Actoin</button>,
      },
      {
        srNo: 18,
        firstName: "Mary",
        lastName: "Jane",
        empId: 46017971,
        action: <button onClick={() => actionHandler(18)}>Actoin</button>,
      },
      {
        srNo: 19,
        firstName: "Jigar",
        lastName: "Kothari",
        empId: 46017969,
        action: <button onClick={() => actionHandler(19)}>Actoin</button>,
      },
      {
        srNo: 20,
        firstName: "John",
        lastName: "Doe",
        empId: 46017970,
        action: <button onClick={() => actionHandler(20)}>Actoin</button>,
      },
      {
        srNo: 21,
        firstName: "Mary",
        lastName: "Jane",
        empId: 46017971,
        action: <button onClick={() => actionHandler(21)}>Actoin</button>,
      },
      {
        srNo: 22,
        firstName: "Jigar",
        lastName: "Kothari",
        empId: 46017969,
        action: <button onClick={() => actionHandler(22)}>Actoin</button>,
      },
      {
        srNo: 23,
        firstName: "John",
        lastName: "Doe",
        empId: 46017970,
        action: <button onClick={() => actionHandler(23)}>Actoin</button>,
      },
      {
        srNo: 24,
        firstName: "Mary",
        lastName: "Jane",
        empId: 46017971,
        action: <button onClick={() => actionHandler(24)}>Actoin</button>,
      },
      {
        srNo: 25,
        firstName: "Jigar",
        lastName: "Kothari",
        empId: 46017969,
        action: <button onClick={() => actionHandler(25)}>Actoin</button>,
      },
      {
        srNo: 26,
        firstName: "John",
        lastName: "Doe",
        empId: 46017970,
        action: <button onClick={() => actionHandler(26)}>Actoin</button>,
      },
      {
        srNo: 27,
        firstName: "Mary",
        lastName: "Jane",
        empId: 46017971,
        action: <button onClick={() => actionHandler(27)}>Actoin</button>,
      },
    ],
  };

  const actionHandler = (srNo: number) => {
    alert(srNo);
  };

  return (
    <>
      <Table data={data} isStriped hovered />
    </>
  );
};

export default App;
