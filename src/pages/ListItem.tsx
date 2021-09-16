import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

export default function ListItem() {
  const { id } = useParams();

  return (
    <>
      <h1>I am {id}</h1>

      <Link to="edit">Modal link</Link>
    </>
  );
}
