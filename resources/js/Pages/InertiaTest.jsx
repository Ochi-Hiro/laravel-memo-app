import { Head, Link } from '@inertiajs/react';
import { useState } from "react";


export default function InertiaTest() {

  const [title, setTitle] = useState('');
  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const [content, setContent] = useState('');
  const handleContentChange = (e) => {
    setContent(e.target.value);
  };

  return (
    <>
      <Head title="InertiaTest" />
      
      <div className='p-8 text-gray-900'>
          InertiaTest
      </div>

      <a href="/" className='p-6 text-gray-900'>
        aタグ
      </a><br />

      <Link href="/" className='p-6 text-gray-900'>
          link
      </Link><br />

      <Link href={ route('inertia.index') } className='p-6 text-gray-900'>
          名前付きルートのテスト
      </Link><br />

      <Link href={ route('inertia.show', { id: 50 }) } className='p-6 text-gray-900'>
          ルートパラメータのテスト
      </Link>

      <div className="mb-8"></div>

      <input 
        type="text"
        name="title"
        value={ title }
        onChange={ handleTitleChange }
        className='m-3'
      /><br />

      <input 
        type="text"
        name="content"
        value={ content }
        onChange={ handleContentChange }
        className='m-3'
      /><br />

      <Link 
        href={ route('inertia.store')} 
        data={{ title: title, content: content }}  
        as='button'
        method='post'
      >
        storeテスト
      </Link>

    </>
  )
};
