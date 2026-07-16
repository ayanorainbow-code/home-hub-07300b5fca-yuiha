# YUIHAハブ

夫婦で育児の手続きや保険の検討候補などを共有するための、GitHub Pages 製の簡易サイトです。

## 公開範囲について（重要）

GitHub Pages の無料プランはリポジトリを「公開」にしないと使えません。
そのため、このサイトは以下の方法で擬似的に非公開にしています。

- リポジトリ名・URL を推測されにくいランダムな文字列にしている
- 各ページに `<meta name="robots" content="noindex, nofollow">` を設定
- `robots.txt` で検索エンジンのクロールを禁止

**ただしURLを知っていれば誰でも閲覧できる状態です。** 本当に厳密な非公開（GitHubログインでのアクセス制限）が必要になったら、GitHub Pro などの有料プランへの切り替えを検討する。

## 更新のしかた

1. `index.html` / `pages/*.html` を直接編集する
2. 変更を commit して push する

```
git add -A
git commit -m "update: 〇〇を追記"
git push
```

push すると数十秒〜数分でサイトに反映されます。

## ページの追加方法

1. `pages/` に新しい `.html` ファイルを作成（既存ファイルをコピーして編集すると楽です）
2. `index.html` の `.card-grid` 内にリンクカードを追加

## 他編集者をリポジトリに招待する場合

GitHub の Settings → Collaborators から、GitHub アカウントをコラボレーターとして招待可能
