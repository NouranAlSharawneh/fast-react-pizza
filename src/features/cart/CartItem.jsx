import { useDispatch } from 'react-redux';
import Button from '../../ui/Button.jsx';
import { formatCurrency } from '../../utils/helpers.js';
import { deleteItem } from './cartSlice.js';
import DeleteItem from './DeleteItem.jsx';
import UpdateItemQuantity from './UpdateItemQuantity.jsx';

function CartItem({ item }) {
  const { pizzaId, name, quantity, totalPrice } = item;

  return (
    <li className="py-3 sm:flex sm:items-center sm:justify-between">
      <p className="mb-1 sm:mb-0">
        {quantity}&times; {name}
      </p>
      <div className="flex items-center justify-between sm:gap-7">
        <p className="text-sm font-semibold">{formatCurrency(totalPrice)}</p>
        <UpdateItemQuantity pizzaId={pizzaId} currentQuantity={quantity} />
        <DeleteItem pizzaId={pizzaId} />
      </div>
    </li>
  );
}

export default CartItem;
