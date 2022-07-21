import React from 'react';
import { Routes, Route } from "react-router-dom";
import Profile from 'pages/Profile';
import Demo from 'pages/Demo';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Profile />} />
        <Route path="demo">
          <Route path=":demoName" element={<Demo />} />
        </Route>
      </Routes> 
    </div>
  );
}

export default App;
