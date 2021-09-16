import c from 'classnames';
import { FieldPropsBase, FieldWrapperVisible } from 'src/components/JsonForm/FieldWrapper';

import styles from './LayoutWrapper.module.scss';

type LayoutWrapperProps = {
  children: React.ReactNode;
} & FieldPropsBase;

export function LayoutWrapper({
  children,
  visible,
  visibleDependencies,
  className,
  ...props
}: LayoutWrapperProps) {
  return (
    <FieldWrapperVisible visible={visible} visibleDependencies={visibleDependencies}>
      <div className={c(styles.layoutWrapper, className)} {...props}>
        {children}
      </div>
    </FieldWrapperVisible>
  );
}
