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
      toast('Error', {
        description: String(res.message || 'Something went wrong'),
        action: {
          label: 'Undo',
          onClick: () => console.log('Undo'),
        },
      });
      return;
    }

    // Handle success add to cart
    toast('Great!', {
      description: String(`${item.name} added to cart`),
      action: {
        label: 'Go To Cart',
        onClick: () => router.push('/cart'),
      },
    });
  };

  return (
    <Button className='w-full' type='button' onClick={handleAddToCart}>
      Add To Cart
    </Button>
  );
}

export default AddToCart;
