import React from 'react';
import { BrowserRouter as Router, Route, Routes, NavLink } from 'react-router-dom';
import TrendingArticles from './pages/TrendingArticles';
import AIandML from './pages/AIandML';
import BlockChain from './pages/BlockChain';
import CyberSecurity from './pages/CyberSecurity';
import DataScience from './pages/DataScience';
import DevOps from './pages/DevOps';
import FullStackDevelopment from './pages/FullStackDevelopment';
import './App.css';
import CloudComputing from './pages/CloudComputing';

const App = () => {
  return (
    <Router>
      <div className="app-container">
        <div className="sidebar">
          <h2>Topics</h2>
          <ul>
            <li>
              <NavLink to="/trending-articles" className="nav-link" activeClassName="active">
                Trending Articles
              </NavLink>
            </li>
            <li>
              <NavLink to="/ai-and-ml" className="nav-link" activeClassName="active">
                Artificial Intelligence and Machine Learning
              </NavLink>
            </li>
            <li>
              <NavLink to="/blockchain" className="nav-link" activeClassName="active">
                Blockchain
              </NavLink>
            </li>
            <li>
              <NavLink to="/cloud-computing" className="nav-link" activeClassName="active">
                Cloud Computing
              </NavLink>
            </li>
            <li>
              <NavLink to="/cyber-security" className="nav-link" activeClassName="active">
                Cyber Security
              </NavLink>
            </li>
            <li>
              <NavLink to="/data-science" className="nav-link" activeClassName="active">
                Data Science
              </NavLink>
            </li>
            <li>
              <NavLink to="/devops" className="nav-link" activeClassName="active">
                DevOps
              </NavLink>
            </li>
            <li>
              <NavLink to="/full-stack-development" className="nav-link" activeClassName="active">
                Full Stack Development
              </NavLink>
            </li>
          </ul>
        </div>

        <div className="content">
          <Routes>
            <Route path="/trending-articles" element={<TrendingArticles />} />
            <Route path="/ai-and-ml" element={<AIandML />} />
            <Route path="/blockchain" element={<BlockChain />} />
            <Route path="/cloud-computing" element={<CloudComputing />} />
            <Route path="/cyber-security" element={<CyberSecurity />} />
            <Route path="/data-science" element={<DataScience />} />
            <Route path="/devops" element={<DevOps />} />
            <Route path="/full-stack-development" element={<FullStackDevelopment />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;