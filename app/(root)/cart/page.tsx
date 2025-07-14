import CartTable from './CartTable';
import { getMyCart } from '@/lib/actions/cart.action';

export const metadata = {
  title: 'Shopping Cart',
};

async function CartPage() {
  const cart = await getMyCart();

  return (
    <div>
      <CartTable cart={cart} />
    </div>
  );
}

export default CartPage;
