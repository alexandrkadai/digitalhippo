'use client';

import React from 'react';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from './ui/sheet';
import { ShoppingCart } from 'lucide-react';
import { Separator } from './ui/separator';
import { formatPrice } from '@/lib/utils';

const itemCount = 1;

const Cart = () => {
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
                <div className='flex '>
                    <span className='flex-1'>Shipping</span>
                    <span className=''>Free</span>
                </div>
              </div>
                <div className='flex '>
                    <span className='flex-1'>Transction fee</span>
                    <span className=''>{formatPrice(1)}</span>
                </div>
                <div className='flex '>
                    <span className='flex-1'>Total</span>
                    <span className=''>{formatPrice(2)}</span>
                </div>
              </div>
              
            </div>
          
        ) : (
          <div></div>
        )}
      </SheetContent>
    </Sheet>
  );
};

export default Cart;
