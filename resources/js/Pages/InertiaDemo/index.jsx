import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import MainHeader from '@/Layouts/MainHeader';
import { Head } from '@inertiajs/react';
import { Link } from '@inertiajs/react';
import { usePage } from '@inertiajs/react';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faTrash, faArrowRightToBracket } from '@fortawesome/free-solid-svg-icons';

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
        <div className="bg-white">
          <div className="container h-[40rem] lg:flex mx-auto text-gray-600 body-font">
            <div className="lg:w-1/3 bg-white overflow-hidden">
              <div>
                {memos.map((memo) => (
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
            </div>

            <div className="hidden lg:inline-block w-2/3 bg-white">
              <div className="h-full py-12 px-10 border border-gray-200 rounded-lg">
                <div className="flex mb-8">
                  <h1
                    className="title-font text-4xl font-medium 
                            text-gray-900 truncate"
                  >
                    {showContent.title}
                  </h1>

                  <div className="m-0 ml-auto">
                    <button
                      className="py-2 px-6 mr-4
                            border border-green-500 rounded-md 
                            bg-white hover:bg-green-500 text-green-500 hover:text-green-100"
                    >
                      <div className="flex items-center">
                        <p className="mr-2">
                          <FontAwesomeIcon icon={faPenToSquare} />
                        </p>
                        <p>編集</p>
                      </div>
                    </button>

                    <button
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

                <p className="leading-relaxed mb-5">{showContent.content}</p>
              </div>
            </div>
          </div>
        </div>
      </AuthenticatedLayout>
    </>
  );
}
