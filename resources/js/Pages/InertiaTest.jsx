import { Head } from '@inertiajs/react';
import { Link } from '@inertiajs/react';

export default function InertiaTest() {
  return (
    <>
      <Head title="InertiaTest" />
      
      <div className='p-6 text-gray-900'>
          InertiaTest
      </div>

      <a href="/">
        aタグ
      </a><br />

      <Link href="/">
          link
      </Link><br />

      <Link href={ route('inertia.index') }>
          名前付きルートのテスト
      </Link><br />

      <Link href={ route('inertia.show', { id: 50 }) }>
          ルートパラメータのテスト
      </Link>
    </>
  )
};
