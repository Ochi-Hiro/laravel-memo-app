import { Link } from '@inertiajs/react';

export default function Show({ memo }) {
    return (
        <>
            <div>{ memo.title }</div>
            <div>{ memo.content }</div>

            <Link href="/inertia/index" className='p-6 text-gray-900'>
                画面戻る
            </Link><br />
        </>
    )
}