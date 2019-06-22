# exp-recorder

簡易的な家計簿アプリ

## API 設計

Django REST framework を使って実装.

### 出費情報の一覧を取得

- Request

```
GET /api/money_record
```

- Response

```
[
    {
        "id": 22,
        "name": "フランクロール",
        "price": 165.0,
        "created_at": "2019/06/22 11:20:55",
        "category": "食費"
    },
    {
        "id": 20,
        "name": "電気代",
        "price": 5731.0,
        "created_at": "2019/06/22 01:53:34",
        "category": "公共料金"
    },
    {
        "id": 19,
        "name": "カツとじ定食",
        "price": 1000.0,
        "created_at": "2019/06/21 23:39:55",
        "category": "食費"
    },
    {
        "id": 8,
        "name": "9番小辛",
        "price": 590.0,
        "created_at": "2019/06/19 20:06:14",
        "category": "飲食料"
    },
    {
        "id": 2,
        "name": "ファミチキ",
        "price": 180.0,
        "created_at": "2019/06/19 00:31:35",
        "category": "飲食料"
    }
]
```

### 出費情報の追加

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

## 出費情報の詳細の取得

- Request

```
GET /api/detail/20
```

- Response

```
{
    "id": 20,
    "name": "電気代",
    "price": 5731.0,
    "created_at": "2019/06/22 01:53:34",
    "category": "公共料金"
}
```

## 出費情報の削除

- Request

```
DELETE /api/detail/7
```

- Response

```
HTTP 204 No Content
Allow: GET, PUT, PATCH, DELETE, HEAD, OPTIONS
Content-Type: application/json
Vary: Accept
```
## 出費情報の更新

- Request

```
PUT /api/detail/29
Content-type: application/json

{
    "name": "hoge",
    "price": 0,
    "category": "other"
}
```

- Response

```
HTTP 200 OK
Allow: GET, PUT, PATCH, DELETE, HEAD, OPTIONS
Content-Type: application/json
Vary: Accept

{
    "id": 29,
    "name": "hoge",
    "price": 0.0,
    "created_at": "2019/06/22",
    "category": "other"
}
```

## CLI

React を使って実装.

React UI Component Library は Material-UI を採用.
