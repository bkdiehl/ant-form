import { EditableTable } from 'src/components/EditableTable/EditableTable';

export function EditableTableVirtualized({ columns, dataSource, rowKey }) {
  return <EditableTable columns={columns} dataSource={dataSource} rowKey={rowKey} />;
}
