import { memo } from 'react';

import { Form } from 'antd';

export function EditableRow2({ row }) {
  const [form] = Form.useForm();
  return (
    <Form form={form} component={false} initialValues={row.values}>
      <tr {...row.getRowProps()}>
        {row.cells.map((cell) => {
          return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>;
        })}
      </tr>
    </Form>
  );
}

export const MemoizedEditableRow2 = memo(EditableRow2);
