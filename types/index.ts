import { z } from 'zod';
import {
  cartItemsSchema,
  insertCartSchema,
  insertProductSchema,
} from '@/lib/validators';

export type Product = z.infer<typeof insertProductSchema> & {
  id: string;
  rating: string;
  createdAt: Date;
};

export type Cart = z.infer<typeof insertCartSchema>;
export type CartItem = z.infer<typeof cartItemsSchema>;
