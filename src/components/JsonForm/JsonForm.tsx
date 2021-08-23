import { Button, Form, Input, Space } from 'antd';
import { DateField } from 'src/components/JsonForm/FieldElements/DateField';
import { NumberField } from 'src/components/JsonForm/FieldElements/NumberField';
import { PasswordField } from 'src/components/JsonForm/FieldElements/PasswordField';
import { TextField } from 'src/components/JsonForm/FieldElements/TextField';

import { RepeaterField } from './FieldElements/RepeaterField';

export function JsonForm() {
  const [form] = Form.useForm();

  const handleFinish = (data) => {
    console.log('data', data);
  };

  const initialValues = { name: 'Roberto', children: [{ name: 'Bobbie', age: 12 }] };

  return (
    <>
      <Form
        form={form}
        onFinish={handleFinish}
        layout="vertical"
        initialValues={initialValues}
        // onValuesChange={(changedValue, values) => {
        //   console.log('changed', values);
        // }}
        // onFieldsChange={(changedFields, allFields) => {
        //   console.log('allFields', allFields);
        // }}
      >
        <TextField
          name="name"
          onChange={(value) => {
            console.log('value', value);
          }}
          checkInitialValues
        />
        <NumberField name="age" />
        <PasswordField name="password" visible={(data) => data.age != null} />
        <TextField name="testField" visible={(data) => data.age && data.password} />
        {/* <DateField name="date" />
        <RepeaterField name="children" title="Children">
          <TextField name={'name'} visible={(data) => data?.children?.[0]?.age > 12} />
          <NumberField name={'age'} />
        </RepeaterField> */}
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </>
  );
}
