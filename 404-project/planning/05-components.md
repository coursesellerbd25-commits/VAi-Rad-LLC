# Component Planning

## Overview

To keep the application modular, maintainable, and reusable, the UI is divided into small, single-responsibility components. Components are grouped by feature (Common, Authentication, Tasks, and Annotation).

---

# Common Components

These components are shared across multiple pages.

| Component | Responsibility |
|-----------|----------------|
| Button | Reusable button component with different variants (Primary, Secondary, Danger, Outline). |
| Input | Reusable text input component with consistent styling and validation support. |
| Modal | Generic modal dialog used for forms and confirmations. |
| Loader | Displays loading indicators while data is being fetched or processed. |
| Navbar | Provides navigation between pages and displays the application logo and user actions. |
| PageHeader | Displays the page title and optional subtitle or action buttons. |
| EmptyState | Displays a friendly message when there is no data to show. |
| ErrorMessage | Displays API or validation error messages consistently throughout the application. |
| ConfirmDialog | Confirmation dialog used before destructive actions such as deleting tasks or polygons. |

---

# Authentication Components

Components related to user login.

| Component | Responsibility |
|-----------|----------------|
| LoginForm | Handles user login using email and password. |
| EmailInput | Collects the user's email address. |
| PasswordInput | Collects the user's password with show/hide functionality. |
| LoginButton | Submits the login form and displays loading state during authentication. |

---

# Task Management Components

Components used for the Kanban board.

| Component | Responsibility |
|-----------|----------------|
| DateSelector | Allows users to select a date and filters tasks accordingly. |
| Board | Parent container that renders all Kanban columns. |
| Column | Displays tasks belonging to a specific status (To Do, In Progress, Done). |
| TaskCard | Displays a task's title, priority, due date, and tags. Supports drag-and-drop. |
| TaskModal | Modal used to create and edit tasks. |
| TaskForm | Handles task input fields and validation inside the modal. |
| AddTaskButton | Opens the task creation modal. |
| DeleteTaskButton | Deletes the selected task after confirmation. |
| PriorityBadge | Displays the task priority using color-coded badges. |
| Tag | Displays an individual task tag. |
| DueDate | Displays the formatted due date of a task. |
| DragOverlay | Displays the dragged task while dragging between columns. |

---

# Annotation Components

Components used for image annotation.

| Component | Responsibility |
|-----------|----------------|
| ImageUpload | Uploads images to the backend server. |
| ImageGallery | Displays all uploaded images. |
| ImageSlider | Allows navigation between uploaded images. |
| ImageCanvas | Displays the selected image and handles drawing interactions. |
| PolygonLayer | Renders all saved polygons on top of the image. |
| Polygon | Displays an individual polygon annotation. |
| Toolbar | Contains drawing, deleting, and saving controls. |
| DrawTool | Activates polygon drawing mode. |
| DeletePolygonButton | Removes the selected polygon from the image. |
| SavePolygonButton | Saves newly created polygons to the backend. |
| ImageNavigator | Provides previous/next controls for browsing uploaded images. |

---

# Layout Components

High-level page layouts.

| Component | Responsibility |
|-----------|----------------|
| AppLayout | Main application layout containing Navbar and page content. |
| AuthLayout | Layout used for authentication pages. |
| DashboardLayout | Shared layout for authenticated pages. |

---

# Future Reusable Components (Optional)

These components are not required initially but may be added later to improve maintainability.

| Component | Responsibility |
|-----------|----------------|
| SearchBar | Filters tasks by keyword. |
| Toast | Displays success and error notifications. |
| Avatar | Displays the logged-in user's avatar. |
| Breadcrumb | Displays the current navigation path. |

---

# Component Hierarchy

App

├── AuthLayout

│ └── LoginForm

│ ├── EmailInput

│ ├── PasswordInput

│ └── LoginButton

│

└── AppLayout

├── Navbar

├── PageHeader

│

├── Tasks Page

│ ├── DateSelector

│ ├── AddTaskButton

│ ├── Board

│ │ ├── Column (To Do)

│ │ ├── Column (In Progress)

│ │ └── Column (Done)

│ │ └── TaskCard

│ │ ├── PriorityBadge

│ │ ├── Tag

│ │ └── DueDate

│ └── TaskModal

│ └── TaskForm

│

└── Annotation Page

├── ImageUpload

├── ImageGallery

├── ImageSlider

├── Toolbar

├── ImageCanvas

│ └── PolygonLayer

│ └── Polygon

└── SavePolygonButton

---

# Design Principles

- Every component should have a single responsibility.
- Components should be reusable whenever possible.
- Business logic should remain separate from UI components.
- API requests should not be made directly inside presentation components.
- Global state should be managed using Zustand.
- Server state should be managed using TanStack Query.
- Forms should use React Hook Form with Zod validation.
- Shared UI components should be placed inside the `components/common` directory.