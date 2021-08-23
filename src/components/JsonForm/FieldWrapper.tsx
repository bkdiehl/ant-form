import { CSSProperties, useEffect, useMemo } from 'react';
import React from 'react';

import { Form, FormItemProps } from 'antd';
import { NamePath } from 'antd/lib/form/interface';
import { get } from 'lodash';
import { splitCamelCase, toMultipleTitleCase } from 'src/utils';

export type FieldWrapperProps = Omit<FormItemProps, 'label'> &
  FieldPropsBase & {
    label?: string;
    autoLabel?: boolean;
    onChange?: (value, data) => void;
    checkInitialValues?: boolean;
  };

export type FieldPropsBase = {
  visible?: boolean | ((data) => boolean);
  className?: string;
  style?: CSSProperties;

  listName?: string;
};

export function FieldWrapper({
  name,
  listName,
  rules = [],
  required,
  children,
  label,
  autoLabel = true,
  visible,
  onChange,
  checkInitialValues,
  ...props
}: FieldWrapperProps) {
  const itemName = useMemo(() => (typeof name == 'string' ? name.split('.') : name), [name]);
  const itemRules = useMemo(() => {
    const filtered = rules.filter((x) => !x['required']);
    if (required) filtered.push({ required: true, message: '' });
    return filtered;
  }, [rules, required]);
  const itemLabel = useMemo(() => {
    if (label != null) return label;
    if (!autoLabel || !itemName || !Array.isArray(itemName)) return undefined;

    const lastItem = itemName.slice(-1)[0]; // get last item in name array
    if (typeof lastItem == 'number') return undefined;
    return toMultipleTitleCase(splitCamelCase(lastItem));
  }, [itemName, autoLabel, label]);

  return (
    <FormItemChangeHandler
      name={itemName}
      listName={listName}
      onChange={onChange}
      checkInitialValues={checkInitialValues}
    >
      <FormItemVisibleWrapper visible={visible}>
        <Form.Item name={itemName} rules={itemRules} label={itemLabel} {...props}>
          {children}
        </Form.Item>
      </FormItemVisibleWrapper>
    </FormItemChangeHandler>
  );
}

type VisibleHandlerProps = {
  visible?: boolean | ((data: any, index?: number) => boolean);
  children: any;
};

function FormItemVisibleWrapper({ visible = true, children }: VisibleHandlerProps) {
  const shouldCheckVisibility = typeof visible == 'function';
  const shouldUpdate = shouldCheckVisibility;

  const handleVisibility = (values) => {
    return typeof visible == 'function' ? visible(values) : visible;
  };

  return (
    <Form.Item noStyle shouldUpdate={shouldUpdate}>
      {shouldUpdate
        ? ({ getFieldsValue }) => {
            const renderChild = shouldCheckVisibility ? handleVisibility(getFieldsValue()) : true;
            const style = renderChild
              ? children.props.style
              : { ...children.props.style, display: 'none' };

            return React.cloneElement(children, {
              ...children.props,
              style,
            });
          }
        : visible && children}
    </Form.Item>
  );
}

/**
 * By default, onChange will only run after the first manual chane of the form item. If checkInitialValues is true, onChange will run on the initial values passed into the form.
 */
type ChangeHandlerProps = {
  name?: NamePath;
  listName?: string;
  onChange?: (value, data) => void;
  checkInitialValues?: boolean;
  children: any;
};

function FormItemChangeHandler({
  name,
  listName,
  onChange,
  checkInitialValues,
  children,
}: ChangeHandlerProps) {
  const shouldUpdate = onChange != null;
  if (!shouldUpdate) return children;

  const fieldName = listName != null ? [listName].concat(name as any) : name;
  return (
    <Form.Item
      noStyle
      shouldUpdate={(previousVal, currentVal) =>
        get(previousVal, fieldName) != get(currentVal, fieldName)
      }
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
