# kiwi_power 🥝


## DB設計
```mermaid
erDiagram

users ||--o{ periods : ""
users ||--o{ records : ""
users ||--o{ objectives : ""

users {
integer id PK
string username
string email
string encrypted_password
float goal_weight "目標体重 (kg)"
float height "身長 (cm)"
boolean display_body_fat "体脂肪率表示/非表示"
}

periods {
integer id PK
integer user_id FK
date start "生理開始日"
date end "生理終了日"
}

records {
integer id PK
integer user_id FK
date date "体重計測日"
float weight "体重 (kg)"
float body_fat "体脂肪率 (%)"
}

objectives {
integer id PK
integer user_id FK
integer type "(enum) 0: image, 1: verbal"
string verbal "目標を言葉で表現したもの"
text comment "目標についてのメモ"
integer order "ビジョンボードでの表示順"
}
```

### DB設計の補足
#### periods 生理周期テーブル
- 生理周期を登録したい場合に利用
- 開始（予定）日と終了（予定）日を生理周期登録画面にて登録
- 体重記録時に、生理開始1週間前〜生理終了日の期間内ならそれに合わせたメッセージが体重記録後に表示される

#### objectives 目標テーブル
- 目標を登録すると、ビジョンボード画面にてフィード形式で登録した目標の画像or言葉たちが表示される
- 目標登録画面にて、登録する目標のタイプを"画像"(image)か"言葉"(verbal)のどちらか選び、追記したいことがあればメモに記し目標を登録する
- 目標編集画面にて、ビジョンボードに表示する並び順を変更できる
