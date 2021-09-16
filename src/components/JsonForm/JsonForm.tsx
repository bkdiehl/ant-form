import { useEffect } from 'react';

import { Button, Form } from 'antd';
import c from 'classnames';
import { DateField } from 'src/components/JsonForm/FieldElements/DateField';
import { NumberField } from 'src/components/JsonForm/FieldElements/NumberField';
import { PasswordField } from 'src/components/JsonForm/FieldElements/PasswordField';
import { TextField } from 'src/components/JsonForm/FieldElements/TextField';
import { GroupLayout } from 'src/components/JsonForm/LayoutElements/GroupLayout';
import { HorizontalLayout } from 'src/components/JsonForm/LayoutElements/HorizontalLayout';

import { RepeaterField } from './FieldElements/RepeaterField';
import styles from './JsonForm.module.scss';
import { VerticalLayout } from './LayoutElements/VerticalLayout';

export function JsonForm({ initialValues }) {
  const [form] = Form.useForm();

  const handleFinish = async (data) => {
    console.log('data', data);
  };

  useEffect(() => {
    if (initialValues != null) form.resetFields();
  }, [initialValues, form]);

  return (
    <>
      <Form
        form={form}
        onFinish={handleFinish}
        initialValues={initialValues}
        layout="vertical"
        className={c(styles.jsonForm)}
      >
        <TextField
          name="name"
          onChange={(value) => console.log('value', value)}
          checkInitialValues
          required
        />
        <NumberField name="age" />
        <PasswordField name="password" visible={(data) => data.age != null} />
        <DateField name="date" />
        <RepeaterField name="children" title="Children">
          {({ index }) => (
            <>
              <HorizontalLayout>
                <TextField name="name" />
                <TextField name="lastName" />
              </HorizontalLayout>
              {/* <VerticalLayout visible={(data) => data?.children?.[index]?.name}>
                <NumberField name="age" />
                <TextField name="favoriteColor" />
              </VerticalLayout> */}
            </>
          )}
        </RepeaterField>
        <GroupLayout title="Address">
          <TextField name="address" />
          <TextField name="city" />
          <TextField name="state" />
          <TextField name="zip" />
        </GroupLayout>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </>
  );
}
