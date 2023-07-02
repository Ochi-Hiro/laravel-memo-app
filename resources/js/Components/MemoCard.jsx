import { useContext } from 'react';
import { MemoContext } from '@/Pages/InertiaDemo/index';
import { WindowContext } from '@/Pages/InertiaDemo/index';

const MemoCard = ({ memo }) => {
  const [, setShowContent] = useContext(MemoContext);
  const [isWide] = useContext(WindowContext);

  return (
    <>
      {!isWide && <p>test</p>}
      <div
        onClick={() => setShowContent(memo)}
        className="py-4 lg:py-5 px-6 lg:px-3 h-30 border border-gray-200 rounded-lg hover:bg-gray-200"
      >
        <div className="flex-grow h-full w-full lg:pl-4">
          <h2 className="tracking-widest text-xs title-font font-medium text-indigo-500 lg:pb-1">
            TITLE
          </h2>
          <div className="hidden lg:inline-block">
            <h1 className="title-font text-xl font-medium text-gray-900 pb-3 truncate">
              {memo.title}
            </h1>
          </div>
          <p className="leading-relaxed mb-1 line-clamp-2 line-clamp-2 lg:line-clamp-1">
            {memo.content}
          </p>
        </div>
      </div>
    </>
  );
};

export default MemoCard;
