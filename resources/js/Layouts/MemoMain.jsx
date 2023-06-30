import { useContext, useState } from 'react';
import { MemoContext } from '@/Pages/InertiaDemo/index';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons';
import { router } from '@inertiajs/react';
import MemoButton from '@/Components/MemoButton';

const MemoMain = ({ memos }) => {
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

  const [isEdit, setIsEdit] = useState(true);
  const editConform = () => {
    setIsEdit((prev) => !prev);
  };

  return (
    <div className="w-2/3 bg-white">
      <div className="h-full py-12 px-10 border border-gray-200 rounded-lg">
        <div className="flex mb-8 h-12">
          {isEdit ? (
            <h1
              className="title-font text-4xl font-medium 
                text-gray-900 truncate"
            >
              {viewContent.title}
            </h1>
          ) : (
            <div>
              <input
                type="text"
                value={viewContent.title}
                className="text-4xl font-medium h-11 w-4/5"
              />
            </div>
          )}

          <div className="flex m-0 ml-auto">
            <MemoButton
              onClick={editConform}
              bordercolor={isEdit ? 'green-500' : 'red-500'}
              textcolor={isEdit ? 'green-500' : 'red-500'}
              hoverbg={isEdit ? 'green-500' : 'red-500'}
              className="px-6 mr-4 w-28"
            >
              <div className="flex items-center">
                <p className="mr-2">
                  <FontAwesomeIcon icon={faPenToSquare} />
                </p>
                <p>{isEdit ? '編集' : '保存'}</p>
              </div>
            </MemoButton>

            <MemoButton
              onClick={deleteConform}
              bordercolor={'gray-200'}
              textcolor={'gray-500'}
              hoverbg={'gray-400'}
              className="w-24"
            >
              <div className="flex items-center">
                <p className="mr-2">
                  <FontAwesomeIcon icon={faTrash} />
                </p>
                <p>削除</p>
              </div>
            </MemoButton>
          </div>
        </div>

        {isEdit ? (
          <div className="leading-relaxed mb-5">{viewContent.content}</div>
        ) : (
          <textarea
            name="content"
            id={viewContent.id}
            rows="10"
            className="w-full"
            value={viewContent.content}
          />
        )}
      </div>
    </div>
  );
};

export default MemoMain;
