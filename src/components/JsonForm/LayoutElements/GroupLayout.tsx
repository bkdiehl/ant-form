import { Card } from 'antd';
import { GroupLayoutProps, LayoutWrapper } from 'src/components/JsonForm/FieldWrapper';

export function GroupLayout({
  title,
  children,
  className,
  attributes,
  ...props
}: GroupLayoutProps) {
  return (
    <LayoutWrapper {...props}>
      <Card title={title} size="small" type="inner" {...attributes}>
        {children}
      </Card>
    </LayoutWrapper>
  );
}
