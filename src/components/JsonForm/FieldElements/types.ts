import { Rule } from 'antd/lib/form';

export type FormField = {
  label?: any;
  name?: string | string[];
  required?: boolean;
  rules?: Rule[];
};
