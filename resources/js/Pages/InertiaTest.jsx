import { Head, Link } from '@inertiajs/react';
import { useState } from 'react';

export default function InertiaTest() {
  const [title, setTitle] = useState('');
  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const [content, setContent] = useState('');
  const handleContentChange = (e) => {
    setContent(e.target.value);
  };

  const [ternaryOperator, setTernaryOperator] = useState(true);
  const ternaryOperatorSelector = () => {
    setTernaryOperator((prev) => !prev);
  };

  return (
    <>
      <Head title="InertiaTest" />

      <div className="p-8 text-gray-900">InertiaTest</div>

      <a href="/" className="p-6 text-gray-900">
        aタグ
      </a>
      <br />

      <Link href="/" className="p-6 text-gray-900">
        link
      </Link>
      <br />

      {/* <Link href={ route('inertia.index') } className='p-6 text-gray-900'>
          名前付きルートのテスト
      </Link><br /> */}

      {/* <Link href={ route('inertia.show', { id: 50 }) } className='p-6 text-gray-900'>
          ルートパラメータのテスト
      </Link> */}

      <div className="mb-8"></div>

      <input type="text" name="title" value={title} onChange={handleTitleChange} className="m-3" />
      <br />

      <input
        type="text"
        name="content"
        value={content}
        onChange={handleContentChange}
        className="m-3"
      />
      <br />

      {/* <Link 
        href={ route('inertia.store')} 
        data={{ title: title, content: content }}  
        as='button'
        method='post'
      >
        storeテスト
      </Link><br /> */}

      <div className="mb-8"></div>

      {/* Linkで三項演算子テスト */}
      <button
        onClick={ternaryOperatorSelector}
        className="inline-flex items-center px-4 py-2 m-4
          bg-gray-800 border border-transparent rounded-md 
          font-semibold text-white hover:bg-gray-600"
      >
        ternaryOperatorSelect
      </button>
      <br />

      <Link href={ternaryOperator ? '/' : '/login'} className="p-6 text-gray-900">
        {ternaryOperator ? 'ホームに移動' : 'ログイン画面に移動'}
      </Link>
      <br />
    </>
  );
}
