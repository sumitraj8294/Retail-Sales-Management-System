# System Architecture Document  
Retail Sales Management System

---

## 1. Backend Architecture

The backend follows a **RESTful API architecture** built using **Node.js and Express.js**. It is responsible for handling all business logic, database communication, and data processing. The backend connects to a **MongoDB database** and serves structured JSON responses to the frontend.

### Key Backend Components:
- **Express Server:** Handles HTTP requests and routing.
- **Controllers:** Process incoming requests and return appropriate responses.
- **Services:** Contain business logic for search, filters, sorting, pagination, and KPIs.
- **Models:** Define MongoDB schemas using Mongoose.
- **Routes:** Map API endpoints to controllers.
- **Database:** MongoDB stores all transactional and operational retail data.

The backend is deployed on **Render**, and environment variables such as `MONGO_URI` and `PORT` are managed securely.

---

## 2. Frontend Architecture

The frontend is built using **React with Vite** and follows a **component-based architecture**. Each feature is implemented as a reusable UI component. The frontend communicates with the backend through **Axios-based API calls**.

### Key Frontend Layers:
- **UI Components:** Sidebar, Tables, Filters, KPI Cards, Pagination, Search.
- **Service Layer:** Handles API calls (`api.js`).
- **State Management:** Uses React `useState` and `useEffect`.
- **Styling:** Implemented using standard CSS files.
- **Build Tool:** Vite for fast development and optimized production builds.

The frontend is deployed on **Vercel** and dynamically communicates with the Render backend.

---

## 3. Data Flow

1. The user interacts with the frontend (search, filters, sorting, pagination).
2. The frontend sends API requests to the backend using Axios.
3. The backend receives the request through routes.
4. Controllers call services to apply:
   - Search logic
   - Filter conditions
   - Sorting rules
   - Pagination calculations
5. The service queries MongoDB and retrieves the processed dataset.
6. The backend sends formatted JSON response to the frontend.
7. The frontend updates:
   - Table display
   - Pagination state
   - KPI metrics

This creates a **real-time, bi-directional data flow** between frontend and backend.

---

## 4. Folder Structure

## Project Folder Structure

```
Retail-Sales-Management-System/

│
├── backend/
│   │
│   ├── controllers/
│   │   ├── kpiController.js
│   │   └── salesController.js
│   │
│   ├── model/
│   │   └── sale.js
│   │
│   ├── routes/
│   │   └── salesRoutes.js
│   │
│   ├── services/
│   │   └── salesService.js
│   │
│   ├── .env
│   └── index.js
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── FullTableModal.jsx
│   │   │   ├── KpiCards.jsx
│   │   │   ├── MainFullTable.jsx
│   │   │   ├── Pagination.jsx
│   │   │   ├── Sidebar.jsx
│   │   │   └── TopFilters.jsx
│   │   │
│   │   ├── services/
│   │   │   └── api.js
│   │   │
│   │   ├── styles/
│   │   │   ├── app.css
│   │   │   ├── dashboard.css
│   │   │   ├── kpi.css
│   │   │   └── table.css
│   │   │
│   │   ├── App.jsx
│   │   └── main.jsx
│   │
│   ├── index.html
│   ├── package.json
│   └── package-lock.json
│
├── docs/
│   └── architecture.md
│
└── README.md
```



---

## 5. Module Responsibilities

### Backend Modules:
- **Controllers:** Handle incoming API requests and send responses.
- **Services:** Implement search, filtering, sorting, pagination, and KPI calculations.
- **Models:** Define schemas for MongoDB collections.
- **Routes:** Define all API endpoints.
- **Server File:** Initializes the Express server and connects the database.

### Frontend Modules:
- **Sidebar:** Provides navigation UI.
- **TopFilters:** Handles search, filters, and sorting UI.
- **MainFullTable:** Displays main dashboard table.
- **FullTableModal:** Displays full dataset in modal view.
- **KpiCards:** Displays live KPI metrics.
- **Pagination:** Controls dataset navigation.
- **API Service:** Centralized module for backend API communication.

Each module is designed to follow **single-responsibility principle**, ensuring maintainability and scalability.

---



