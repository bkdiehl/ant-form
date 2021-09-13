import { Input } from 'antd';
import { PasswordProps } from 'antd/lib/input';
import { FieldWrapper, FieldWrapperProps } from 'src/components/JsonForm/FieldWrapper/FieldWrapper';

export type PasswordFieldProps = {
  type: 'password';
  attributes?: PasswordProps;
} & FieldWrapperProps;

export function PasswordField({ attributes, ...props }: Omit<PasswordFieldProps, 'type'>) {
  return (
    <FieldWrapper {...props}>
      <Input.Password placeholder={props.label} {...attributes} />
    </FieldWrapper>
  );
}
