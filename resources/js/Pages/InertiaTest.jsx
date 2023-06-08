import { Head } from '@inertiajs/react';
import { Link } from '@inertiajs/react';

export default function InertiaTest() {
  return (
    <>
        <Head title="InertiaTest" />
        
        <div className='p-6 text-gray-900'>
            InertiaTest
        </div>
        <a href="/">aタグ</a><br />
        <Link href="/">
            link
        </Link>
    </>
  )
};
