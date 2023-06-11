import { Link } from '@inertiajs/react';

export default function Show({id}) {
    return (
        <>
            <p className='p-6 text-gray-900'>渡されたルートパラメータ : {id}</p>

            <Link href="/inertia-test" className='p-6 text-gray-900'>
                画面戻る
            </Link><br />
        </>
    )
}