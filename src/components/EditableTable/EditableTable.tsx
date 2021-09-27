import { useEffect, useMemo, useState } from 'react';

import { Button, Table } from 'antd';
import { TableComponents } from 'rc-table/lib/interface';
import { EditableCell } from 'src/components/EditableTable/EditableCell';
import { EditableRow, MemoizedEditableRow } from 'src/components/EditableTable/EditableRow';

type Props = {
  columns;
  dataSource;
  rowKey?: string;
  components?: TableComponents<any>;
};

export function EditableTable({
  columns,
  dataSource,
  rowKey = 'key',
  components: initialComponents,
  ...props
}: Props) {
  const components = useMemo(
    () =>
      initialComponents ?? {
        body: {
          row: EditableRow,
          cell: EditableCell,
        },
      },
    [initialComponents],
  );

  const mergedColumns = useMemo(
    () =>
      [...columns].map((col) => {
        if (!col.type) {
          return col;
        }

        return {
          ...col,
          onCell: (record) => ({
            record,
            dataIndex: col.dataIndex,
            title: col.title,
            type: col.type,
            options: col.options,
            // shouldCellUpdate: (record, prevRecord) => {
            //   return record[col.dataIndex] !== prevRecord[col.dataIndex];
            // },
          }),
        };
      }),
    [columns],
  );

  // useEffect(() => {
  //   console.log('mergedColumns', mergedColumns);
  // }, [mergedColumns]);

  return (
    <>
      <Table
        rowKey={rowKey}
        bordered
        components={components}
        columns={mergedColumns}
        dataSource={dataSource}
        pagination={false}
        size="small"
      />
    </>
  );
}
