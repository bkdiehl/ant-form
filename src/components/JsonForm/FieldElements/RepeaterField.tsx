import React from 'react';

import { Button, Card, Form, List } from 'antd';
import {
  FieldPropsBase,
  FieldWrapperProps,
} from 'src/components/JsonForm/FieldWrapper/FieldWrapper';

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
    <Form.List name={parentName}>
      {(fields, { add, remove }) => (
        <Card
          title={title}
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
            renderItem={({ key, name, fieldKey }, index) => {
              return (
                <List.Item>
                  <RepeaterContext.Provider value={{ parentName, key, name, fieldKey, index }}>
                    {children({ key, name, fieldKey, index })}
                    {/* {React.Children.map(
                      children({ index: key }),
                      (child: React.ReactElement<FieldWrapperProps>) => {
                        if (React.isValidElement(child) && child.props.name !== undefined) {
                          const childName = Array.isArray(child.props.name)
                            ? child.props.name
                            : [child.props.name];
                          return React.cloneElement(child, {
                            name: [name, ...childName],
                            fieldKey,
                          });
                        }
                        return child;
                      },
                    )} */}
                  </RepeaterContext.Provider>
                </List.Item>
              );
            }}
          />
        </Card>
      )}
    </Form.List>
  );
}
