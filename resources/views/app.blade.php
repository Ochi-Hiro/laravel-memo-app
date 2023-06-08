<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title inertia>{{ config('app.name', 'Laravel') }}</title>

        <!-- Fonts -->
        <link rel="preconnect" href="https://fonts.bunny.net">
        <link href="https://fonts.bunny.net/css?family=figtree:400,500,600&display=swap" rel="stylesheet" />

        <!-- Scripts -->
        {{-- directive(ディレクティブ) --}}
        {{-- ディレクティブとは、Bladeテンプレート内で特定のアクションや処理を実行するための命令のこと。
        ディレクティブは'@'シンボルで始まり、特定のキーワードや引数を含むことがある。
        テンプレートのコンテンツを制御したり、条件分岐、ループ処理、特定のビルトイン機能の利用のために使用される。 --}}

        @routes
        {{-- laravelのルーティング情報を生成。ルート名やURLなどの情報を提供する --}}
        {{-- @routes ディレクティブは、ルート名やURLを生成するための関数 route() や url() を呼び出すためのコードを出力する --}}

        @viteReactRefresh
        {{-- ViteとReactのリフレッシュ機能を有効にするためのディレクティブ
        このディレクティブを使用することで、開発中にコンポーネントの変更をリアルタイムで反映させることができる --}}

        @vite(['resources/js/app.jsx', "resources/js/Pages/{$page['component']}.jsx"])
        {{-- Viteを使用してJavaScriptファイルをビルドし、ブラウザで読み込むためのディレクティブ --}}
        {{-- 引数として、ビルド対象のJavaScriptファイルのパスを指定する --}}
        {{-- resources/js/app.jsxは通常、アプリケーションのエントリーポイントであり、
        resources/js/Pages/{$page['component']}.jsx は動的なページコンポーネントのパスを指定している --}}

        @inertiaHead
        {{-- Inertia.jsのディレクティブであり、ページのヘッドセクションに関連するメタ情報やスタイルシートを表示するために使用される --}}
        {{-- Inertia.jsは、Laravelアプリケーションでクライアントサイドのレンダリングを実現するためのフレームワーク --}}

        {{-- これらのディレクティブは、Laravelと関連するフロントエンド開発ツールやフレームワークと連携して、より効率的な開発をサポートするために使用される --}}
    </head>
    <body class="font-sans antialiased">
        @inertia

        {{-- @inertia ディレクティブを使用することで、
        クライアントサイドのJavaScriptコードが生成され、
        Inertia.jsが提供するルーティング機能に基づいて
        ページのコンポーネントがロードされます。
        このディレクティブを使用することで、
        Bladeテンプレート内にInertia.jsの設定やスクリプトを埋め込む必要がなくなります。 --}}
    </body>
</html>
