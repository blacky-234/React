import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import { Routes, Route } from 'react-router-dom'
import LoginPage from 'pages/auth/LoginPage';



function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
      </Routes>
    </Router>
  );
}


export default AppRoutes;




// function AppRoutes(){

//   return(
//     <>
//       <Navbar />
//       <Routes>
//         <Route path='/' element={<Home />} />
//         <Route path='/about' element={<About />} />
//       </Routes>
//     </>
//   )
// }


// export default AppRoutes;