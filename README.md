# Retail Sales Management System

## 1. Overview
The Retail Sales Management System is a full-stack web application developed to efficiently manage and analyze large-scale retail transaction data. It enables users to perform real-time search, advanced multi-filtering, sorting, and pagination on sales records. The system is designed with a scalable backend and a responsive frontend to ensure high performance and smooth user interaction. It also provides real-time KPI insights to support business decision-making.

## 2. Tech Stack
- **Frontend:** React.js, Vite, Axios, HTML, CSS  
- **Backend:** Node.js, Express.js  
- **Database:** MongoDB  
- **Deployment:** Vercel (Frontend), Render (Backend)  
- **Other Tools:** Git, GitHub, MongoDB Compass

## 3. Search Implementation Summary
The search functionality is implemented as a full-text, case-insensitive search across key customer-related fields, specifically **Customer Name** and **Phone Number**. MongoDB regex-based searching is used to match partial and complete text values. Since phone numbers are stored as numeric values, they are dynamically converted to strings during search using MongoDB's `$expr` and `$toString`. The search feature works seamlessly alongside filters, sorting, and pagination without resetting any existing state.

## 4. Filter Implementation Summary
The system supports multiple independent and combined filters, including:
- Customer Region  
- Gender  
- Product Category  
- Tags  
- Payment Method  
- Age Range (numeric range-based filtering)  
- Date Range (from–to filtering)

All filters are implemented using dynamic MongoDB query construction. Each filter can function independently or in combination with others. The frontend preserves filter state during pagination, sorting, and searching to ensure consistency of results. The backend handles edge cases such as invalid numeric ranges, conflicting filters, and missing optional fields safely without crashing.

## 5. Sorting Implementation Summary
Sorting is implemented on the following attributes:
- Date (Newest First)  
- Quantity  
- Customer Name (A–Z)  

The sorting logic is dynamically applied at the database query level using MongoDB’s sort functionality. Sorting operations retain the active search query, applied filters, and pagination state. This ensures users can switch between different sorting options without losing their current dataset context.

## 6. Pagination Implementation Summary
Pagination is implemented with a fixed page size of **10 records per page**. It includes Next and Previous navigation controls. Pagination calculations are handled at the backend using MongoDB’s `skip` and `limit` functions. The system ensures that active search queries, filters, and sorting settings are retained across all pages, providing a consistent and user-friendly browsing experience.

## 7. Setup Instructions
1. Clone the repository from GitHub.  
2. Navigate to the backend folder and install dependencies using `npm install`.  
3. Create a `.env` file inside the backend directory and add:
   - `MONGO_URI`
   - `PORT`
4. Start the backend server using `npm run dev`.  
5. Navigate to the frontend folder and install dependencies using `npm install`.  
6. The frontend is already configured to use the deployed backend URL directly (no frontend `.env` file is required).  
7. Start the frontend using `npm run dev`.  
8. Open the application in the browser to access the dashboard.

