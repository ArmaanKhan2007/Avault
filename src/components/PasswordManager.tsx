import React, { useState, useEffect } from 'react';

interface Password {
  id: string;
  site: string;
  username: string;
  password: string;
}

const PasswordManager: React.FC = () => {
  const [passwords, setPasswords] = useState<Password[]>([]);
  const [newPassword, setNewPassword] = useState<Password>({ id: '', site: '', username: '', password: '' });

  useEffect(() => {
    const storedPasswords = localStorage.getItem('securePasswords');
    if (storedPasswords) {
      setPasswords(JSON.parse(storedPasswords));
    }
  }, []);

  const handleAddPassword = () => {
    if (newPassword.site && newPassword.username && newPassword.password) {
      const passwordToAdd = {
        ...newPassword,
        id: Date.now().toString(),
      };
      const updatedPasswords = [...passwords, passwordToAdd];
      setPasswords(updatedPasswords);
      localStorage.setItem('securePasswords', JSON.stringify(updatedPasswords));
      setNewPassword({ id: '', site: '', username: '', password: '' });
    }
  };

  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Password Manager</h1>
      <div className="mb-4">
        <input
          type="text"
          placeholder="Site"
          className="w-full p-2 border rounded mb-2"
          value={newPassword.site}
          onChange={(e) => setNewPassword({ ...newPassword, site: e.target.value })}
        />
        <input
          type="text"
          placeholder="Username"
          className="w-full p-2 border rounded mb-2"
          value={newPassword.username}
          onChange={(e) => setNewPassword({ ...newPassword, username: e.target.value })}
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full p-2 border rounded mb-2"
          value={newPassword.password}
          onChange={(e) => setNewPassword({ ...newPassword, password: e.target.value })}
        />
        <button
          onClick={handleAddPassword}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Add Password
        </button>
      </div>
      <div>
        <h2 className="text-xl font-semibold mb-2">Your Passwords:</h2>
        <ul>
          {passwords.map((pwd) => (
            <li key={pwd.id} className="bg-white p-4 rounded shadow mb-2">
              <p><strong>Site:</strong> {pwd.site}</p>
              <p><strong>Username:</strong> {pwd.username}</p>
              <p><strong>Password:</strong> {pwd.password}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PasswordManager;