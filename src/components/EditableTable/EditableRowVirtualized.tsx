// #region [imports]
import React, { forwardRef, memo } from 'react';

import { Form, FormInstance } from 'antd';
// #endregion

// #region [context]
export const EditableContextVirtualized = React.createContext<FormInstance<any> | null>(null);
// #endregion

// export const EditableRowVirtualized = forwardRef((props, ref: React.MutableRefObject<any>) => {
//   const [form] = Form.useForm();
//   return (
//     <Form form={form} component={false}>
//       <EditableContextVirtualized.Provider value={form}>
//         <tr {...props} ref={ref} />
//       </EditableContextVirtualized.Provider>
//     </Form>
//   );
// });

// export const MemoizedEditableRowVirtualized = memo(EditableRowVirtualized);
