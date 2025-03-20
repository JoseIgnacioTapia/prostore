import { Button } from '@/components/ui/button';
import ModeToogle from './ModeToogle';
import Link from 'next/link';
import { EllipsisVertical, ShoppingCart, UserIcon } from 'lucide-react';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';

function Menu() {
  return (
    <div className='flex justify-end gap-10'>
      <nav className='hidden md:flex w-full max-w-xs gap-4'>
        <ModeToogle />
        <Button asChild variant='ghost'>
          <Link href='/cart'>
            <ShoppingCart /> Cart
          </Link>
        </Button>
        <Button asChild variant='destructive'>
          <Link href='/sign-in'>
            <UserIcon /> Sign In
          </Link>
        </Button>
      </nav>
      <nav className='md:hidden'>
        <Sheet>
          <SheetTrigger className='align-middle'>
            <EllipsisVertical />
          </SheetTrigger>
          <SheetContent className='flex flex-col items-start'>
            <SheetTitle>Menu</SheetTitle>
            <ModeToogle />
            <Button asChild variant='ghost'>
              <Link href='/cart'>
                <ShoppingCart />
              </Link>
            </Button>
            <Button asChild variant='destructive'>
              <Link href='/sign-in'>
                <UserIcon /> Sign In
              </Link>
            </Button>
            <SheetDescription></SheetDescription>
          </SheetContent>
        </Sheet>
      </nav>
    </div>
  );
}

export default Menu;
