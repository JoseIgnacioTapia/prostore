'use client';
import { useRouter } from 'next/navigation';
import { useTransition } from 'react';
import { Plus, Minus, Loader, ArrowRight } from 'lucide-react';
import { Image } from 'next/image';
import Link from 'next/link';
import { toast } from 'sonner';
import { addItemToCart, removeItemFromCart } from '@/lib/actions/cart.action';
import { Cart } from '@/types';

function CartTable({ cart }: { cart?: Cart }) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  return (
    <>
      <h1 className='py-4 h2-bold'>Shopping Cart</h1>
      {!cart || cart.items.length === 0 ? (
        <div>
          Cart is empty. <Link href='/'>Go Shopping</Link>
        </div>
      ) : (
        <div className='grid md:grid-cols-4 md:gap-5'>
          <div className='overflow-x-auto md:col-span'>Table</div>
        </div>
      )}
    </>
  );
}

export default CartTable;
