import { Link } from 'react-router-dom';

import { RoutesWithSubRoutes } from 'src/components';

export default function List({ routes }) {
  const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  return (
    <>
      <ul>
        {array.map((x) => (
          <li key={x} style={{ borderBottom: '1px solid #eee' }}>
            <Link to={x.toString()}>{x} Page Link</Link>
            <br />
            <Link to={`${x}/edit`}>{x} Modal Link</Link>
          </li>
        ))}
      </ul>
      <RoutesWithSubRoutes routes={routes} />
    </>
  );
}
