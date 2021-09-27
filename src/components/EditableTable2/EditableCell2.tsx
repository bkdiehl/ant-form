import { memo, useContext } from 'react';

import { NumberField } from 'src/components/JsonForm/FieldElements/NumberField';
import { SelectField } from 'src/components/JsonForm/FieldElements/SelectField';
import { TextField } from 'src/components/JsonForm/FieldElements/TextField';

export function EditableCell2({ value, column: { type, id, options }, ...props }) {
  // const form = useContext(EditableContext);
  // if (type != null) form?.setFieldsValue({ [dataIndex]: record[dataIndex] });

  let childNode = value;

  switch (type) {
    case 'text':
      childNode = <TextField style={{ margin: 0 }} type={type} name={id} autoLabel={false} />;
      break;
    case 'number':
      childNode = <NumberField style={{ margin: 0 }} name={id} autoLabel={false} />;
      break;
    case 'select':
    case 'multi-select':
      childNode = (
        <SelectField
          style={{ margin: 0 }}
          type={type}
          name={id}
          options={options}
          autoLabel={false}
        />
      );
      break;
  }
  return <>{childNode}</>;
}

export const MemoizedEditableCell2 = memo(EditableCell2);
