import { CSSProperties } from 'react';

import c from 'classnames';
import { HorizontalLayoutProps, LayoutWrapper } from 'src/components/JsonForm/FieldWrapper';

import styles from './HorizontalLayout.module.scss';

export function HorizontalLayout({ children, className, ...props }: HorizontalLayoutProps) {
  return (
    <LayoutWrapper className={c(styles.horizontalLayout, className)} {...props}>
      {children}
    </LayoutWrapper>
  );
}
