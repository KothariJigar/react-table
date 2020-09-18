import React, { useState } from "react";
import styled from "styled-components";

import { colors } from "../../styles/constants";
import { data } from "../../data/table-data";
import InputField from "../form-elements/InputField";
import Pagination from "./Pagination";
import DropdownSelect, { OptionProps } from "../form-elements/DropdownSelect";

const TableContainer = styled.div`
  width: 80vw;
  margin: 2rem auto;
`;

const DropDown = styled.div``;

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const StyledTable = styled.table`
  width: 100%;
  border-spacing: 0;
  box-shadow: 0px 2px 5px ${colors.grey.standard};

  > thead > tr > th {
    padding-top: 12px;
    padding-bottom: 12px;
    text-align: left;
    background-color: ${colors.green.standard};
    color: #fff;
  }
  th,
  td {
    border: 1px solid #ddd;
    padding: 8px;
    word-break: break-all;
    min-width: 50px;
  }
  tr:nth-child(even) {
    background-color: ${colors.grey.gr50};
  }
  tr:hover {
    background-color: ${colors.grey.dark};
  }
`;

const PaginationWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Table: React.FC = () => {
  const { header, body } = data;
  const dropdownValue = { id: 10, text: "10" };

  const [searchValue, setSearchValue] = useState("");
  const [tableData, setTableData] = useState(body);
  const [rowsPerPage, setRowsPerPage] = useState(dropdownValue);
  const [currentPage, setCurrentPage] = useState(1);

  const filterTable = (value: string) => {
    setSearchValue(value);
    if (value) {
      const filteredResults: any = [];
      body.forEach((row: string[]) => {
        let found = false;
        for (let i = 0; i < row.length; i++) {
          if (
            row[i].trim().toLowerCase().indexOf(value.trim().toLowerCase()) >
              -1 &&
            !found
          ) {
            filteredResults.push(row);
            found = true;
          }
        }
      });

      setTableData(filteredResults);
    } else {
      setTableData(body);
    }
    setCurrentPage(1);
  };

  const paginationClickHandler = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const dropdownChangehandler = (selectedValue: OptionProps) => {
    setRowsPerPage(selectedValue);
  };

  const tableHeaders = header.map((heading: string, index: number) => (
    <th key={`th-${index}`}>{heading}</th>
  ));

  const start = rowsPerPage.id * (currentPage - 1);
  const end = rowsPerPage.id * currentPage;

  const tableBody = tableData
    .slice(start, end)
    .map((row: string[], index: number) => {
      return (
        <tr key={`tr-${index}`}>
          {row.map((data: string, i: number) => (
            <td key={`td-${index}-${i}`}>{data}</td>
          ))}
        </tr>
      );
    });

  const dropdownOptions = [
    {
      id: 10,
      text: "10",
    },
    {
      id: 25,
      text: "25",
    },
    {
      id: 50,
      text: "50",
    },
    {
      id: 100,
      text: "100",
    },
  ];

  return (
    <TableContainer>
      <FilterContainer>
        <DropDown>
          <DropdownSelect
            onChange={(selectedValue: OptionProps) =>
              dropdownChangehandler(selectedValue)
            }
            value={rowsPerPage}
            options={dropdownOptions}
          />
        </DropDown>
        <InputField
          uniqueId="1"
          name="searchField"
          placeholder="Search"
          value={searchValue}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            filterTable(e.target.value)
          }
        />
      </FilterContainer>
      <StyledTable>
        <thead>
          <tr>{tableHeaders}</tr>
        </thead>
        <tbody>{tableBody}</tbody>
      </StyledTable>
      <PaginationWrapper>
        <div>
          <p>
            Showing results {start + 1} to{" "}
            {end > tableData.length ? tableData.length : end} of{" "}
            {tableData.length}
          </p>
        </div>
        <Pagination
          totalRecords={tableData ? tableData.length : 0}
          recordsPerPage={rowsPerPage.id}
          currentPage={currentPage}
          pageClick={paginationClickHandler}
        />
      </PaginationWrapper>
    </TableContainer>
  );
};

export default Table;
