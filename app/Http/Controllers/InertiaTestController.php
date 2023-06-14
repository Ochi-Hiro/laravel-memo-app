<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\InertiaTest;

class InertiaTestController extends Controller
{
    public function index()
    {
        return Inertia::render('InertiaDemo/index',[
            'memos' => InertiaTest::all()
        ]);
    }

    public function create()
    {
        return Inertia::render('InertiaDemo/Create');
    }


    public function show($id)
    {
        $memo = InertiaTest::findOrFail($id);

        return Inertia::render('InertiaDemo/Show',[
            'memo' => $memo
        ]);
    }

    public function store(Request $request)
    {
        $request->validate([
            'title' => ['required', 'max:20'],
            'content' => ['required']
        ]);

        $inertiaTest = new InertiaTest;
        $inertiaTest ->title = $request->title;
        $inertiaTest ->content = $request->content;
        $inertiaTest ->save();

        return to_route('inertia.index')
        ->with([
            'message' => 'メモを登録しました'
        ]);
    }

    public function delete($id)
    {
        $memo = InertiaTest::findOrFail($id);
        $memo->delete();

        return to_route('inertia.index')
        ->with([
            'message' => 'メモを削除しました'
        ]);
    }
}