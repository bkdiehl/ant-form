// #region [imports]
import React, { memo } from 'react';

import { Form, FormInstance } from 'antd';
// #endregion

// #region [context]
export const EditableContext = React.createContext<FormInstance<any> | null>(null);
// #endregion

export const EditableRow = memo(({ ...props }) => {
  const [form] = Form.useForm();
  return (
    <Form form={form} component={false}>
      <EditableContext.Provider value={form}>
        <tr {...props} />
      </EditableContext.Provider>
    </Form>
  );
});

export const MemoizedEditableRow = memo(EditableRow);
