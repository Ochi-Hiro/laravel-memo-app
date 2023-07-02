import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import MainHeader from '@/Layouts/MainHeader';
import MemoLists from '@/Layouts/MemoLists';
import MemoMain from '@/Layouts/MemoMain';
import { Head } from '@inertiajs/react';
import { usePage } from '@inertiajs/react';
import { createContext, useState, useEffect } from 'react';
import useWindowSize from '@/hooks/useWindowSize';

export const MemoContext = createContext();
export const WindowContext = createContext();

export default function Index({ memos, auth }) {
  const [width, height] = useWindowSize();
  const [isWide, setIsWide] = useState();
  useEffect(() => {
    width > 1024 ? setIsWide(true) : setIsWide(false);
  }, [width]);

  const nowWide = [isWide, setIsWide];

  const { flash } = usePage().props;

  const firstMemo = memos[0];
  const showContent = useState(firstMemo);

  return (
    <WindowContext.Provider value={nowWide}>
      <MemoContext.Provider value={showContent}>
        <AuthenticatedLayout user={auth.user}>
          <Head title="Index" />
          <MainHeader flash={flash} />
          <div className="bg-white">
            <div className="container h-[40rem] lg:flex mx-auto text-gray-600 body-font">
              <MemoLists memos={memos} />
              {isWide && <MemoMain memos={memos} />}
            </div>
          </div>
        </AuthenticatedLayout>
      </MemoContext.Provider>
    </WindowContext.Provider>
  );
}
