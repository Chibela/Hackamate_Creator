# Web Development Project 7 - _Hackamate Dashboard_

Submitted by: **Chibela Changwe**

This web app: **Hackamate Dashboard is an interactive hackathon teammate manager built with React + Vite and Supabase. It allows users to create, view, edit, and delete their “Hackamates” team members with unique names, skills, colors, and bios. The app helps users organize their hackathon teams in a fun and visually engaging way.**

Time spent: **12** hours spent in total

---

## 🧩 Required Features

The following **required** functionality is completed:

- [x] **The web app contains a page that features a create form to add a new Hackamate**

  - Users can name the Hackamate
  - Users can set the Hackamate’s attributes by clicking on one of several color values
  - Users can add a short bio describing themselves

- [x] **The web app includes a summary page of all the user’s added Hackamates**

  - The app displays all created Hackamates with their details in styled cards
  - The summary page is sorted by creation date, showing the most recent Hackamates first

- [x] **A previously created Hackamate can be updated from the list of Hackamates in the summary page**

  - Each Hackamate card includes an “Edit” button to update their attributes
  - The update form displays the current Hackamate information
  - After editing, the updates are immediately reflected across all views

- [x] **A previously created Hackamate can be deleted from the Hackamate list**

  - From the edit or detail view, users can delete a Hackamate
  - Once deleted, the Hackamate no longer appears on the summary page

- [x] **Each Hackamate has a direct, unique URL link to an info page about them**
  - Clicking a Hackamate in the summary page navigates to their detailed profile view
  - The detail page displays expanded information such as the Hackamate’s short bio
  - Users can navigate to the edit form directly from the detail page

---

## 🎨 Optional Features

The following **optional** features are implemented:

- [x] Dynamic color cards for selection — users can only pick one color from Red, Green, Blue, Yellow, Pink, Maroon, or Purple
- [x] Default profile avatar and hover animations for interactive cards
- [x] Dashboard navigation bar displayed across all pages for easy access
- [x] Conditional rendering when no Hackamates exist, users see a message and a “Create Hackamate” button
- [x] Visual and hover animations added for a lively hackathon vibe across pages

---

## 🚀 Additional Features

- [x] Added success messages when new Hackamates are created
- [x] Responsive layout with smaller, cleaner Hackamate cards
- [x] Polished UI with color-based card borders and glow effects
- [x] Integrated Supabase database connection via `supabase-js`
- [x] Route-based navigation using React Router

---

## 🎥 Video Walkthrough

Here's a walkthrough of implemented user stories:

<img src='https://raw.githubusercontent.com/Chibela/Hackamate_Creator/main/public/walkthrough7.gif' title='Hackamate App Video Walkthrough' alt='Hackamate App Video Walkthrough' />

GIF created with [ScreenToGif](https://www.screentogif.com/) for Windows

---

## 🧠 Notes

Building this project involved setting up Supabase for real-time CRUD operations, managing dynamic routing with React Router, and styling the app for an engaging “hackathon” look and feel.  
One challenge encountered was ensuring consistent routing and state synchronization after editing or deleting Hackamates, as well as aligning Supabase table naming conventions with frontend code.

---

## License

    Copyright (c) 2025 Chibela Changwe
