import c from 'classnames';
import { VerticalLayoutProps } from 'src/components/JsonForm/FieldWrapper';
import { LayoutWrapper } from 'src/components/JsonForm/FieldWrapper/LayoutWrapper';

import styles from './VerticalLayout.module.scss';

export function VerticalLayout({ children, className, ...props }: VerticalLayoutProps) {
  return (
    <LayoutWrapper className={c(styles.verticalLayout, className)} {...props}>
      {children}
    </LayoutWrapper>
  );
}
