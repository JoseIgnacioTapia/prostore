'use client';
import { useTransition } from 'react';
import { useRouter } from 'next/navigation';
import { Plus, Minus, Loader } from 'lucide-react';
import { toast } from 'sonner';
import { Button } from '@/components/ui/button';
import { addItemToCart, removeItemFromCart } from '@/lib/actions/cart.action';
import { Cart, CartItem } from '@/types';

function AddToCart({ cart, item }: { cart?: Cart; item: CartItem }) {
  const router = useRouter();

  const [isPending, startTransition] = useTransition();

  const handleAddToCart = async () => {
    startTransition(async () => {
      const res = await addItemToCart(item);

      if (!res.success) {
        toast.error('Error', {
          description: String(res.message || 'Something went wrong'),
          action: {
            label: 'Close',
            onClick: () => console.log('Undo'),
            // className: 'bg-red-800 text-white hover:bg-red-900',
          },
        });
        return;
      }

      // Handle success add to cart
      toast.success('Great!', {
        description: String(`${res.message || 'Item added to cart'}`),
        action: {
          label: 'Go To Cart',
          onClick: () => router.push('/cart'),
          // className: 'bg-green-800 text-white hover:bg-green-900',
        },
      });
    });
  };

  // Handle remove from cart
  const handleRemoveFromCart = async () => {
    startTransition(async () => {
      const res = await removeItemFromCart(item.productId);

      if (!res.success) {
        toast.error('Error', {
          description: String(res.message || 'Something went wrong'),
          action: {
            label: 'Close',
            onClick: () => console.log('Undo'),
          },
        });
        return;
      }

      // Handle success remove from cart
      toast.success('Removed!', {
        description: String(`${res.message || 'Item removed from cart'}`),
      });

      router.refresh();
    });
  };

  // Check if item is in cart
  const existItem =
    cart && cart.items.find((x) => x.productId === item.productId);
  console.log('existItem', existItem);

  return existItem ? (
    <div className='flex items-center gap-4'>
      <Button type='button' variant='outline' onClick={handleRemoveFromCart}>
        {isPending ? (
          <Loader className='w-4 h-4 animate-spin' />
        ) : (
          <Minus className='h-4 w-4' />
        )}
      </Button>
      <span className='px-2'>{existItem.qty}</span>
      <Button type='button' variant='outline' onClick={handleAddToCart}>
        {isPending ? (
          <Loader className='w-4 h-4 animate-spin' />
        ) : (
          <Plus className='h-4 w-4' />
        )}
      </Button>
    </div>
  ) : (
    <Button className='w-full' type='button' onClick={handleAddToCart}>
      {isPending ? (
        <Loader className='w-4 h-4 animate-spin' />
      ) : (
        <Plus className='h-4 w-4' />
      )}{' '}
      Add To Cart
    </Button>
  );
}

export default AddToCart;
