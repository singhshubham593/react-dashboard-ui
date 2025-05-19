# React Dashboard UI

A responsive, single-page **React Dashboard UI** built using **React**, **JavaScript**, and **Tailwind CSS**, inspired by shadcn/ui component blocks. It includes sidebar navigation, a sortable/filterable data table, loading skeletons, and dummy routing.

🔗 **Live Site:** [https://recdashboard.netlify.app/](https://recdashboard.netlify.app/)
💻 **GitHub Repo:** [https://github.com/singhshubham593/react-dashboard-ui](https://github.com/singhshubham593/react-dashboard-ui)

---

## 🚀 Features

* 🔗 Sidebar Navigation (Dashboard, Users, Settings)
* 📊 Data Table with:

  * Dummy data
  * Sorting by name (ASC/DESC)
  * Filter by status (Paid/Pending)
* ⏳ Loading skeletons for better UX
* 📱 Fully responsive design
* 💅 Built using **Tailwind CSS** only (no external CSS)
* 📦 Clean component structure (even in a single file)
* 🧪 Simulated routing via component state

---

## 📁 Folder Structure (Single Page Version)

```
react-dashboard-ui/
src/
├── components/
│   ├── Sidebar.jsx
│   ├── Table.jsx
│   └── SkeletonRow.jsx
├── data/
│   └── users.js
├── pages/
│   ├── Dashboard.jsx
│   ├── Reports.jsx
│   └── Settings.jsx
├── App.jsx
├── main.jsx
├── index.css
└── router.jsx
```

---

## 🛠️ Installation & Setup

```bash
# Clone the repo
https://github.com/singhshubham593/react-dashboard-ui.git
cd react-dashboard-ui

# Install dependencies
npm install

# Start development server
npm start
```

---

## 🧪 Dummy Data

Included inline in the component. You can replace it with API data or external JSON easily.

---

## ✨ Tech Stack

* **React** (Functional Components + Hooks)
* **JavaScript** (ES6+)
* **Tailwind CSS**
* **Netlify** (for deployment)

---

## 📸 Screenshots

| Dashboard                                                        | Users Table                                                    |
| ---------------------------------------------------------------- | -------------------------------------------------------------- |
| ![Dashboard](https://via.placeholder.com/300x180?text=Dashboard) | ![Users](https://via.placeholder.com/300x180?text=Users+Table) |

> You can add real screenshots once available.

---

## 📦 Deployment

This app is deployed on **Netlify**.

To deploy your own:

1. Push to GitHub
2. Connect your repo on [Netlify](https://netlify.com)
3. Configure build command: `npm run build`
4. Publish the `build/` folder

---

## ✅ TODO (Optional Enhancements)

* [ ] Add real routing using `react-router-dom`
* [ ] Extract components into folders (Sidebar, Table, Filters)
* [ ] Integrate external APIs
* [ ] Add authentication or user roles

---

## 📄 License

MIT — Feel free to fork, modify, and use this project.

---

## 👨‍💻 Author

**Shubham Singh**
[GitHub Profile](https://github.com/singhshubham593)

Feel free to reach out for collaboration or suggestions!
