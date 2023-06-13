import { Head } from '@inertiajs/react';
import { Link } from '@inertiajs/react';
import { usePage } from '@inertiajs/react'

export default function Index({ memos }) {
  const { flash } = usePage().props
  console.log(memos);

  return (
    <>
      <Head title="Index" />
      
      {flash.message && (
        <div className='text-rose-500 ml-3'>{flash.message}</div>
      )}

      <div className='text-2xl text-gray-900 m-auto mt-12 text-center'>
        InertiaTest IndexPage
      </div>

      <div className='text-xl m-auto mt-6 text-center'>
        <Link href="/inertia/create" className='text-indigo-500 underline underline-offset-2'>
          Jump CreatePage
        </Link>
      </div>

      <ul>
        { memos.map((memo) => (
          <li key={memo.id}>
            <Link href={ route('inertia.show', { id: memo.id }) }>
              {memo.title}:{memo.content}
            </Link>
          </li>
        ))}
      </ul>
    </>
  )
};