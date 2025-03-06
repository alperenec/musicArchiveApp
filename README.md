# MusicArchiveApp

## 🌟 Overview

MusicArchiveApp is a React-based web application that allows users to manage users, albums, and photos. It utilizes modern web technologies, including React, Redux Toolkit, RTK Query, and a JSON mock server.



https://github.com/user-attachments/assets/f7863473-7d63-461f-9fee-b4260f72aba3



---


## 🚀 Tech Stack

- **Frontend:** React, React-Redux, @reduxjs/toolkit
- **API:** JSON Server (Mock API)
- **Build Tool:** Vite
- **Third-Party Libraries:**
  - `@mui/material`: Material-UI components.
  - `@faker-js/faker`: Mock data generation.
  - `react-icons`: Icons (e.g., trash icon for deletion).

---

## 🧩 Key Technologies and Implementations

API endpoints (`/users`, `/albums`, `/photos`) use JSON Server; RTK Query handles fetching and mutations.

### 📌 RTK Query and Tag Assignment

Efficient data fetching, mutations, caching, and automatic updates via tags:

- `usersApi.js`: `fetchUsersQuery`, `addUser`, `removeUser`
- `albumsApi.js`: `fetchAlbums`, `addAlbum`, `removeAlbum`
- `photosApi.js`: `fetchPhotos`, `addPhoto`, `removePhoto`

### 📌 Third-Party Libraries

- **@mui/material:** UI components (`Button`, `CircularProgress`, `Skeleton`) for consistent, modern UI.
- **@faker-js/faker:** Mock data (`faker.commerce.productName()`, `faker.image.urlLoremFlickr()`).
- **react-icons:** Icons (`FaTrash`, `RiDeleteBin6Line`) for visual feedback.

### 📌 Query Integration in Store

- Configured Redux store (`configureStore`) with reducers (`usersApi`, `albumsApi`, `photosApi`).
- Middleware setup (`usersApi.middleware`, `albumsApi.middleware`, `photosApi.middleware`) with `getDefaultMiddleware().concat()`.
- Real-time updates with `setupListeners`.

---

## 🛠️ Installation and Setup

1. **Navigate to the project directory:**

```bash
cd musicArchiveApp
```

2. **Install dependencies:**

```bash
npm install
```

3. **Start the development server:**

```bash
npm run dev
```

4. **In a separate terminal, start JSON Server:**

```bash
npx json-server --watch db.json --port 3000
```

5. Open [`http://localhost:5173`](http://localhost:5173) to view the app.
