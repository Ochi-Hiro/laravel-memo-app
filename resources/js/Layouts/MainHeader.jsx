import MemoButton from '@/Components/MemoButton';
import { router } from '@inertiajs/react';

const MainHeader = ({ flash }) => {
  const newMemoConform = () => {
    router.post('/inertia');
  };

  return (
    <div className="sticky z-40 top-16 lg:top-20 h-16 bg-white">
      <div className="container flex mx-auto h-full items-center">
        <MemoButton
          onClick={newMemoConform}
          bordercolor={'indigo-200'}
          textcolor={'indigo-400'}
          hoverbg={'indigo-200'}
          className="ml-4"
        >
          + 新しいメモ
        </MemoButton>

        <div className="ml-4 lg:ml-6 text-rose-400">
          {flash.message && <div>{flash.message}</div>}
        </div>
      </div>
    </div>
  );
};

export default MainHeader;
