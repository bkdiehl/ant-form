import { CSSProperties, useMemo } from 'react';
import React from 'react';

import { Form, FormItemProps } from 'antd';
import { NamePath } from 'antd/lib/form/interface';
import { FieldPropsBase } from 'src/components/JsonForm/FieldWrapper';
import { FieldWrapperChanged } from 'src/components/JsonForm/FieldWrapper/FieldWrapperChanged';
import { FieldWrapperVisible } from 'src/components/JsonForm/FieldWrapper/FieldWrapperVisible';
import { splitCamelCase, toMultipleTitleCase } from 'src/utils';

import { RepeaterContext } from '../FieldElements/RepeaterField';

export type FieldWrapperProps = Omit<FormItemProps, 'label' | 'name'> &
  FieldPropsBase & {
    name: string | (string | number)[];
    label?: string;
    autoLabel?: boolean;
    onChange?: (value, data) => void;
    checkInitialValues?: boolean;
  };

type State = {
  fieldName?: (string | number)[];
};

export const FieldWrapperContext = React.createContext<State>({} as State);

export function FieldWrapper({
  name,
  rules = [],
  required,
  children,
  label,
  autoLabel = true,
  visible,
  visibleDependencies,
  onChange,
  checkInitialValues,
  ...props
}: FieldWrapperProps) {
  const { parentName, key, name: repeaterName } = React.useContext(RepeaterContext);

  const itemName = useMemo(() => {
    const lastPart = typeof name == 'string' ? name.split('.') : name;
    return repeaterName != null ? [repeaterName].concat(lastPart as any) : lastPart;
  }, [name, repeaterName]);

  const fieldName = useMemo(
    () => (parentName != null ? [parentName].concat(itemName as any) : itemName),
    [itemName, parentName],
  );

  const itemRules = useMemo(() => {
    const filtered = rules.filter((x) => !x['required']);
    if (required) filtered.push({ required: true, message: '' });
    return filtered;
  }, [rules, required]);

  const itemLabel = useMemo(() => {
    if (label != null) return label;
    if (!autoLabel || !fieldName || !Array.isArray(fieldName)) return undefined;

    const lastItem = fieldName.slice(-1)[0]; // get last item in name array
    if (typeof lastItem == 'number') return undefined;
    return toMultipleTitleCase(splitCamelCase(lastItem));
  }, [fieldName, autoLabel, label]);

  return (
    <FieldWrapperContext.Provider value={{ fieldName }}>
      <FieldWrapperVisible visible={visible} visibleDependencies={visibleDependencies}>
        <FieldWrapperChanged onChange={onChange} checkInitialValues={checkInitialValues}>
          <Form.Item name={itemName} rules={itemRules} label={itemLabel} {...props} fieldKey={key}>
            {children}
          </Form.Item>
        </FieldWrapperChanged>
      </FieldWrapperVisible>
    </FieldWrapperContext.Provider>
  );
}
