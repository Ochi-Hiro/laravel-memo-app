import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import MainHeader from '@/Layouts/MainHeader';
import MemoList from '@/Components/MemoList';
import MemoShow from '@/Components/MemoShow';
import { Head } from '@inertiajs/react';
import { usePage } from '@inertiajs/react';
import { createContext, useState } from 'react';

export const MemoContext = createContext();

export default function Index({ memos, auth }) {
  const { flash } = usePage().props;
  const firstMemo = memos[0];
  const showContent = useState(firstMemo);

  return (
    <MemoContext.Provider value={showContent}>
      <AuthenticatedLayout user={auth.user}>
        <Head title="Index" />
        <MainHeader flash={flash} />
        <div className="bg-white">
          <div className="container h-[40rem] lg:flex mx-auto text-gray-600 body-font">
            <MemoList memos={memos} />
            <MemoShow memos={memos} />
          </div>
        </div>
      </AuthenticatedLayout>
    </MemoContext.Provider>
  );
}
