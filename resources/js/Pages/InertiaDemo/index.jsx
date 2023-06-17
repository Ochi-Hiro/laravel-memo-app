import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { Link } from '@inertiajs/react';
import { usePage } from '@inertiajs/react'

export default function Index({ memos,auth }) {
  const { flash } = usePage().props
  console.log(memos);

  return (
    <>
      <AuthenticatedLayout
        user={auth.user}
        header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">InertiaTest IndexPage</h2>}
      >
      
        <Head title="Index" />
        
        <div className="flex mt-6">
          <div className='text-xl ml-8'>
            <Link href="/inertia/create" className='text-indigo-500 underline underline-offset-2 left: 2.75rem;'>
              Jump CreatePage
            </Link>
          </div>
          
            {flash.message && (
              <div className='text-rose-500 ml-3'>{flash.message}</div>
            )}
        </div>

        <section class="text-gray-600 body-font">
          <div class="container py-20 mx-auto">
            <div class="flex flex-wrap mx-4 -my-8">
              { memos.map((memo) => (
                <div class="py-5 px-3 h-40 border border-gray-300 rounded-lg w-1/3 lg:w-1/4 lg:h-44">
                  <div class="flex-grow h-full w-full pl-4">
                    <h2 class="tracking-widest text-xs title-font font-medium text-indigo-500 mb-1">TITLE</h2>
                    <Link href={ route('inertia.show', { id: memo.id }) }>
                      <h1 class="title-font text-xl font-medium text-gray-900 mb-3 truncate">{ memo.title }</h1>
                    </Link>
                    <p class="leading-relaxed mb-5 line-clamp-2 lg:line-clamp-3">{memo.content}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </AuthenticatedLayout>
    </>
  )
};