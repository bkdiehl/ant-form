import { useContext } from 'react';

import { EditableContext } from 'src/components/EditableTable/EditableRow';
import { NumberField } from 'src/components/JsonForm/FieldElements/NumberField';
import { SelectField } from 'src/components/JsonForm/FieldElements/SelectField';
import { TextField } from 'src/components/JsonForm/FieldElements/TextField';

export function EditableCell({ children, type, dataIndex, title, record, options, ...props }) {
  const form = useContext(EditableContext);
  if (type != null) form?.setFieldsValue({ [dataIndex]: record[dataIndex] });

  let childNode = children;

  switch (type) {
    case 'text':
      childNode = (
        <TextField style={{ margin: 0 }} type={type} name={dataIndex} autoLabel={false} />
      );
      break;
    case 'number':
      childNode = <NumberField style={{ margin: 0 }} name={dataIndex} autoLabel={false} />;
      break;
    case 'select':
    case 'multi-select':
      childNode = (
        <SelectField
          style={{ margin: 0 }}
          type={type}
          name={dataIndex}
          options={options}
          autoLabel={false}
        />
      );
      break;
  }

  return <td>{childNode}</td>;
}
