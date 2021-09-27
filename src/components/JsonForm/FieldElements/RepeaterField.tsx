import React from 'react';

import { Button, Card, Form, List } from 'antd';
import { FieldPropsBase, LayoutWrapper } from 'src/components/JsonForm/FieldWrapper';

import styles from './RepeaterField.module.scss';

type RepeaterFieldProps = {
  type: 'repeater';
  name: string;
  title?: string;
  children: ({ key, name, fieldKey, index }) => any;
} & FieldPropsBase;

type State = {
  parentName: string;
  key: number;
  name: number;
  index: number;
  fieldKey: number;
};

export const RepeaterContext = React.createContext<State>({} as State);

export function RepeaterField({
  name: parentName,
  title,
  children,
  ...props
}: Omit<RepeaterFieldProps, 'type'>) {
  return (
    <LayoutWrapper {...props}>
      <Form.List name={parentName}>
        {(fields, { add, remove }) => (
          <Card
            title={title}
            className={styles.repeaterCard}
            type="inner"
            size="small"
            extra={
              <Button type="default" onClick={() => add()} size="small">
                Add
              </Button>
            }
          >
            <List
              dataSource={fields}
              itemLayout="vertical"
              renderItem={({ key, name, fieldKey }, index) => {
                return (
                  <List.Item
                    className={styles.listItem}
                    extra={
                      <Button type="text" danger onClick={() => remove(name)}>
                        Remove
                      </Button>
                    }
                  >
                    <RepeaterContext.Provider value={{ parentName, key, name, fieldKey, index }}>
                      {children({ key, name, fieldKey, index })}
                    </RepeaterContext.Provider>
                  </List.Item>
                );
              }}
            />
          </Card>
        )}
      </Form.List>
    </LayoutWrapper>
  );
}
