import { Link } from 'react-router-dom';

const Button = ({ children, disabled = false, to, type }) => {
  const base =
    'inline-block font-semibold tracking-wide uppercase transition-colors duration-300 bg-yellow-400 rounded-full text-stone-800 hover:bg-yellow-300 focus:bg-yellow-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2 active:bg-yellow-500 disabled:cursor-not-allowed disabled:bg-stone-400 disabled:text-stone-900';

  const styles = {
    primary: base + ' px-4 py-3 md:px-6 md:py-4 ',
    small: base + ' px-4 py-2 md:px-5 md:py-2.5 text-xs ',
    secondary:
      'inline-block px-4 py-2.5 border-2 border-stone-300   font-semibold tracking-wide uppercase transition-colors duration-300 rounded-full text-stone-400 hover:bg-stone-300 hover:text-stone-800 focus:bg-stone-300 focus:outline-none focus:ring focus:ring-stone-300 focus:ring-offset-2 active:bg-stone-500 disabled:cursor-not-allowed disabled:bg-stone-400 disabled:text-stone-900  md:px-6 md:py-3.5 ',
  };

  if (to)
    return (
      <Link to={to} className={styles[type]}>
        {children}
      </Link>
    );

  return (
    <button disabled={disabled} className={styles[type]}>
      {children}
    </button>
  );
};

export default Button;
