import React from 'react';
import { Link } from 'react-router-dom';
import { Video, Image, File, FileText, Key } from 'lucide-react';

const Dashboard: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <Link to="/videos" className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
        <Video className="w-12 h-12 text-blue-500 mb-4" />
        <h2 className="text-xl font-semibold mb-2">Videos</h2>
        <p className="text-gray-600">Manage your private YouTube videos</p>
      </Link>
      <Link to="/photos" className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
        <Image className="w-12 h-12 text-green-500 mb-4" />
        <h2 className="text-xl font-semibold mb-2">Photos</h2>
        <p className="text-gray-600">Access your private Instagram photos</p>
      </Link>
      <Link to="/files" className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
        <File className="w-12 h-12 text-yellow-500 mb-4" />
        <h2 className="text-xl font-semibold mb-2">Files</h2>
        <p className="text-gray-600">Manage encrypted files on Google Drive</p>
      </Link>
      <Link to="/notes" className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
        <FileText className="w-12 h-12 text-purple-500 mb-4" />
        <h2 className="text-xl font-semibold mb-2">Secure Notes</h2>
        <p className="text-gray-600">Create and manage encrypted notes</p>
      </Link>
      <Link to="/passwords" className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
        <Key className="w-12 h-12 text-red-500 mb-4" />
        <h2 className="text-xl font-semibold mb-2">Password Manager</h2>
        <p className="text-gray-600">Store and manage your passwords securely</p>
      </Link>
    </div>
  );
};

export default Dashboard;