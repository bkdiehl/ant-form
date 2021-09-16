import { useMemo } from 'react';

import { Input, InputProps } from 'antd';
import { FieldWrapper, FieldWrapperProps } from 'src/components/JsonForm/FieldWrapper';
import { PHONE_REGEX } from 'src/config';

type FieldTypes = 'text' | 'email' | 'url' | 'phone';
export type TextFieldProps = {
  type?: FieldTypes;
  attributes?: InputProps;
} & FieldWrapperProps;

export function TextField({ type = 'text', rules = [], attributes, ...props }: TextFieldProps) {
  const textRules = useMemo(() => {
    const rulesArray = [...rules.filter((x) => x['type'] != type)];
    switch (type) {
      case 'email':
        rulesArray.push({ type: 'email', message: 'Please provide a valid email' });
        break;
      case 'url':
        rulesArray.push({ type: 'url', message: 'Please provide a valid link' });
        break;
      case 'phone':
        rulesArray.push({ pattern: PHONE_REGEX, message: 'Please provide a valid phone number' });
        break;
      default:
        // default is 'text' which does not require any rules
        break;
    }
    return rulesArray;
  }, [type, rules]);

  return (
    <FieldWrapper rules={textRules} {...props}>
      <Input placeholder={props.label} {...attributes} />
    </FieldWrapper>
  );
}
