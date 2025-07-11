'use client';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import { Plus } from 'lucide-react';
import { toast } from 'sonner';
import { addItemToCart } from '@/lib/actions/cart.action';
import { CartItem } from '@/types';

function AddToCart({ item }: { item: CartItem }) {
  const router = useRouter();

  const handleAddToCart = async () => {
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
  };

  return (
    <Button className='w-full' type='button' onClick={handleAddToCart}>
      <Plus /> Add To Cart
    </Button>
  );
}

export default AddToCart;
