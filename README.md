# exp-recorder

簡易的な家計簿アプリ

## API 設計

Django REST framework を使って実装.

### 出費の一覧を取得

- Request

```
GET /api/money_record
```

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

### 出費を追加

- Request

```
POST /api/money_record
Content-type: application/json

{"name":"debug", "price":"100", "category": "debug"}
```

- Response

```
{"id":10,"name":"debug","price":100.0,"created_at":"2019-06-21T06:34:01.561747Z","category":"debug"}
```

## CLI

React を使って実装.
