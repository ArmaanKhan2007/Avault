import React, { useState, useEffect } from 'react';
import { Plus, ChevronRight, ChevronDown } from 'lucide-react';

interface Note {
  id: string;
  title: string;
  content: string;
}

const SecureNotes: React.FC = () => {
  const [notes, setNotes] = useState<Note[]>([]);
  const [selectedNote, setSelectedNote] = useState<Note | null>(null);
  const [isAddingNote, setIsAddingNote] = useState(false);

  useEffect(() => {
    const storedNotes = localStorage.getItem('secureNotes');
    if (storedNotes) {
      setNotes(JSON.parse(storedNotes));
    }
  }, []);

  const handleAddNote = () => {
    const newNote: Note = {
      id: Date.now().toString(),
      title: 'New Note',
      content: '',
    };
    const updatedNotes = [...notes, newNote];
    setNotes(updatedNotes);
    localStorage.setItem('secureNotes', JSON.stringify(updatedNotes));
    setSelectedNote(newNote);
    setIsAddingNote(false);
  };

  const handleUpdateNote = (updatedNote: Note) => {
    const updatedNotes = notes.map(note => 
      note.id === updatedNote.id ? updatedNote : note
    );
    setNotes(updatedNotes);
    localStorage.setItem('secureNotes', JSON.stringify(updatedNotes));
  };

  const handleSelectNote = (note: Note) => {
    setSelectedNote(note);
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-64 bg-white p-4 border-r">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-xl font-bold">Secure Notes</h1>
          <button
            onClick={() => setIsAddingNote(true)}
            className="p-1 rounded-full hover:bg-gray-200"
          >
            <Plus size={24} />
          </button>
        </div>
        {isAddingNote && (
          <button
            onClick={handleAddNote}
            className="w-full text-left p-2 hover:bg-gray-100 rounded"
          >
            + New Note
          </button>
        )}
        {notes.map(note => (
          <div
            key={note.id}
            onClick={() => handleSelectNote(note)}
            className={`flex items-center p-2 cursor-pointer rounded ${
              selectedNote?.id === note.id ? 'bg-blue-100' : 'hover:bg-gray-100'
            }`}
          >
            {selectedNote?.id === note.id ? (
              <ChevronDown size={16} className="mr-1" />
            ) : (
              <ChevronRight size={16} className="mr-1" />
            )}
            <span>{note.title}</span>
          </div>
        ))}
      </div>

      {/* Main content */}
      <div className="flex-1 p-8">
        {selectedNote ? (
          <div>
            <input
              type="text"
              value={selectedNote.title}
              onChange={(e) => handleUpdateNote({ ...selectedNote, title: e.target.value })}
              className="text-2xl font-bold mb-4 w-full bg-transparent border-none focus:outline-none"
            />
            <textarea
              value={selectedNote.content}
              onChange={(e) => handleUpdateNote({ ...selectedNote, content: e.target.value })}
              className="w-full h-[calc(100vh-200px)] p-2 border rounded resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Start typing your note here..."
            />
          </div>
        ) : (
          <div className="text-center text-gray-500 mt-20">
            Select a note or create a new one to get started
          </div>
        )}
      </div>
    </div>
  );
};

export default SecureNotes;