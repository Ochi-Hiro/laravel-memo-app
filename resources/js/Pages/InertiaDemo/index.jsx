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

      <div className='text-3xl text-gray-900 m-auto mt-12 text-center'>
        InertiaTest IndexPage
      </div>

      <div className='text-xl m-auto mt-6 text-center'>
        <Link href="/inertia/create" className='text-indigo-500 underline underline-offset-2'>
          Jump CreatePage
        </Link>
      </div>

      <section class="text-gray-600 body-font">
        <div class="container px-5 py-24 mx-auto">
          <div class="flex flex-wrap -mx-4 -my-8">
            { memos.map((memo) => (
              <div class="py-8 px-4 lg:w-1/3">
                <div class="h-full flex items-start">
                  <div class="flex-grow pl-6">
                    <h2 class="tracking-widest text-xs title-font font-medium text-indigo-500 mb-1">TITLE</h2>
                    <Link href={ route('inertia.show', { id: memo.id }) }>
                      <h1 class="title-font text-xl font-medium text-gray-900 mb-3">{ memo.title }</h1>
                    </Link>
                    <p class="leading-relaxed mb-5">{memo.content}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
};