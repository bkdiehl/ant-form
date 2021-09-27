import { useContext } from 'react';

import { EditableContext } from 'src/components/EditableTable/EditableRow';
import { EditableContextVirtualized } from 'src/components/EditableTable/EditableRowVirtualized';
import { NumberField } from 'src/components/JsonForm/FieldElements/NumberField';
import { TextField } from 'src/components/JsonForm/FieldElements/TextField';

export function EditableCell({ children, type, dataIndex, title, record, ...props }) {
  const form = useContext(EditableContextVirtualized);
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
  }

  return <td>{childNode}</td>;
}
