import React from 'react';

import { Button, Card, Form, List } from 'antd';
import { FieldPropsBase, FieldWrapperProps } from 'src/components/JsonForm/FieldWrapper';

type RepeaterFieldProps = {
  type: 'repeater';
  name: string;
  title?: string;
  children: any;
} & FieldPropsBase;

export function RepeaterField({
  name: listName,
  title,
  children,
  ...props
}: Omit<RepeaterFieldProps, 'type'>) {
  return (
    <Form.List name={listName}>
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
            renderItem={({ key, name, fieldKey }) => {
              return (
                <List.Item>
                  {React.Children.map(children, (child: React.ReactElement<FieldWrapperProps>) => {
                    if (React.isValidElement(child) && child.props.name !== undefined) {
                      const childName = Array.isArray(child.props.name)
                        ? child.props.name
                        : [child.props.name];
                      return React.cloneElement(child, {
                        name: [name, ...childName],
                        fieldKey,
                        listName,
                      });
                    }
                    return child;
                  })}
                </List.Item>
              );
            }}
          />
        </Card>
      )}
    </Form.List>
  );
}
