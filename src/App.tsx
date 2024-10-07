import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import VideoManager from './components/VideoManager';
import PhotoManager from './components/PhotoManager';
import FileManager from './components/FileManager';
import SecureNotes from './components/SecureNotes';
import PasswordManager from './components/PasswordManager';
import Login from './components/Login';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        {isLoggedIn && <Header />}
        <main className="container mx-auto px-4 py-8">
          <Routes>
            <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
            <Route
              path="/"
              element={isLoggedIn ? <Dashboard /> : <Navigate to="/login" />}
            />
            <Route
              path="/videos"
              element={isLoggedIn ? <VideoManager /> : <Navigate to="/login" />}
            />
            <Route
              path="/photos"
              element={isLoggedIn ? <PhotoManager /> : <Navigate to="/login" />}
            />
            <Route
              path="/files"
              element={isLoggedIn ? <FileManager /> : <Navigate to="/login" />}
            />
            <Route
              path="/notes"
              element={isLoggedIn ? <SecureNotes /> : <Navigate to="/login" />}
            />
            <Route
              path="/passwords"
              element={isLoggedIn ? <PasswordManager /> : <Navigate to="/login" />}
            />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;