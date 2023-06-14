import { Link } from '@inertiajs/react';
import { router } from '@inertiajs/react'

export default function Show({ memo }) {

  const deleteConform = () => {
    router.delete(`/inertia/${memo.id}`, {
      onBefore: () => confirm('このメモを削除しますか？'),
    })
  }

  return (
    <>
      <div>{ memo.title }</div>
      <div>{ memo.content }</div>

      <Link href="/inertia/index" className='p-6 text-gray-900'>
        画面戻る
      </Link><br />

      <button type="button" onClick={ deleteConform } >
        削除ボタン
      </button>
    </>
  )
}