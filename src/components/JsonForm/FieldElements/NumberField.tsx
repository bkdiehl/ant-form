import { InputNumber, InputNumberProps } from 'antd';
import { FieldWrapper, FieldWrapperProps } from 'src/components/JsonForm/FieldWrapper';

export type NumberFieldProps = {
  type: 'number';
  attributes?: InputNumberProps;
} & FieldWrapperProps;

export function NumberField({ attributes, ...props }: Omit<NumberFieldProps, 'type'>) {
  const { style, ...attr } = attributes ?? {};
  return (
    <FieldWrapper {...props}>
      <InputNumber placeholder={props.label} style={{ width: '100%', ...style }} {...attr} />
    </FieldWrapper>
  );
}
