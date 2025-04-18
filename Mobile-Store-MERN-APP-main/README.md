# Mobile-Store-MERN-APP



https://github.com/Bahri-Adem/Mobile-Store-MERN-APP/assets/103949052/9b288ebb-d97d-498b-8652-39c2a2aab5b2



Welcome to the **Mobile Store MERN APP**, an ecommerce website built using the MERN stack (MongoDB, Express, React, Node.js). This application allows users to browse, search, and purchase mobile phones and accessories. Additionally, it provides admin pages to manage products, categories, and user orders.

## Features

- **User-Friendly Interface**: The frontend of the application is built using React, providing users with an intuitive and smooth browsing experience.
- **Product Categories**: Users can explore a wide range of product categories, making it easier to find the items they are interested in.
- **Product Details**: Each product has its own detailed page, showcasing its specifications and features.
- **Cart and Checkout**: Users can add products to their cart and proceed to a seamless checkout process.
- **User Authentication**: The application supports user registration and login functionalities to keep track of orders and purchases.
- **User Dashboard**: Logged-in users can access their personalized dashboard, where they can manage their profile and view their order history.
- **Admin Dashboard**: Admin users have access to a separate dashboard, enabling them to manage products, categories, and user orders efficiently.

## Frontend Technologies

The frontend of the application is built using the following technologies:

- **React** - A popular JavaScript library for building user interfaces.
- **React Router DOM** - Handles client-side routing and navigation between different pages.
- **Ant Design (antd)** - Provides a set of high-quality React components and themes for UI design.
- **Axios** - A promise-based HTTP client for making API requests to the backend.
- **React Icons** - A library of icons for React applications.
- **Moment** - A library for parsing, validating, manipulating, and formatting dates and times.
- **React Helmet** - Manages document head tags for improved SEO and dynamic page titles.
- **React Hot Toast** - Provides toast notifications for user interactions.
- **React Toastify** - Displays customizable toast notifications to users.

## Backend Technologies

The backend of the application is powered by the following technologies:

- **Node.js** - A JavaScript runtime environment that enables server-side execution.
- **Express** - A fast and minimalistic web framework for Node.js.
- **MongoDB** - A NoSQL database used to store and manage application data.
- **Mongoose** - An elegant MongoDB object modeling for Node.js.
- **Bcrypt** - Used for hashing user passwords to ensure secure authentication.
- **JWT (JSON Web Token)** - Used for creating and verifying user authentication tokens.
- **Braintree** - Facilitates payment processing for the ecommerce functionality.
- **Cors** - Enables cross-origin resource sharing to allow frontend and backend communication.

## How the App Works

The application follows a client-server architecture, with the frontend built using React and the backend powered by Node.js and Express. MongoDB serves as the database to store product information, user data, and order details.

The `App.js` file serves as the entry point to the frontend, defining all the necessary routes for the application. It provides routes for the home page, product details, categories, cart, search functionality, and various user and admin pages. The `PrivateRoute` and `AdminRoute` components are used to handle authenticated user and admin access, respectively.

The backend utilizes various dependencies, such as `express-formidable` for handling form data, `jsonwebtoken` for user authentication, `bcrypt` for password hashing, and `cors` to allow cross-origin requests. The database interactions are managed using `mongoose`, ensuring smooth communication with the MongoDB database.

