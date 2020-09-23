import React, { useState, useEffect } from "react";
import styled from "styled-components";
import UpArrow from "../../styles/images/sort_asc.png";
import DownArrow from "../../styles/images/sort_desc.png";
import BothArrows from "../../styles/images/sort_both.png";

import { dropdownOptions } from "./constants";
import { colors } from "../../styles/constants";
import InputField from "../form-elements/InputField";
import Pagination from "./Pagination";
import DropdownSelect, { OptionProps } from "../form-elements/DropdownSelect";

const TableContainer = styled.div`
  width: 80vw;
  margin: 2rem auto;
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const DropdownContainer = styled.div`
  display: flex;
  > span {
    margin: 0 5px;
    line-height: 40px;
  }
`;

const StyledTable = styled.table<TableProps>`
  width: 100%;
  border-spacing: 0;
  box-shadow: 0px 2px 5px ${colors.grey.standard};

  > thead > tr > th {
    padding-top: 12px;
    padding-bottom: 12px;
    text-align: left;
    background-color: ${colors.green.standard};
    color: #fff;
    word-break: break-word;
  }
  th,
  td {
    border: 1px solid #ddd;
    padding: 8px;
    word-break: break-word;
    min-width: 50px;
  }
  tr:nth-child(even) {
    ${(props) => props.isStriped && `background-color: ${colors.grey.gr50}`};
  }
  tr:hover {
    ${(props) => props.hovered && `background-color: ${colors.grey.dark}`};
  }
`;

const StyledHeading = styled.th<THProps>`
  ${(props) => props.customWidth && `width: ${props.customWidth}`}
`;

const HeadingContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  > img {
    max-height: 20px;
  }
`;

const PaginationWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

interface DataTableProps {
  data: {
    columns: ColumnProps[];
    rows: any[];
  };
  isStriped?: boolean;
  hovered?: boolean;
}

export interface ColumnProps {
  label: string;
  field: string;
  width?: string;
  sort?: string;
}

interface TableProps {
  isStriped?: boolean;
  hovered?: boolean;
}

interface THProps {
  customWidth?: string;
}

