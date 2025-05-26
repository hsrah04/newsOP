import React, { useState } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import LoadingBar from "react-top-loading-bar";


export default function App() {
  const pageSize = 12;
  const apiKey = process.env.REACT_APP_APIKEY;
  const [progress, setProgress] = useState(0)

  return (
    <div>
      <Router>
        <Navbar />
        <LoadingBar
          color="#f11946"
          height={3}
          progress={progress}
        />

        <Routes>
          <Route exact path="/" element={<News setProgress={setProgress} api={apiKey} key="op" pageSize={pageSize} country="us" category="general" />} />
          <Route exact path="/sports" element={<News setProgress={setProgress} api={apiKey} key="sports" pageSize={pageSize} country="us" category="sports" />} />
          <Route exact path="/business" element={<News setProgress={setProgress} api={apiKey} key="business" pageSize={pageSize} country="us" category="business" />} />
          <Route exact path="/entertainment" element={<News setProgress={setProgress} api={apiKey} key="entertainment" pageSize={pageSize} country="us" category="entertainment" />} />
          <Route exact path="/general" element={<News setProgress={setProgress} api={apiKey} key="general" pageSize={pageSize} country="us" category="general" />} />
          <Route exact path="/health" element={<News setProgress={setProgress} api={apiKey} key="health" pageSize={pageSize} country="us" category="health" />} />
          <Route exact path="/science" element={<News setProgress={setProgress} api={apiKey} key="science" pageSize={pageSize} country="us" category="science" />} />
          <Route exact path="/sports" element={<News setProgress={setProgress} api={apiKey} key="sports" pageSize={pageSize} country="us" category="sports" />} />
          <Route exact path="/technology" element={<News setProgress={setProgress} api={apiKey} key="technology" pageSize={pageSize} country="us" category="technology" />} />
        </Routes>

      </Router>
    </div>
  )
}


