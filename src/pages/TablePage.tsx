import { useEffect, useState } from 'react';

import { Button } from 'antd';
import { EditableTable } from 'src/components/EditableTable/EditableTable';
import { EditableTable2 } from 'src/components/EditableTable2/EditableTable2';
import { EditableTable2Virtualized } from 'src/components/EditableTable2/EditableTable2Virtualized';

const useDataSource = () => {
  const [state, setState] = useState<Record<string, unknown>[]>([]);

  useEffect(() => {
    setTimeout(() => {
      setState(
        [...Array(30)].map((value, index) => ({
          key: index,
          name: `Edward King ${index}`,
          age: 32,
          address: `London, Park Lane no. ${index}`,
          colors: ['red', 'blue', 'green', 'yellow', 'purple'],
        })),
      );
    }, 0);
  }, []);
  return { data: state };
};

export default function TablePage() {
  const { data: initialData } = useDataSource();
  const [data, setData] = useState<Record<string, unknown>[]>([]);

  useEffect(() => {
    if (initialData != null) setData(initialData);
  }, [initialData]);

  const handleAdd = () => {
    setData([...data, { key: data.length }]);
  };

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      width: '30%',
      type: 'text',
    },
    {
      title: 'Age',
      dataIndex: 'age',
      type: 'number',
    },
    {
      title: 'Address',
      dataIndex: 'address',
      type: 'text',
    },
    {
      title: 'Colors',
      dataIndex: 'colors',
      type: 'multi-select',
      options: [
        { label: 'Red', value: 'red' },
        { label: 'Blue', value: 'blue' },
        { label: 'Green', value: 'green' },
        { label: 'Yellow', value: 'yellow' },
        { label: 'Purple', value: 'purple' },
      ],
    },
  ];

  const columns2 = [
    {
      title: 'Name',
      accessor: 'name',
      // width: '30%',
      type: 'text',
    },
    {
      title: 'Age',
      accessor: 'age',
      type: 'number',
      // width: '30%',
    },
    {
      title: 'Address',
      accessor: 'address',
      type: 'text',
    },
    {
      title: 'Colors',
      accessor: 'colors',
      type: 'multi-select',
      options: [
        { label: 'Red', value: 'red' },
        { label: 'Blue', value: 'blue' },
        { label: 'Green', value: 'green' },
        { label: 'Yellow', value: 'yellow' },
        { label: 'Purple', value: 'purple' },
      ],
    },
  ];

  return (
    <div style={{ maxWidth: '1200px', margin: '15px auto' }}>
      <Button onClick={handleAdd} type="primary">
        Add a row
      </Button>
      <EditableTable columns={columns} dataSource={data} />
      {/* <EditableTable2 columns={columns2} data={data} /> */}
      {/* <EditableTable2Virtualized columns={columns2} data={data} /> */}
    </div>
  );
}