const Table: React.FC<DataTableProps> = ({ data, isStriped, hovered }) => {
  const { columns, rows } = data;
  let defaultSortColumn: ColumnProps | undefined = columns.find(
    (column: ColumnProps) => column.sort !== undefined
  );
  if (!defaultSortColumn) {
    defaultSortColumn = columns[0];
  }

  const [searchValue, setSearchValue] = useState("");
  const [tableData, setTableData] = useState<any[]>([]);
  const [visibleRows, setVisibleRows] = useState<any[]>([]);
  const [rowsPerPage, setRowsPerPage] = useState(dropdownOptions[0]);
  const [currentPage, setCurrentPage] = useState(1);
  const [sortingColumn, setSortingColumn] = useState(defaultSortColumn.field);
  const [sortingOrder, setSortingOrder] = useState("");

  const start = rowsPerPage.id * (currentPage - 1);
  const end = rowsPerPage.id * currentPage;

  useEffect(() => {
    if (defaultSortColumn) {
      const columName = defaultSortColumn.field;
      const sortType = defaultSortColumn.sort
        ? defaultSortColumn.sort.trim().toLowerCase() === "asc" ||
          defaultSortColumn.sort.trim().toLowerCase() === "desc"
          ? defaultSortColumn.sort
          : "asc"
        : "asc";
      const sortedTable = sortTable(rows, columName, sortType);
      setTableData(sortedTable);
      setSortingColumn(defaultSortColumn.field);
      setSortingOrder(sortType);
    } else {
      setTableData(rows);
      setSortingOrder("asc");
    }
  }, []);

  useEffect(() => {
    const tableBody = tableData
      .slice(start, end)
      .map((row: any, index: number) => {
        return (
          <tr key={`tr-${index}`}>
            {columns.map((column: ColumnProps, i: number) => (
              <td key={`td-${index}-${i}`}>{row[column.field]}</td>
            ))}
          </tr>
        );
      });
    setVisibleRows(tableBody);
  }, [tableData, columns, end, start, sortingColumn, sortingOrder]);

  const sortTable = (data: any[], columnName: string, sortType: string) => {
    const defaultSort = data.sort((first: any, second: any) => {
      if (sortType === "asc") {
        if (first[columnName] < second[columnName]) {
          return -1;
        }
        if (first[columnName] > second[columnName]) {
          return 1;
        }
        return 0;
      } else {
        if (first[columnName] > second[columnName]) {
          return -1;
        }
        if (first[columnName] < second[columnName]) {
          return 1;
        }
        return 0;
      }
    });
    return defaultSort;
  };

  // const filterTable = (inputValue: string) => {
  //   setSearchValue(inputValue);
  //   if (inputValue) {
  //     const filteredResults: any = [];
  //     rows.forEach((row: any) => {
  //       let found = false;
  //       for (const [key, value] of Object.entries(row)) {
  //         const rowValue = value as string;

  //         if (
  //           rowValue
  //             .toString()
  //             .trim()
  //             .toLowerCase()
  //             .indexOf(inputValue.trim().toLowerCase()) > -1 &&
  //           !found
  //         ) {
  //           filteredResults.push(row);
  //           found = true;
  //         }
  //       }
  //     });

  //     setTableData(filteredResults);
  //   } else {
  //     setTableData(rows);
  //   }
  //   setCurrentPage(1);
  // };

  const filterTable = (inputValue: string) => {
    setSearchValue(inputValue);
    if (inputValue) {
      const searchInputArray = inputValue.split(" ");
      let filteredResults: any = rows.slice(0);
      filteredResults.forEach((row: any) => {
        let found = false;
        for (const [key, value] of Object.entries(row)) {
          const rowValue = value as string;
          if (!found) {
            const exists = searchInputArray.find(
              (value: string) =>
                rowValue
                  .toString()
                  .trim()
                  .toLowerCase()
                  .indexOf(value.trim().toLowerCase()) > -1
            );
            if (exists) {
              filteredResults.push(row);
              found = true;
            }
          } else {
            break;
          }
        }
      });

      setTableData(filteredResults);
    } else {
      setTableData(rows);
    }
    setCurrentPage(1);
  };

  const paginationClickHandler = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const dropdownChangehandler = (selectedValue: OptionProps) => {
    setRowsPerPage(selectedValue);
    setCurrentPage(1);
  };

  const showimage = (srcpath: string) => {
    return <img src={srcpath} alt="sort icon" />;
  };

  const handleSort = (field: string) => {
    let sortType = "";
    if (field === sortingColumn) {
      sortType = sortingOrder === "asc" ? "desc" : "asc";
    } else {
      sortType = "asc";
    }
    setSortingColumn(field);
    setSortingOrder(sortType);
    const sortedTable = sortTable(tableData, field, sortType);
    setTableData(sortedTable);
    setCurrentPage(1);
  };

  const tableHeaders = columns.map((column: ColumnProps, index: number) => (
    <StyledHeading
      key={`th-${index}`}
      customWidth={column.width}
      onClick={() => handleSort(column.field)}
    >
      <HeadingContainer>
        {column.label} {""}
        {column.field === sortingColumn
          ? sortingOrder === "asc"
            ? showimage(UpArrow)
            : showimage(DownArrow)
          : showimage(BothArrows)}
      </HeadingContainer>
    </StyledHeading>
  ));

  return (
    <TableContainer>
      <FilterContainer>
        <div>
          <DropdownContainer>
            <span>Show </span>
            <DropdownSelect
              onChange={(selectedValue: OptionProps) =>
                dropdownChangehandler(selectedValue)
              }
              value={rowsPerPage}
              options={dropdownOptions}
            />{" "}
            <span>entries</span>
          </DropdownContainer>
        </div>
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
      <StyledTable isStriped={isStriped} hovered={hovered}>
        <thead>
          <tr>{tableHeaders}</tr>
        </thead>
        <tbody>
          {visibleRows && visibleRows.length ? (
            visibleRows
          ) : (
            <tr>
              <td colSpan={columns.length}>No records available</td>
            </tr>
          )}
        </tbody>
      </StyledTable>
      <PaginationWrapper>
        <div>
          <p>
            Showing results {tableData.length ? start + 1 : start} to{" "}
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
