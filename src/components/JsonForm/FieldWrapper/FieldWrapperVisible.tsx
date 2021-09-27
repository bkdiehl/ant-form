import React from 'react';

import { Form } from 'antd';
import { RepeaterContext } from 'src/components/JsonForm/FieldElements/RepeaterField';
import { FieldWrapperContext } from 'src/components/JsonForm/FieldWrapper/FieldWrapper';

type VisibleHandlerProps = {
  visible?: boolean | ((data: any, index: number) => boolean);
  visibleDependencies?: string[];
  children: any;
};

export function FieldWrapperVisible({
  visible = true,
  visibleDependencies = [],
  children,
}: VisibleHandlerProps) {
  const { parentName, index } = React.useContext(RepeaterContext);
  const { fieldName } = React.useContext(FieldWrapperContext);

  const shouldCheckVisibility = typeof visible == 'function';
  const shouldUpdate = shouldCheckVisibility;

  const handleVisibility = (values) => {
    return typeof visible == 'function' ? visible(values, index) : visible;
  };

  // const handleBasicVisibleDependencies = (previousVal, currentVal) =>
  //   visibleDependencies.some((depName) => previousVal[depName] != currentVal[depName]);

  // const handleRepeaterVisibleDependencies = (previousVal, currentVal) => {
  //   return visibleDependencies.some(
  //     (depName) =>
  //       previousVal?.[parentName]?.[index]?.[depName] !=
  //         currentVal?.[parentName]?.[index]?.[depName] ||
  //       handleBasicVisibleDependencies(previousVal, currentVal),
  //   );
  // };

  // const handleShouldUpdate = (previousVal, currentVal, scope) => {
  //   // console.log(previousVal, currentVal, scope);
  //   const needsUpdate =
  //     parentName != null
  //       ? handleRepeaterVisibleDependencies(previousVal, currentVal)
  //       : handleBasicVisibleDependencies(previousVal, currentVal);
  //   return needsUpdate;
  // };

  return (
    <Form.Item
      noStyle
      // shouldUpdate={!visibleDependencies?.length ? shouldUpdate : handleShouldUpdate}
      shouldUpdate={true}
    >
      {shouldUpdate
        ? ({ getFieldValue, getFieldsValue, setFields, resetFields, isFieldTouched }) => {
            // console.log('render');
            const renderChild = shouldCheckVisibility ? handleVisibility(getFieldsValue()) : true;

            if (!renderChild && fieldName != null && isFieldTouched(fieldName)) {
              setTimeout(() => {
                // set timeout to escape the render cycle
                resetFields([fieldName]);
              }, 0);
            }

            if (renderChild) return children;
          }
        : visible && children}
    </Form.Item>
  );
}
