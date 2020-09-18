import React from "react";
import styled from "styled-components";

import Button from "../form-elements/Button";

const PaginationWrapper = styled.div`
  margin-top: 20px;
  white-space: nowrap;
`;

const PaginationUl = styled.ul`
  display: flex;
  white-space: nowrap;
  margin: 2px 0;

  > li {
    display: flex;
    > button {
      margin: 0 5px;
    }
  }
`;

interface PaginationProps {
  totalRecords: number;
  recordsPerPage: number;
  currentPage: number;
  pageClick: (pageNumber: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  totalRecords,
  recordsPerPage,
  currentPage = 1,
  pageClick,
}) => {
  const changePageHandler = (pageNumber: number) => {
    pageClick(pageNumber);
  };
  const perPageRecords = recordsPerPage > 0 ? recordsPerPage : totalRecords;
  const totalPages = Math.ceil(totalRecords / perPageRecords);
  const adjacents = 3;
  let pagination: React.ReactNode[] = [];

  if (totalPages < 7 + adjacents * 2) {
    //not enough pages to bother breaking it up
    for (let i = 1; i <= totalPages; i++) {
      pagination.push(
        <li key={`page-${i}`}>
          <Button
            disabled={i === currentPage}
            label={i.toString()}
            onClick={() => changePageHandler(i)}
          />
        </li>
      );
    }
  } else if (totalPages > 5 + adjacents * 2) {
    //enough pages to hide some

    //close to beginning; only hide later pages
    if (currentPage < 1 + adjacents * 2) {
      for (let i = 1; i < 4 + adjacents * 2; i++) {
        pagination.push(
          <li key={`page-${i}`}>
            <Button
              disabled={i === currentPage}
              label={i.toString()}
              onClick={() => changePageHandler(i)}
            />
          </li>
        );
      }
      // Some "..." to show there are more pages in between
      pagination.push(<li key={`empty`}>...</li>);

      // Adding last two pages
      pagination.push(
        <li key={`page-${totalPages - 1}`}>
          <Button
            disabled={totalPages - 1 === currentPage}
            label={(totalPages - 1).toString()}
            onClick={() => changePageHandler(totalPages - 1)}
          />
        </li>
      );
      pagination.push(
        <li key={`page-${totalPages}`}>
          <Button
            disabled={totalPages === currentPage}
            label={totalPages.toString()}
            onClick={() => changePageHandler(totalPages)}
          />
        </li>
      );
    } else if (
      totalPages - adjacents * 2 > currentPage &&
      currentPage > adjacents * 2
    ) {
      // Show first two page
      pagination.push(
        <li key={`page-1`}>
          <Button
            disabled={1 === currentPage}
            label="1"
            onClick={() => changePageHandler(1)}
          />
        </li>
      );
      pagination.push(
        <li key={`page-2`}>
          <Button
            disabled={2 === currentPage}
            label="2"
            onClick={() => changePageHandler(2)}
          />
        </li>
      );

      for (let i = currentPage - adjacents; i <= currentPage + adjacents; i++) {
        pagination.push(
          <li key={`page-${i}`}>
            <Button
              disabled={i === currentPage}
              label={i.toString()}
              onClick={() => changePageHandler(i)}
            />
          </li>
        );
      }

      // Some "..." to show there are more pages in between
      pagination.push(<li key={`empty`}>...</li>);

      // Adding last two pages
      pagination.push(
        <li key={`page-${totalPages - 1}`}>
          <Button
            disabled={totalPages - 1 === currentPage}
            label={(totalPages - 1).toString()}
            onClick={() => changePageHandler(totalPages - 1)}
          />
        </li>
      );
      pagination.push(
        <li key={`page-${totalPages}`}>
          <Button
            disabled={totalPages === currentPage}
            label={totalPages.toString()}
            onClick={() => changePageHandler(totalPages)}
          />
        </li>
      );
    } else {
      //close to end; only hide early pages

      // Show first two page
      pagination.push(
        <li key={`page-1`}>
          <Button
            disabled={1 === currentPage}
            label="1"
            onClick={() => changePageHandler(1)}
          />
        </li>
      );
      pagination.push(
        <li key={`page-2`}>
          <Button
            disabled={2 === currentPage}
            label="2"
            onClick={() => changePageHandler(2)}
          />
        </li>
      );

      // Some "..." to show there are more pages in between
      pagination.push(<li key={`empty`}>...</li>);

      for (let i = totalPages - (2 + adjacents * 2); i <= totalPages; i++) {
        pagination.push(
          <li key={`page-${i}`}>
            <Button
              disabled={i === currentPage}
              label={i.toString()}
              onClick={() => changePageHandler(i)}
            />
          </li>
        );
      }
    }
  }

  return (
    <>
      {totalPages > 1 && (
        <PaginationWrapper>
          <PaginationUl>{pagination}</PaginationUl>
        </PaginationWrapper>
      )}
    </>
  );
};

export default Pagination;
