# TODOリストをつくってみる。ReactHooksを使う。
## TODOリスト内の各TODOにほしい要素
- ID(連番もしくはuuidを設定)
- タイトル
- 期限
- ステータス(未着手、進行中、完了 など)
## ほしい機能
- TODOの追加
- TODOの削除
- TODOのタイトル・期限・ステータス変更
## 余裕があれば以下のようなカスタマイズをする
- TODOの編集機能
- ソート(ID、期限、ステータスで並べ替え)
- フィルター(ID、期限、ステータスで絞り込み)
- 要素追加（内容、作成日、更新日など）
- コメント機能
- ステータス変更でスタイル変更
- TODOリストを1箇所(どのパーツでもOK)コンポーネント化してみる
## 使用ツール
- react, react-hooks (useState, useEffect, useReducer, useContextあたり？)
- material-ui
## コンポーネント
- App
- TodoList
- Todo
## context
- title
- date
- status

## 残作業
- 並び替え対応（登録順、期限、ステータス）
- ソート対応（登録順、期限、ステータス）
- ステータス変更対応
- descriptionつける
- 作成日、更新日をつける