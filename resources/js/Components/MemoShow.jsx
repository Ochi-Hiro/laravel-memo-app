import React from 'react';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';

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

const MemoShow = () => {
  return (
    <div className="h-full py-12 px-10 border border-gray-200 rounded-lg">
      <div className="flex mb-8 h-12">
        <h1
          className="title-font text-4xl font-medium 
            text-gray-900 truncate"
        >
          {viewContent.title}
        </h1>

        <div className="flex m-0 ml-auto">
          <button
            onClick={editConform}
            className="py-2 px-6 mr-4 w-28 
              border border-green-500 rounded-md 
              bg-white hover:bg-green-500 
              text-green-500 hover:text-green-100"
          >
            <div className="flex items-center">
              <p className="mr-2">
                <FontAwesomeIcon icon={faPenToSquare} />
              </p>
              <p>編集</p>
            </div>
          </button>

          <button
            onClick={deleteConform}
            className="py-2 px-4 w-24
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
      <div className="leading-relaxed mb-5">{viewContent.content}</div>
    </div>
  );
};

export default MemoShow;
