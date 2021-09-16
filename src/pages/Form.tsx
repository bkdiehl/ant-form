import { useEffect, useState } from 'react';

import { JsonForm } from 'src/components';

function Form() {
  const [data, setData] = useState<any>(undefined);
  useEffect(() => {
    setTimeout(() => {
      setData({
        name: 'Roberto',
        password: 'test',
        children: [{ name: 'Bobbie', age: 12 }],
        nickName: 'bob',
      });
    }, 500);
  }, []);

  return (
    <div style={{ maxWidth: '800px', margin: '15px auto' }}>
      <JsonForm initialValues={data} />
    </div>
  );
}

export default Form;
