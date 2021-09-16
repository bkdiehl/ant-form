import { DatePicker, DatePickerProps } from 'antd';
import { FieldWrapper, FieldWrapperProps } from 'src/components/JsonForm/FieldWrapper';

export type NumberFieldProps = {
  type: 'date';
  showTime?: boolean;
  attributes?: DatePickerProps;
} & FieldWrapperProps;

export function DateField({
  showTime = false,
  attributes,
  ...props
}: Omit<NumberFieldProps, 'type'>) {
  const { style, format, ...attr } = attributes ?? { picker: 'date' };
  return (
    <FieldWrapper {...props}>
      <DatePicker
        picker="date"
        placeholder={props.label}
        style={{ width: '100%', ...style }}
        format={format ?? !showTime ? 'MMM D, yyyy' : 'MMM D, yyyy H:mm a'}
        showTime={showTime && { use12Hours: true }}
        {...(attr as any)}
      />
    </FieldWrapper>
  );
}
