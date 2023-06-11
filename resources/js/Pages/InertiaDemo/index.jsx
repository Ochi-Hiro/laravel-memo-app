import { Head } from '@inertiajs/react';
import { Link } from '@inertiajs/react';
import { usePage } from '@inertiajs/react'

export default function Index() {
  const { flash } = usePage().props

  return (
    <>
      <Head title="Index" />
      
      {flash.message && (
        <div className='text-rose-500 ml-3'>{flash.message}</div>
      )}

      <div className='p-6 text-gray-900'>
        InertiaTest from InertiaTestController
      </div>

      <Link href="/inertia-test" className='p-6 text-gray-900'>
        画面戻る
      </Link><br />
    </>
  )
};