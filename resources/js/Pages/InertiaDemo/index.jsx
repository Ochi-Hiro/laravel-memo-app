import { Head } from '@inertiajs/react';
import { Link } from '@inertiajs/react';

export default function Index() {
  return (
    <>
      <Head title="Index" />
      
      <div className='p-6 text-gray-900'>
        InertiaTest from InertiaTestController
      </div>

      <Link href="/inertia-test" className='p-6 text-gray-900'>
        画面戻る
      </Link><br />
    </>
  )
};