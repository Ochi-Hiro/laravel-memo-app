import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import MainHeader from '@/Layouts/MainHeader';
import { Head } from '@inertiajs/react';
import { Link } from '@inertiajs/react';
import { usePage } from '@inertiajs/react';
import { useState } from 'react';

export default function Index({ memos, auth }) {
  const firstMemo = memos[0];
  const { flash } = usePage().props;
  const [showContent, setShowContent] = useState(firstMemo);

  return (
    <>
      <AuthenticatedLayout user={auth.user}>
        <Head title="Index" />

        <MainHeader flash={flash} />

        {/* <div className="max-w-7xl lg:max-w-4xl xl:max-w-6xl px-8"> */}
        <div className="container mx-auto">
          <section class="text-gray-600 body-font">
            <div class="container h-full">
              <div className="lg:flex">
                <div className="lg:w-1/3">
                  {memos.map((memo) => (
                    <div>
                      <div className="hidden lg:inline">
                        <div
                          onClick={() => setShowContent(memo)}
                          className="py-4 lg:py-5 px-6 lg:px-3 h-30 border border-gray-300 rounded-lg hover:bg-gray-200"
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

                      {/* 画面小 */}
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

                <div className="hidden lg:inline-block">
                  <div className="fixed top-40 w-2/3 z-50">
                    <div className="py-12 px-10 border border-gray-300 rounded-lg">
                      <div className="flex mb-8">
                        <h1
                          className="title-font text-4xl font-medium 
                            text-gray-900 truncate"
                        >
                          {showContent.title}
                        </h1>

                        <button
                          className="items-center px-6 py-2 ml-6 
                            rounded-lg bg-green-400 hover:bg-green-600 
                            text-white font-semibold"
                        >
                          編集
                        </button>

                        <button className="m-0 ml-auto pr-4 border border-gray-300 rounded-md bg-gray-200 hover:bg-gray-400">
                          <div className="flex items-center">
                            <img src="/images/trash.png" alt="削除" width="40" />
                            <p>削除</p>
                          </div>
                        </button>
                      </div>

                      <p className="leading-relaxed mb-5">{showContent.content}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </AuthenticatedLayout>
    </>
  );
}
