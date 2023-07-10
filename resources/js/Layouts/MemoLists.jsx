import MemoCard from '@/Components/MemoCard';

const MemoLists = ({ memos }) => {
  const newMemos = [...memos];

  return (
    <div className="lg:w-1/3 bg-white overflow-y-scroll">
      {newMemos.map((memo) => (
        <MemoCard memo={memo} key={memo.id} />
      ))}
    </div>
  );
};

export default MemoLists;
