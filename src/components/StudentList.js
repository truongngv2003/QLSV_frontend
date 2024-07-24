import React, { useState, useEffect } from 'react';
import { getAllStudents } from '../services/studentService';
import { Link, useNavigate } from 'react-router-dom';

const StudentList = () => {
  const [students, setStudents] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const response = await getAllStudents();
        setStudents(response.data);
      } catch (error) {
        console.error(error);
        alert('Failed to fetch students');
      }
    };
    fetchStudents();
  }, []);

  const handleDelete = (studentId) => {
    navigate(`/delete/${studentId}`);
  };

  return (
    <div>
      <h1>Student List</h1>
      <Link to="/add">Add Student</Link>
      <ul>
        {students.map(student => (
          <li key={student.studentId}>
            <Link to={`/${student.studentId}`}>
              {student.fullName} ({student.studentId}) - {student.program}
            </Link>
            <Link to={`/edit/${student.studentId}`}>Edit</Link>
            <button onClick={() => handleDelete(student.studentId)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StudentList;
