// // App.js
// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Header from './components/header';
// import MovieSearch from './components/Search';
// function Home() {
//   return <h1>Home</h1>;
// }
// function About() {
//   return <h1>About</h1>;
// }
// function App() {
//   return (
//     <Router>
//        <Routes>
//         <Route path="/home" element={<Home />} />
//         <Route path="/about" element={<About />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;

import React from 'react';
import Search from './Search';

function App() {
  return (
    <div>
      <h1>Movie Search App</h1>
      <Search />
    </div>
  );
}

export default App;

