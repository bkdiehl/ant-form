import { useEffect, useMemo } from 'react';

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

  const initialValues = useMemo(
    () => ({
      name: 'Roberto',
      password: 'test',
      children: [
        { name: 'Bobbie', age: 12 },
        // { name: 'Joey', age: 12 },
      ],
    }),
    [],
  );

  return (
    <>
      <Form form={form} onFinish={handleFinish} layout="vertical" initialValues={initialValues}>
        <TextField
          name="name"
          onChange={(value) => console.log('value', value)}
          checkInitialValues
        />
        <NumberField name="age" />
        <PasswordField
          name="password"
          visible={(data) => data.age != null}
          visibleDependencies={['age']}
        />
        <TextField
          name="testField"
          visible={(data) => data.age && data.password}
          visibleDependencies={['age', 'password']}
        />
        <DateField name="date" />
        <RepeaterField name="children" title="Children">
          {({ key }) => (
            <>
              <TextField name="name" />
              <NumberField
                name="age"
                visible={(data) => data?.children?.[key]?.name}
                visibleDependencies={['children', key, 'name']}
              />
            </>
          )}
        </RepeaterField>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </>
  );
}

/**
  (data, i) => (['age', 'password']) => data.age && data.password
  visible: (data,)
 */
