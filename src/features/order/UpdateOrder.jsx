import { useFetcher } from 'react-router-dom';
import Button from '../../ui/Button.jsx';
import { updateOrder } from '../../services/apiRestaurant.js';

const UpdateOrder = ({ order }) => {
  const fetcher = useFetcher();

  return (
    <fetcher.Form
      method="PATCH"
      action={`/order/${order.id}`}
      className="text-right"
    >
      <Button type={'primary'}>Make priority</Button>
    </fetcher.Form>
  );
};

export default UpdateOrder;

export const action = async ({ request, params }) => {
  await updateOrder(params.orderId, { priority: true });
  return null;
};
