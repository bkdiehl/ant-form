import { memo } from 'react';

import { Form } from 'antd';

export function EditableRow2Virtualized({ row, style }) {
  const [form] = Form.useForm();
  return (
    <Form form={form} component={false} initialValues={row.values}>
      <div
        {...row.getRowProps({
          style,
        })}
        className="tr"
      >
        {row.cells.map((cell) => {
          return (
            <div {...cell.getCellProps()} className="td">
              {cell.render('Cell')}
            </div>
          );
        })}
      </div>
    </Form>
  );
}

export const MemoizedEditableRow2Virtualized = memo(EditableRow2Virtualized);
