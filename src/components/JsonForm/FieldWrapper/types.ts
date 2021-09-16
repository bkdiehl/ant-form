import { CSSProperties } from 'react';

import { CardProps } from 'antd';

export type FieldPropsBase = {
  visible?: boolean | ((data, index: number) => boolean);
  visibleDependencies?: string[];
  className?: string;
  style?: CSSProperties;
};

export type LayoutProps = FieldPropsBase & {
  children: React.ReactNode;
};

export type VerticalLayoutProps = LayoutProps;
export type HorizontalLayoutProps = LayoutProps;
export type GroupLayoutProps = LayoutProps & {
  title: React.ReactNode;
  attributes?: Omit<CardProps, 'title'>;
};
