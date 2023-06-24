import { useContext, useState } from 'react';
import { MemoContext } from '@/Pages/InertiaDemo/index';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons';
import { router } from '@inertiajs/react';

const MemoShow = ({ memos }) => {
  const [viewContent, setViewContent] = useContext(MemoContext);

  const deleteConform = () => {
    router.delete(`/inertia/${viewContent.id}`, {
      onBefore: () => confirm('このメモを削除しますか？'),
      onFinish: () => {
        const updatedMemos = [...memos];
        if (updatedMemos[0].id == viewContent.id) {
          updatedMemos.splice(0, 1); // memosの最初の要素を削除
          setViewContent(updatedMemos[0]);
        } else {
          setViewContent(updatedMemos[0]);
        }
      },
    });
  };

  const [editSaveSelector, setEditSaveSelector] = useState(true);

  const editConform = () => {
    setEditSaveSelector((prev) => !prev);
  };
  console.log(editSaveSelector);

  return (
    <div className="hidden lg:inline-block w-2/3 bg-white">
      <div className="h-full py-12 px-10 border border-gray-200 rounded-lg">
        <div className="flex mb-8">
          <h1
            className="title-font text-4xl font-medium 
              text-gray-900 truncate"
          >
            {viewContent.title}
          </h1>

          <div className="m-0 ml-auto">
            <button
              onClick={editConform}
              className={
                editSaveSelector
                  ? 'py-2 px-6 mr-4 border border-green-500 rounded-md bg-white hover:bg-green-500 text-green-500 hover:text-green-100'
                  : 'py-2 px-6 mr-4 border border-red-500 rounded-md bg-white hover:bg-red-500 text-red-500 font-semibold hover:text-red-100'
              }
            >
              <div className="flex items-center">
                <p className="mr-2">
                  <FontAwesomeIcon icon={faPenToSquare} />
                </p>
                <p>{editSaveSelector ? '編集' : '保存'}</p>
              </div>
            </button>

            <button
              onClick={deleteConform}
              className="py-2 px-4
                border border-gray-200 rounded-md 
                bg-white hover:bg-gray-400 hover:text-gray-100"
            >
              <div className="flex items-center">
                <p className="mr-2">
                  <FontAwesomeIcon icon={faTrash} />
                </p>
                <p>削除</p>
              </div>
            </button>
          </div>
        </div>

        <p className="leading-relaxed mb-5">{viewContent.content}</p>
      </div>
    </div>
  );
};

export default MemoShow;
