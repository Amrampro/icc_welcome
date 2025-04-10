# ICC Church Tablet App  

This project is a React application built with Vite. It is designed to provide visitors with an interactive experience on a tablet, allowing them to explore church-related information and book appointments seamlessly.  

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

Here’s a rewritten and completed README for your project:  

---

## Features  

- **React with Vite** for a fast and efficient development experience.  
- **React Router** for seamless navigation across multiple pages.  
- Optimized for mobile and tablet displays.  
- Easy navigation for church information and appointment booking.  

---

## Installation and Setup  

### Prerequisites  

Before getting started, ensure you have the following installed:  

- [Node.js](https://nodejs.org/) (version 16 or higher recommended)  
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)  

### Clone the Repository  

Clone the repository from GitHub and navigate to the project directory:  

```bash  
git clone <repository_url>  
cd <repository_directory>  
```  

### Install Dependencies  

Install the necessary dependencies:  

Using npm:  
```bash  
npm install  
```  

Or using yarn:  
```bash  
yarn install  
```  

---

## Running the Project  

### Development Server  

Start the development server with hot module replacement (HMR):  

Using npm:  
```bash  
npm run dev  
```  

Or using yarn:  
```bash  
yarn dev  
```  

The application will be available at `http://localhost:5173`.  

### Building for Production  

Build the project for production:  

Using npm:  
```bash  
npm run build  
```  

Or using yarn:  
```bash  
yarn build  
```  

The production files will be output to the `dist` folder.  

### Previewing Production Build  

Preview the production build locally:  

Using npm:  
```bash  
npm run preview  
```  

Or using yarn:  
```bash  
yarn preview  
```  

---

## React Router Setup  

This project uses `react-router-dom` for navigation. Ensure it's installed:  

```bash  
npm install react-router-dom  
```  

Or using yarn:  
```bash  
yarn add react-router-dom  
```  

The routing structure is set up in `src/App.jsx` as follows:  

```jsx  
import React from 'react';  
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';  
import Home from './pages/Home';  
import About from './pages/About';  
import Appointments from './pages/Appointments';  

function App() {  
  return (  
    <Router>  
      <Routes>  
        <Route path="/" element={<Home />} />  
        <Route path="/about" element={<About />} />  
        <Route path="/appointments" element={<Appointments />} />  
      </Routes>  
    </Router>  
  );  
}  

export default App;  
```  

### Adding Pages  

Create new pages in the `src/pages` directory. For example:  

- `Home.jsx` for the homepage.  
- `About.jsx` for church information.  
- `Appointments.jsx` for booking appointments.  

Example of a simple page (`Home.jsx`):  

```jsx  
import React from 'react';  

const Home = () => {  
  return (  
    <div>  
      <h1>Welcome to ICC Church</h1>  
      <p>Explore our services and book appointments easily.</p>  
    </div>  
  );  
};  

export default Home;  
```  

---

## ESLint  

This project uses ESLint to ensure code quality and consistency. Run the linter with:  

Using npm:  
```bash  
npm run lint  
```  

Or using yarn:  
```bash  
yarn lint  
```  

Fix any reported issues to maintain high code standards.  

---

## Deployment  

To deploy the app, upload the contents of the `dist` folder to your web server or hosting platform.  

For Vite deployment guides, refer to the [official documentation](https://vitejs.dev/guide/static-deploy.html).  

---

## License  

This project is licensed under [MIT License](./LICENSE).  

---