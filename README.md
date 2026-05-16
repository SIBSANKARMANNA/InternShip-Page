# Internshala Internship Page Clone

A responsive frontend clone of the Internshala Internship Listing Page built using React and Vite.  
This project focuses on reusable components, modular folder structure, responsive UI design, API integration, filtering functionality, and clean readable code practices.

---

# 🚀 Live Demo

Deployment Link:  
https://intern-ship-page.vercel.app/

---

# 📌 Project Overview

This project is a clone of the Internshala internship listing page and includes:

- Responsive navigation bar
- Internship listing cards
- Sidebar filtering system
- Mobile responsive filter modal
- Pagination UI
- Footer section
- Dynamic internship data using API
- Modular and reusable React components

The goal of this project was to practice:

- React component architecture
- State management with hooks
- API handling
- Responsive layouts
- Clean UI implementation
- Reusable code structure

---

# 🛠️ Tech Stack

- React
- Vite
- CSS
- React Hooks
- React DOM

---

# ⚙️ Features

## ✅ Navigation Bar

- Desktop dropdown menus
- Mobile hamburger menu
- Responsive navigation layout

## ✅ Internship API Integration

- Fetch internship data from API
- Store API response using React state
- Dynamic rendering of internship cards

## ✅ Sidebar Filters

Filter internships based on:

- Profile
- Location
- Monthly stipend
- Duration

Mobile filter modal implemented using `react-modal`.

## ✅ Internship Cards

- Company information
- Stipend details
- Duration
- Locations
- Work from home badges
- Apply button

## ✅ Pagination UI

- Responsive pagination section

## ✅ Responsive Design

- Mobile-first responsive layout
- Sidebar converted into modal on mobile view

---

# 🌐 API Used

```txt
https://internshala.com/hiring/search
```

API URL stored securely using `.env`

Example:

```env
VITE_API_URL=https://internshala.com/hiring/search
```

Accessed in React using:

```js
import.meta.env.VITE_API_URL
```

---

# 📂 Project Setup

## 1. Create Project

```bash
npm create vite@latest project_name
```

## 2. Move Into Project Folder

```bash
cd project_name
```

## 3. Install Dependencies

```bash
npm install
```

## 4. Run Development Server

```bash
npm run dev
```

---

# 📁 Project Structure

```txt
src/
│
├── components/
│   ├── Header.jsx
│   ├── Sidebar.jsx
│   ├── InternshipCard.jsx
│   ├── DropdownMenu.jsx
│   ├── Footer.jsx
    ├── InternshalaClone.jsx
│
├── styles/
│
├── App.jsx
├── main.jsx
```

---

# 🧠 Concepts Practiced

- React Hooks (`useState`, `useEffect`, `useMemo`)
- Component-based architecture
- Conditional rendering
- Responsive CSS
- API integration
- State-driven filtering
- Dynamic dropdowns
- Mobile sidebar/modal implementation

---

# 🤖 AI Assistance

AI tools were used for:

- Template code generation
- Debugging support
- Removing repetitive code
- Improving UI structure
- Component optimization

---

# 📱 Responsive UI

The project supports:

- Desktop view
- Tablet view
- Mobile view

with responsive layouts and mobile filter modal support.

---

# 📌 Future Improvements

- Backend integration
- Authentication
- Real pagination logic
- Saved internships/bookmarks
- Dark mode
- Search suggestions
- Debounced search
- Redux or Context API integration

---

# 👨‍💻 Author

Sibsankar Manna