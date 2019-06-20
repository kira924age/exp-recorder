# exp-recorder

簡易的な家計簿アプリ

## API 設計

Django REST framework を使って実装.

### `GET /api/money_record` で出費の一覧を取得

- Response

```
[
    {
        "id": 2,
        "name": "ファミチキ",
        "price": 180.0,
        "created_at": "2019-06-18T15:31:35.268342Z",
        "category": "飲食料"
    },
    {
        "id": 4,
        "name": "なか卯カツ丼大盛",
        "price": 650.0,
        "created_at": "2019-06-19T00:40:36.012571Z",
        "category": "飲食料"
    },
    {
        "id": 6,
        "name": "チキンカツバーガー",
        "price": 118.0,
        "created_at": "2019-06-19T09:28:13.226240Z",
        "category": "飲食料"
    },
    {
        "id": 8,
        "name": "9番小辛",
        "price": 590.0,
        "created_at": "2019-06-19T11:06:14.801915Z",
        "category": "飲食料"
    }
]
```

## CLI

React を使って実装.
