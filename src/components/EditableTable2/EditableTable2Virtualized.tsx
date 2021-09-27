import { useCallback, useEffect, useMemo, useState } from 'react';
import { useBlockLayout, useFlexLayout, usePagination, useTable } from 'react-table';
import { FixedSizeList, VariableSizeList } from 'react-window';

import { MemoizedEditableRow2Virtualized } from 'src/components/EditableTable2/EditableRow2Virtualized';

import { EditableCell2, MemoizedEditableCell2 } from './EditableCell2';
import { EditableRow2, MemoizedEditableRow2 } from './EditableRow2';
import styles from './EditableTable2.module.scss';

const defaultColumn = {
  Cell: EditableCell2,
  width: 300,
};

const scrollbarWidth = () => {
  // thanks too https://davidwalsh.name/detect-scrollbar-width
  const scrollDiv = document.createElement('div');
  scrollDiv.setAttribute(
    'style',
    'width: 100px; height: 100px; overflow: scroll; position:absolute; top:-9999px;',
  );
  document.body.appendChild(scrollDiv);
  const scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;
  document.body.removeChild(scrollDiv);
  return scrollbarWidth;
};

export function EditableTable2Virtualized({ columns, data }) {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    rows,
    // totalColumnsWidth,
    // page,
    // canPreviousPage,
    // canNextPage,
    // pageOptions,
    // pageCount,
    // gotoPage,
    // nextPage,
    // previousPage,
    // setPageSize,
    state: { pageIndex, pageSize },
  } = useTable(
    {
      columns,
      data,
      defaultColumn,
    },
    useFlexLayout,
  );
  const scrollBarSize = useMemo(() => scrollbarWidth(), []);
  const RenderRow = useCallback(
    ({ index, style }) => {
      const row = rows[index];
      prepareRow(row);
      console.log('row', row);
      return <MemoizedEditableRow2Virtualized row={row} style={style} key={index} />;
    },
    [prepareRow, rows],
  );

  return (
    <>
      <div {...getTableProps()} className={styles.table}>
        <div className="t-head">
          {headerGroups.map((headerGroup) => (
            <div {...headerGroup.getHeaderGroupProps()} className="tr">
              {headerGroup.headers.map((column) => (
                <div {...column.getHeaderProps()} className="th">
                  {column.render('title')}
                </div>
              ))}
            </div>
          ))}
        </div>
        <div {...getTableBodyProps()} className="t-body">
          <VariableSizeList
            height={600}
            itemCount={rows.length}
            itemSize={() => 49}
            // width={totalColumnsWidth + scrollBarSize}
            // width={`calc(100% - ${scrollBarSize}px)`}
            // width="100%"
          >
            {RenderRow}
          </VariableSizeList>
        </div>
      </div>
    </>
  );
}
