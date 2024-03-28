'use client';
import React from 'react';
import {
  useRouter,
  useParams,
  useSearchParams,
  usePathname,
} from 'next/navigation';

const PropertyPage = () => {
  const router = useRouter();
  const { id } = useParams();
  const searchParams = useSearchParams();
  const name = searchParams.get('name');
  const pathname = usePathname();

  return (
    <div>
      <button onClick={() => router.push('/')} className='bg-blue-500 p-2'>
        Go Home {id}
      </button>
    </div>
  );
};

export default PropertyPage;
