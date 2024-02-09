import MaxWidthWrapeer from '@/components/MaxWidthWrapeer';
import { Button, buttonVariants } from '@/components/ui/button';
import { ArrowDownToLine, CheckCircle, Leaf } from 'lucide-react';
import Link from 'next/link';

const perks = [
  {
    name: 'Instant Delivery',
    icon: ArrowDownToLine,
    description: 'Get your assets delivered in minutes, and download them.',
  },
  {
    name: 'Guaranteed Quality',
    icon: CheckCircle,
    description: 'Every assets in our platform is verified by our team.',
  },
  {
    name: 'For the Planet',
    icon: Leaf,
    description: 'Working for the enviroment, donating 1% to restore the climate.',
  },
];

export default function Home() {
  return (
    <>
      <MaxWidthWrapeer>
        <div className="py-20 mx-auto text-center flex flex-col items-center max-w-3xl">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Your Marketplace for the high-quality{' '}
            <span className="text-violet-600">digital assets</span>
          </h1>
          <p className="mt-6 text-large max-w-prose text-muted-foreground">
            Welcome to DigitalHippo. Every asset on our platform is verified by our team to ensure
            our highest quality standarts.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-6">
            <Link href="/products" className={buttonVariants()}>
              Browse Trending
            </Link>
            <Button variant="ghost">Our Quality Promise &rarr;</Button>
          </div>
        </div>
        {/* TODO: List of Products */}
      </MaxWidthWrapeer>
      <section className="border-t border-gray-200 bg-gray-50">
        <MaxWidthWrapeer className="py-20">
          <div className="grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-0">
            {perks.map((item) => (
              <div
                key={item.name}
                className="text-center md:flex md:items-start md:text-left lg:block lg:text-center">
                <div className="md:flex-shrink-0 flex justify-center">
                  <div className="h-16 w-16 flex items-center  justify-center rounded-full bg-violet-200 text-violet-900">
                    {<item.icon className="w-1/3 h-1/3" />}{' '}
                  </div>
                </div>
                <div className="mt-6 md:ml-4 md:mt-0 lg:mt-0 lg:ml-0">
                  <h3 className="text-base font-medium text-gray-900">{item.name}</h3>
                  <p className='mt-3 text-sm text-muted-foreground'>
                    {item.description} </p>
                </div>
              </div>
            ))}
          </div>
        </MaxWidthWrapeer>
      </section>
    </>
  );
}
