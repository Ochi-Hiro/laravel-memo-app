import { useContext } from 'react';
import { MemoContext } from '@/Pages/InertiaDemo/index';
import { WindowContext } from '@/Pages/InertiaDemo/index';
import { EditContext } from '@/Pages/InertiaDemo/index';

const MemoCard = ({ memo }) => {
  const [, setShowContent] = useContext(MemoContext);
  const [isWide] = useContext(WindowContext);
  const [, setIsEdit] = useContext(EditContext);

  return (
    <>
      {isWide ? (
        <div
          onClick={() => {
            setShowContent(memo);
            setIsEdit(true);
          }}
          className="py-5 px-3 h-30 border border-gray-200 rounded-lg hover:bg-gray-200"
        >
          <div className="flex-grow h-full w-full pl-4">
            <h2 className="tracking-widest text-xs title-font font-medium text-indigo-500 pb-1">
              TITLE
            </h2>
            <h1 className="title-font text-xl font-medium text-gray-900 pb-3 truncate">
              {memo.title}
            </h1>
            <p className="leading-relaxed mb-1 line-clamp-1">{memo.content}</p>
          </div>
        </div>
      ) : (
        <div
          onClick={() => setShowContent(memo)}
          className="py-4 mx-8 px-4 h-30 border border-gray-200 rounded-lg hover:bg-gray-200"
        >
          <div className="flex-grow h-full w-full pl-4">
            <h2 className="tracking-widest text-xs title-font font-medium text-indigo-500">
              TITLE
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-900 pb-2 truncate">
              {memo.title}
            </h1>
            <p className="leading-relaxed line-clamp-1">{memo.content}</p>
          </div>
        </div>
      )}
    </>
  );
};

export default MemoCard;
