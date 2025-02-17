import { useRouteError } from 'react-router-dom';
import LinkButton from './LinkButton.jsx';

function Error() {
  const errorMessage = useRouteError();
  console.log(errorMessage);

  return (
    <div>
      <h1>Something went wrong 😢</h1>
      <p>{errorMessage.data || errorMessage.message}</p>
      <LinkButton to="-1">&larr; Go back</LinkButton>
    </div>
  );
}

export default Error;
