# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Project Plan for Poetry Submission Platform

### Project Overview:
This project is a web-based platform that allows users to submit poems weekly, view compiled collections, and explore the creativity of a poetry community. The platform will support two roles: users and an admin. Users can submit poems, while the admin can compile and manage submissions into a single poem each week. The project will focus on minimalistic design, responsiveness, and accessibility, utilizing React, Tailwind CSS, and a backend API.

---

### Core Features:
1. **Landing Page**
    - A welcoming landing page describing the project and its purpose.
    - Details about the weekly prompts and submission guidelines.

2. **User Authentication**
    - Users can create an account with a username, email, and password.
    - Upon account creation, users are assigned a unique auto-generated PenName.
    - Secure login functionality for users and admin.
    - Passwords will be securely hashed.
    - Authentication handled via JWT for session management.

3. **Weekly Prompts**
    - A new one-word prompt will be displayed each week for users to create poems.
    - Users can view the current week’s prompt on the home page after logging in.

4. **Poem Submission**
    - Users can submit one poem per weekly prompt through a simple form.
    - Input validation for poem content to ensure quality submissions (e.g., no empty poems, character limits).
    - Submissions will be tied to the user’s account and visible only to the admin until compiled.

5. **Admin Role**
    - Admin can view all submitted poems.
    - Admin can compile selected poems into a single "mega poem" using a drag-and-drop interface.
    - The drag-and-drop tool will track and remember the origin of each line.
    - Metadata for compiled collections will include details of contributors for each line.

6. **Compiled Poems Display**
    - A page for users to view the weekly compiled poems.
    - On hovering over the poem, users can see who contributed each line via their PenName.

7. **User Profile**
    - Users can view all their submitted poems.
    - A breakdown of where their contributions appear in compiled poems.
    - Fun statistics about their submissions (e.g., total lines submitted, most used words).

8. **Styling and Layout**
    - Tailwind CSS for consistent, modern styling and responsive design.
    - Interactive elements such as hover effects and transitions for buttons and links.
    - Grid-based layout for admin dashboard and compiled collections.

9. **Notifications**
    - Toast notifications for feedback, such as successful submissions or errors.
    - Optional admin announcements or reminders about deadlines for users.

---

### Technology Stack:
1. **Frontend:**
    - React for dynamic component-based UI.
    - Tailwind CSS for styling.

2. **Backend:**
    - Node.js with Express for API handling.
    - PostgreSQL for storing users, poems, and collections.
    - Sequelize or Prisma as an ORM for database management.

3. **Deployment:**
    - Vercel or Netlify for frontend hosting.
    - Render or Heroku for backend API and database.

4. **Testing:**
    - Jest and React Testing Library for unit and integration tests.
    - Postman or Swagger for API testing.

---

### Milestones and Tasks:
#### Phase 1: Setup and Environment
- [ ] Initialize the React project with Tailwind CSS.
- [ ] Configure ESLint and Prettier for consistent code style.
- [ ] Create a basic folder structure:
    - `components`
    - `pages`
    - `services`

#### Phase 2: Authentication
- [ ] Build sign-up and login pages.
- [ ] Implement authentication using JWT.
- [ ] Add middleware for secure API access.
- [ ] Auto-generate and assign unique PenNames upon user registration.

#### Phase 3: Weekly Prompts
- [ ] Implement functionality to display a new weekly prompt.
- [ ] Add backend logic to store and retrieve weekly prompts.

#### Phase 4: Poem Submission
- [ ] Create the poem submission form.
- [ ] Validate form input (e.g., max character limit, empty submissions).
- [ ] Connect form to backend API.

#### Phase 5: Admin Features
- [ ] Develop a page for admins to view all submissions.
- [ ] Add a drag-and-drop tool for compiling poems.
- [ ] Store compiled collections with contribution metadata.

#### Phase 6: Compiled Poems Display
- [ ] Build a page to display compiled collections.
- [ ] Implement hover functionality to show contributor details (PenName) for each line.

#### Phase 7: User Profile
- [ ] Create a profile page displaying all user submissions.
- [ ] Add fun statistics (e.g., total submissions, most frequent words).
- [ ] Include details on contributions to compiled poems.

#### Phase 8: Dynamic Navigation and Styling
- [ ] Build a navigation bar and footer for consistent layout.
- [ ] Enhance UI with transitions and hover effects.
- [ ] Ensure responsive design for mobile and desktop.

#### Phase 9: Notifications
- [ ] Add toast notifications for feedback (e.g., successful submission).
- [ ] Notify users of deadlines or new collections.

#### Phase 10: Deployment
- [ ] Deploy the frontend.
- [ ] Set up and deploy the backend API.

#### Phase 11: Testing and Optimization
- [ ] Write tests for critical components and API endpoints.
- [ ] Optimize the app for performance.

---

### Timeline:
- **Week 1:** Complete Phase 1 and Phase 2.
- **Week 2:** Work on Phase 3 and Phase 4.
- **Week 3:** Work on Phase 5 and Phase 6.
- **Week 4:** Work on Phase 7 and Phase 8.
- **Week 5:** Complete Phase 9, deploy the app, and address feedback.

---

### Deliverables:
- Fully functional poetry submission platform.
- Responsive and accessible design.
- Secure backend for managing users and poems.
- Clear documentation for deployment and future updates.

