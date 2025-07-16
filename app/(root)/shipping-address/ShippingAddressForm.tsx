'use client';
import { useRouter } from 'next/navigation';
import { useTransition } from 'react';
import { toast } from 'sonner';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { Form } from '@/components/ui/form';
import { z } from 'zod';
import { ShippingAddress } from '@/types';
import { shippingAddressSchema } from '@/lib/validators';
import { ShippingAddress } from '@/types';
import { shippingAddressDefaultValues } from '@/lib/constants';

function ShippingAddressForm({ address }: { address: ShippingAddress }) {
  const router = useRouter();

  const form = useForm<z.infer<typeof shippingAddressSchema>>({
    resolver: zodResolver(shippingAddressSchema),
    defaultValues: address || shippingAddressDefaultValues,
  });

  const [isPending, startTransition] = useTransition();

  return (
    <>
      <div className='max-w-md mx-auto space-y-4'>
        <h1 className='h2-bold mt-4'>Shipping Address</h1>
        <p className='text-sm text-muted-foreground'>
          Please enter and address to ship to
        </p>
        <Form {...form}>
          <form
            method='post'
            className='space-y-4'
            onSubmit={form.handleSubmit(onSubmit)}
          ></form>
        </Form>
      </div>
    </>
  );
}

export default ShippingAddressForm;
