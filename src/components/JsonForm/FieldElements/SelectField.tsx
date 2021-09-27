import { Input, Select } from 'antd';
import { TextAreaProps } from 'antd/lib/input';
import { FieldWrapper, FieldWrapperProps } from 'src/components/JsonForm/FieldWrapper';

type SelectProps = React.ComponentProps<typeof Select>;

export type SelectFieldProps = {
  type: 'select' | 'multi-select';
  options: { label: any; value: any }[];
  attributes?: SelectProps;
} & FieldWrapperProps;

export function SelectField({ attributes, type = 'select', options, ...props }: SelectFieldProps) {
  const mode = type == 'multi-select' ? 'multiple' : undefined;
  return (
    <FieldWrapper {...props}>
      <Select placeholder={props.label} mode={mode} options={options} {...attributes} />
    </FieldWrapper>
  );
}
