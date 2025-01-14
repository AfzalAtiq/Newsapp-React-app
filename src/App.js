import './App.css';
import React, { useState } from 'react';
import NavBar from './Components/NavBar';
import News from './Components/News';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar';
import './style.css';
const App = () => {
  const pageSize = 5;
  const apiKey = process.env.REACT_APP_NEWS_API;

  const [progress, setProgress] = useState(0);

  return (
    <div>
      <Router>
        <NavBar />
        <LoadingBar
          height={3}
          color='#f11946'
          progress={progress}
        />
        <Routes>
          <Route exact path="/" element={<News setProgress={setProgress} apiKey={apiKey} key="general" country="us" category="general" pageSize={pageSize} />} />
          <Route exact path="/business" element={<News setProgress={setProgress} apiKey={apiKey} key="business" country="us" category="business" pageSize={pageSize} />} />
          <Route exact path="/entertainment" element={<News setProgress={setProgress} apiKey={apiKey} key="entertainment" country="us" category="entertainment" pageSize={pageSize} />} />
          <Route exact path="/general" element={<News setProgress={setProgress} apiKey={apiKey} key="general" country="us" category="general" pageSize={pageSize} />} />
          <Route exact path="/health" element={<News setProgress={setProgress} apiKey={apiKey} key="health" country="us" category="health" pageSize={pageSize} />} />
          <Route exact path="/science" element={<News setProgress={setProgress} apiKey={apiKey} key="science" country="us" category="science" pageSize={pageSize} />} />
          <Route exact path="/sports" element={<News setProgress={setProgress} apiKey={apiKey} key="sports" country="us" category="sports" pageSize={pageSize} />} />
          <Route exact path="/technology" element={<News setProgress={setProgress} apiKey={apiKey} key="technology" country="us" category="technology" pageSize={pageSize} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
