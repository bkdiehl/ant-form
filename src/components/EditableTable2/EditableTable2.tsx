import { useEffect, useState } from 'react';
import { usePagination, useTable } from 'react-table';

import { EditableCell2 } from './EditableCell2';
import { EditableRow2, MemoizedEditableRow2 } from './EditableRow2';

const defaultColumn = {
  Cell: EditableCell2,
};

export function EditableTable2({ columns, data }) {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    rows,
    page,
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    state: { pageIndex, pageSize },
  } = useTable({
    columns,
    data,
    defaultColumn,
  });

  const handleGetItemSize = (index) => {
    return 49;
  };

  return (
    <>
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()}>{column.render('title')}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows?.map((row, i) => {
            prepareRow(row);
            console.log('row', row);
            return <MemoizedEditableRow2 row={row} key={i} />;
            // return (
            //   <tr {...row.getRowProps()} key={i}>
            //     {row.cells.map((cell) => {
            //       return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>;
            //     })}
            //   </tr>
            // );
          })}
        </tbody>
      </table>
    </>
  );
}
