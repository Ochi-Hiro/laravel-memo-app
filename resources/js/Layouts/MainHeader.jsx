import { router } from '@inertiajs/react';
import MemoButton from '@/Components/MemoButton';

const MainHeader = ({ flash }) => {
  const newMemoConform = () => {
    router.post('/inertia');
  };

  return (
    <div className="sticky z-40 top-16 lg:top-20 h-16 bg-white">
      <div className="container flex mx-auto h-full items-center">
        <MemoButton
          onClick={newMemoConform}
          textcolor={'indigo-500'}
          className="ml-4 border-indigo-300 hover:bg-indigo-300 hover:text-white"
        >
          <p>+ 新しいメモ</p>
        </MemoButton>

        <div className="ml-4 lg:ml-6 text-rose-400">
          {flash.message && <div>{flash.message}</div>}
        </div>
      </div>
    </div>
  );
};

export default MainHeader;
