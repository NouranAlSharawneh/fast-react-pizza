import { Outlet, useNavigation, useLocation } from 'react-router-dom';
import CartOverview from '../features/cart/CartOverview.jsx';
import Header from './Header.jsx';
import Loading from './Loading.jsx';

const AppLayout = () => {
  const navigation = useNavigation();
  const location = useLocation();
  const isLoading = navigation.state === 'loading';

  // Check if the current URL is the home URL
  const isHome = location.pathname === '/';

  return (
    <div className="grid h-screen grid-rows-[auto_1fr_auto]">
      {isLoading && <Loading />}

      <Header />
      <div className="overflow-scroll">
        {/* Conditionally add the max-w-3xl class */}
        <main className={`mx-auto ${!isHome ? 'max-w-3xl' : ''}`}>
          <Outlet />
        </main>
      </div>
      <CartOverview />
    </div>
  );
};

export default AppLayout;
