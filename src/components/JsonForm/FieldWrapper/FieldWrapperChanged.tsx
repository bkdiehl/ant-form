import React from 'react';

import { Form } from 'antd';
import { NamePath } from 'antd/lib/form/interface';
import { get } from 'lodash';
import { FieldWrapperContext } from 'src/components/JsonForm/FieldWrapper/FieldWrapper';

/**
 * By default, onChange will only run after the first manual chane of the form item. If checkInitialValues is true, onChange will run on the initial values passed into the form.
 */
type ChangeHandlerProps = {
  onChange?: (value, data) => void;
  checkInitialValues?: boolean;
  children: any;
};

export function FieldWrapperChanged({
  onChange,
  checkInitialValues,
  children,
}: ChangeHandlerProps) {
  const { fieldName } = React.useContext(FieldWrapperContext);

  const shouldUpdate = onChange != null;
  if (!shouldUpdate) return children;

  return (
    <Form.Item
      noStyle
      shouldUpdate={(previousVal, currentVal) => {
        return get(previousVal, fieldName) != get(currentVal, fieldName);
      }}
    >
      {({ getFieldValue, getFieldsValue, isFieldTouched }) => {
        if (
          onChange != null &&
          fieldName != null &&
          (checkInitialValues || isFieldTouched(fieldName))
        ) {
          const changedValue = getFieldValue(fieldName);
          onChange(changedValue, getFieldsValue());
        }

        return children;
      }}
    </Form.Item>
  );
}
