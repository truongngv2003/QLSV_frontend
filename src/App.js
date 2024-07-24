import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import StudentList from './components/StudentList';
import Student from './components/Student';
import AddStudent from './components/AddStudent';
import EditStudent from './components/EditStudent';
import DeleteStudent from './components/DeleteStudent';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<StudentList />} />
        <Route path="/:studentId" element={<Student />} />
        <Route path="/add" element={<AddStudent />} />
        <Route path="/edit/:studentId" element={<EditStudent />} />
        <Route path="/delete/:studentId" element={<DeleteStudent />} />
      </Routes>
    </Router>
  );
}

export default App;
