# API Design

## Base URL

/api/

---

# Authentication APIs

## POST /api/login

### Purpose

Authenticate the user and return a JWT token.

### Authentication

❌ No

### Request Body

```json
{
  "email": "user@example.com",
  "password": "password123"
}
```

### Success Response

```json
{
  "access": "jwt_access_token",
  "refresh": "jwt_refresh_token"
}
```

### Error Response

```json
{
  "message": "Invalid email or password"
}
```

---

# Task APIs

## GET /api/tasks

### Purpose

Retrieve all tasks.

### Authentication

✅ Yes

### Query Parameters

date=2026-07-10

### Response

```json
[
  {
    "id": 1,
    "title": "Build Kanban Board",
    "priority": "High",
    "status": "Todo",
    "selected_date": "2026-07-10",
    "due_date": "2026-07-12",
    "tags": ["Frontend", "React"]
  }
]
```

## POST /api/tasks

### Authentication

✅ Yes

### Request

```json
{
  "title": "Implement Login",
  "priority": "High",
  "status": "Todo",
  "selected_date": "2026-07-10",
  "due_date": "2026-07-11",
  "tags": ["Backend"]
}
```

### Response

Returns the created task.

## PUT /api/tasks/{id}

### Authentication

✅ Yes

### Purpose

Update an existing task.

### Request

```json
{
  "title": "Updated Task",
  "status": "Done"
}
```

### Response

Updated task object.

## DELETE /api/tasks/{id}

### Authentication

✅ Yes

### Response

```json
{
  "message": "Task deleted successfully"
}
```

---

# Image APIs

## POST /api/images

### Authentication

✅ Yes

### Purpose

Upload a new image.

### Request

Multipart Form Data

image=file.jpg

### Response

```json
{
  "id": 5,
  "image": "/media/file.jpg"
}
```

## GET /api/images

### Authentication

✅ Yes

### Response

```json
[
  {
    "id": 1,
    "image": "/media/image1.jpg"
  },
  {
    "id": 2,
    "image": "/media/image2.jpg"
  }
]
```

---

# Polygon APIs

## POST /api/polygons

### Authentication

✅ Yes

### Request

```json
{
  "image": 1,
  "points": [
    { "x": 100, "y": 120 },
    { "x": 150, "y": 140 },
    { "x": 180, "y": 200 }
  ]
}
```

### Response

Returns the created polygon.

## GET /api/polygons/{imageId}

### Authentication

✅ Yes

### Purpose

Retrieve all polygons for an image.

### Response

```json
[
  {
    "id": 1,
    "points": [
      { "x": 100, "y": 100 },
      { "x": 120, "y": 200 }
    ]
  }
]
```

## DELETE /api/polygons/{id}

### Authentication

✅ Yes

### Response

```json
{
  "message": "Polygon deleted successfully"
}
```

---

# API Summary

| Method | Endpoint | Description | Authentication |
|--------|----------|-------------|----------------|
| POST | `/api/login` | Authenticate user and return JWT tokens | ❌ No |
| GET | `/api/tasks` | Retrieve all tasks (optionally filtered by date) | ✅ Yes |
| POST | `/api/tasks` | Create a new task | ✅ Yes |
| PUT | `/api/tasks/{id}` | Update an existing task | ✅ Yes |
| DELETE | `/api/tasks/{id}` | Delete a task | ✅ Yes |
| GET | `/api/images` | Retrieve all uploaded images | ✅ Yes |
| POST | `/api/images` | Upload a new image | ✅ Yes |
| GET | `/api/images/{imageId}/polygons` | Retrieve all polygons for a specific image | ✅ Yes |
| POST | `/api/polygons` | Save a new polygon annotation | ✅ Yes |
| DELETE | `/api/polygons/{id}` | Delete a polygon annotation | ✅ Yes |

---

## API Flow Overview

```text
Frontend (React)

        │
        │ Axios Requests
        ▼

Django REST API

        │
        │ Django ORM
        ▼

SQLite Database

        ▲
        │

JSON Responses
```