import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { deleteStudent } from '../services/studentService';

const DeleteStudent = () => {
  const { studentId } = useParams();
  const navigate = useNavigate();

  const handleDelete = async () => {
    try {
      await deleteStudent(studentId);
      alert('Student deleted successfully!');
      navigate('/');
    } catch (error) {
      console.error(error);
      alert('Failed to delete student');
    }
  };

  return (
    <div>
      <h2>Are you sure you want to delete this student?</h2>
      <button onClick={handleDelete}>Yes</button>
      <button onClick={() => navigate('/')}>No</button>
    </div>
  );
};

export default DeleteStudent;
