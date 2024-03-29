<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Memo;
use Illuminate\Support\Facades\Auth;

class InertiaTestController extends Controller
{
    public function index()
    {
        return Inertia::render('InertiaDemo/index',[
            'memos' => Memo::where('user_id', Auth::id())
                ->orderBy('id', 'desc')
                ->get()
        ]);
    }

    public function show($id)
    {
        $memo = Memo::findOrFail($id);

        return Inertia::render('InertiaDemo/Show',[
            'memo' => $memo
        ]);
    }

    public function store(Request $request)
    {
        $inertiaTest = new Memo;
        $inertiaTest -> user_id = Auth::id();
        $inertiaTest -> title = '';
        $inertiaTest -> content = '';
        $inertiaTest ->save();

        return to_route('inertia.index');
    }

    public function update(Request $request, $id)
    {
        // dd($request);
        $memo = Memo::findOrFail($id);
        $memo = Memo::findOrFail($request->id);
        $memo->title = $request->title;
        $memo->content = $request->content;
        $memo->save();

        return to_route('inertia.index')
        ->with([
            'message' => '編集内容を保存しました'
        ]);
    }

    public function delete($id)
    {
        $memo = Memo::findOrFail($id);
        $memo->delete();

        return to_route('inertia.index')
        ->with([
            'message' => 'メモを削除しました'
        ]);
    }
}