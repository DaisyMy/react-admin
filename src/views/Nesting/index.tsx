import { Outlet, Link } from 'react-router-dom';

function Nesting() {
  return (
    <>
      <h1>Nesting</h1>
      <Link to="about">about</Link>
      <Link to="content">content</Link>
      <Outlet></Outlet>
    </>
  );
}

export default Nesting;
