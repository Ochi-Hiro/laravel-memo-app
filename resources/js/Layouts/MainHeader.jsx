import { Link } from '@inertiajs/react';

export default function MainHeader({ flash }) {
  return (
    <div className="sticky z-40 top-16 lg:top-20 h-16 bg-white">
      <div className="container flex mx-auto h-full items-center">
        <Link href={route('inertia.store')} method="post">
          <button
            className="ml-4 py-2 px-4 border border-indigo-200 rounded-lg 
            bg-white hover:bg-indigo-200 text-indigo-400 hover:text-white"
          >
            + 新しいメモ
          </button>
        </Link>

        <div className="ml-4 lg:ml-6 text-rose-400">
          {flash.message && <div>{flash.message}</div>}
        </div>
      </div>
    </div>
  );
}
