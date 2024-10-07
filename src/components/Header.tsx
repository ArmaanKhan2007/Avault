import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Video, Image, File, FileText, Key } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-md">
      <nav className="container mx-auto px-4 py-4">
        <ul className="flex flex-wrap justify-center space-x-4 md:space-x-6">
          <li>
            <Link to="/" className="flex items-center text-gray-700 hover:text-blue-600">
              <Home className="w-5 h-5 mr-1" />
              <span className="hidden md:inline">Dashboard</span>
            </Link>
          </li>
          <li>
            <Link to="/videos" className="flex items-center text-gray-700 hover:text-blue-600">
              <Video className="w-5 h-5 mr-1" />
              <span className="hidden md:inline">Videos</span>
            </Link>
          </li>
          <li>
            <Link to="/photos" className="flex items-center text-gray-700 hover:text-blue-600">
              <Image className="w-5 h-5 mr-1" />
              <span className="hidden md:inline">Photos</span>
            </Link>
          </li>
          <li>
            <Link to="/files" className="flex items-center text-gray-700 hover:text-blue-600">
              <File className="w-5 h-5 mr-1" />
              <span className="hidden md:inline">Files</span>
            </Link>
          </li>
          <li>
            <Link to="/notes" className="flex items-center text-gray-700 hover:text-blue-600">
              <FileText className="w-5 h-5 mr-1" />
              <span className="hidden md:inline">Notes</span>
            </Link>
          </li>
          <li>
            <Link to="/passwords" className="flex items-center text-gray-700 hover:text-blue-600">
              <Key className="w-5 h-5 mr-1" />
              <span className="hidden md:inline">Passwords</span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;