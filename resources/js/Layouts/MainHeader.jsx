import { Link } from '@inertiajs/react';

export default function MainHeader({ flash }) {
  return(
    <div className='sticky z-40 top-16 lg:top-24  h-12 lg:h-16 bg-gray-100'>
      <div className='flex pt-4 lg:pt-6'>

        <div className='ml-2 lg:hidden'>
          <Link href="/inertia/create" className='text-indigo-500 underline underline-offset-2'>
            + 新しいメモ
          </Link>
        </div>

        <div className='hidden lg:inline-block ml-4 text-xl '>
          <Link 
            href={ route('inertia.lgstore')}
            method='post'
            className='text-indigo-500 underline underline-offset-2'
          >
            + 新しいメモ
          </Link>
        </div>
        
        <div className="ml-4 lg:ml-6 lg:text-xl text-rose-500">
          {flash.message && (
            <div>{ flash.message }</div>
          )}
        </div>
        
      </div>
    </div>
  )
}