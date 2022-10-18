import React from 'react';
import Home from './pages/home';
import Profile from './pages/profilePage';
import Login from './pages/login';
import SignUp from './pages/signUp';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import thoughtsPage from './pages/thoughtsPage';




function App() {

//    let Component
//    switch (window.location.pathname) {
//      case "/":
//        Component = <Login />
//        break
//        case "/signUp":
//        Component = <SignUp />
//        break
//        case "/home":
//        Component = <Home />
//        break
//        case "/profile":
//        Component = <Profile />
//        break
// }

    return (
      
            
      <Router>
       
       <div className="container">
         <Routes>
           <Route 
             path="/" 
             element={<Login />} 
           />
           <Route 
             path="/home" 
             element={<Home />} 
           />
           <Route 
             path="/signUp" 
             element={<SignUp />} 
           />
           <Route 
             path="/profile" 
             element={<Profile />} 
           />
         </Routes>
       </div>

   </Router>
    
    );
  }

  export default App;