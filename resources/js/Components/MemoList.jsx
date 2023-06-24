import { Link } from '@inertiajs/react';
import { useContext } from 'react';
import { MemoContext } from '@/Pages/InertiaDemo/index';

const MemoList = ({ memos }) => {
  const newMemos = [...memos];
  const [, setShowContent] = useContext(MemoContext);

  return (
    <div className="lg:w-1/3 bg-white overflow-hidden">
      {newMemos.map((memo) => (
        <div>
          <div className="hidden lg:inline">
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
                <p class="leading-relaxed mb-1 line-clamp-2 line-clamp-2 lg:line-clamp-1">
                  {memo.content}
                </p>
              </div>
            </div>
          </div>

          <div className="lg:hidden">
            <Link href={route('inertia.show', { id: memo.id })}>
              <div className="py-4 px-10 h-30 border border-gray-300 rounded-lg hover:bg-gray-200">
                <div className="flex-grow h-full w-full lg:pl-4">
                  <h2 className="tracking-widest text-xs title-font font-medium text-indigo-500 lg:pb-1">
                    TITLE
                  </h2>
                  <h1 class="title-font text-lg font-medium text-gray-900 truncate">
                    {memo.title}
                  </h1>
                  <p class="leading-relaxed mb-1 line-clamp-2 line-clamp-2 lg:line-clamp-1">
                    {memo.content}
                  </p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MemoList;
