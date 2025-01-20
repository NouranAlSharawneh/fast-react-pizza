import { useLoaderData } from 'react-router-dom';
import { getMenu } from '../../services/apiRestaurant.js';
import MenuItem from './MenuItem.jsx';

function Menu() {
  const menu = useLoaderData();
  return (
    <ul className="divide-y-4 divide-stone-200 px-2">
      {menu.map((pizza, index) => (
        <MenuItem pizza={pizza} key={index} />
      ))}
    </ul>
  );
}

export const loader = async () => {
  const menu = await getMenu();
  return menu;
};

export default Menu;
