import { Link } from 'react-router-dom';

const Button = ({ children, disabled = false, to }) => {
  const className =
    'inline-block px-4 py-3 font-semibold tracking-wide uppercase transition-colors duration-300 bg-yellow-400 rounded-full text-stone-800 hover:bg-yellow-300 focus:bg-yellow-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2 active:bg-yellow-500 disabled:cursor-not-allowed disabled:bg-stone-400 disabled:text-stone-900 sm:px-6 sm:py-4';

  if (to) return;
  <Link to={to} className={className}>
    {children}
  </Link>;

  return (
    <button disabled={disabled} className={className}>
      {children}
    </button>
  );
};

export default Button;
