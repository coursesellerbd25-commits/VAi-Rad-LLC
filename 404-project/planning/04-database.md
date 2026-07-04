# Database Design

## Overview

The application uses a relational database (SQLite) managed by Django ORM.

The database consists of three main entities:

- Task
- Image
- Polygon

Each entity is responsible for storing different parts of the application data.

---

# Task

Stores all Kanban tasks.

| Field | Type | Required | Description |
|------|------|----------|-------------|
| id | Integer | Yes | Primary Key |
| title | String | Yes | Task title |
| priority | String | Yes | Low, Medium, High |
| status | String | Yes | To Do, In Progress, Done |
| selected_date | Date | Yes | Date selected in the Kanban board |
| due_date | Date | Yes | Task deadline |
| tags | JSON | No | List of tags |
| created_at | DateTime | Yes | Creation timestamp |
| updated_at | DateTime | Yes | Last update timestamp |

---

## Image

Stores uploaded images.

| Field | Type | Required | Description |
|------|------|----------|-------------|
| id | Integer | Yes | Primary Key |
| image | ImageField | Yes | Uploaded image |
| filename | String | Yes | Original filename |
| uploaded_at | DateTime | Yes | Upload time |

---

## Polygon

Stores annotation polygons.

| Field | Type | Required | Description |
|------|------|----------|-------------|
| id | Integer | Yes | Primary Key |
| image | Foreign Key | Yes | Related image |
| points | JSON | Yes | Polygon coordinates |
| created_at | DateTime | Yes | Creation timestamp |

---

## Relationships

- One Image can contain many Polygons.
- One Polygon belongs to one Image.
- Tasks are independent and do not relate to Images.