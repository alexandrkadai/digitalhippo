'use client';

import React from 'react';
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from './ui/sheet';
import { ShoppingCart } from 'lucide-react';
import { Separator } from './ui/separator';
import { formatPrice } from '@/lib/utils';
import Link from 'next/link';
import { buttonVariants } from './ui/button';
import Image from 'next/image';

const Cart = () => {
  const itemCount = 0;
  const fee = 1;

  return (
    <Sheet>
      <SheetTrigger className="group -m-2 flex items-center p-2">
        <ShoppingCart
          aria-hidden="true"
          className="h-6 w-6 flex-shrink-0 text-gray-400  group-hover:text-gray-500"
        />
        <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">0</span>
      </SheetTrigger>
      <SheetContent className="flex w-full flex-col pr-0 sm:max-w-lg">
        <SheetHeader className="space-y-2.5 pr-6">
          <SheetTitle>Cart(0)</SheetTitle>
        </SheetHeader>
        {itemCount > 0 ? (
          <div>
            {/* Todo: Cart Logic */}
            <div className="flex w-full flex-col pr-6">cart items</div>
            <div className="space-y-4 pr-6">
              <Separator />
              <div className="space-y-1.5 text-sm">
                <div className="flex ">
                  <span className="flex-1">Shipping</span>
                  <span className="">Free</span>
                </div>
              </div>
              <div className="flex">
                <span className="flex-1">Transction fee</span>
                <span className="">{formatPrice(fee)}</span>
              </div>
              <div className="flex">
                <span className="flex-1">Total</span>
                <span className="">{formatPrice(fee)}</span>
              </div>
            </div>
            <SheetFooter>
              <SheetTrigger asChild>
                <Link
                  href="/cart"
                  className={buttonVariants({ className: 'w-[100%] relative mt-5 mr-5' })}>
                  Continue to Checkout
                </Link>
              </SheetTrigger>
            </SheetFooter>
          </div>
        ) : (
          <div className="flex h-full flex-col items-center justify-center space-y-1">
            <div aria-hidden="true" className="relative mb-4 w-60 h-60 text-muted-foreground">
              <Image src="/hippo-empty-cart.png" alt="emptycart" fill />
            </div>
            <div className='text-xl font-semibold'>Your Cart is Empty</div>
            <SheetTrigger asChild>
              <Link href='/products' className={buttonVariants({variant: 'link', size:"sm", className: 'w-full relative mt-5 mr-5'})}>Add to Products to Checkout</Link>
            </SheetTrigger>
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
};

export default Cart;
