import { Input } from 'antd';
import { TextAreaProps } from 'antd/lib/input';
import { FieldWrapper, FieldWrapperProps } from 'src/components/JsonForm/FieldWrapper/FieldWrapper';

export type TextAreaFieldProps = {
  type: 'textarea';
  attributes?: TextAreaProps;
} & FieldWrapperProps;

export function PasswordField({ attributes, ...props }: Omit<TextAreaFieldProps, 'type'>) {
  return (
    <FieldWrapper {...props}>
      <Input.TextArea placeholder={props.label} autoSize={{ minRows: 3 }} {...attributes} />
    </FieldWrapper>
  );
}
