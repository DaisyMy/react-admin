import { useRouteError } from 'react-router-dom';
function routerError() {
  const routerError = useRouteError();
  return (
    <>
      <div>
        <h1>this page is not found!</h1>
        <p>{JSON.stringify(routerError)}</p>
      </div>
    </>
  );
}

export default routerError;
