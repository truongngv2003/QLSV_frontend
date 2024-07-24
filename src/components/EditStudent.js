import React, { useState, useEffect } from 'react';
import { getStudentById, updateStudent } from '../services/studentService';
import { useParams } from 'react-router-dom';

const EditStudent = () => {
  const { studentId } = useParams();
  const [student, setStudent] = useState({
    newStudentId: '',
    fullName: '',
    dateOfBirth: '',
    className: '',
    program: '',
    status: ''
  });

  useEffect(() => {
    const fetchStudent = async () => {
      try {
        const response = await getStudentById(studentId);
        setStudent(response.data);
      } catch (error) {
        console.error(error);
        alert('Failed to fetch student');
      }
    };
    fetchStudent();
  }, [studentId]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setStudent({
      ...student,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateStudent(studentId, student);
      alert('Student updated successfully!');
    } catch (error) {
      console.error(error);
      alert('Failed to update student');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="newStudentId" placeholder="New Student ID" value={student.newStudentId} onChange={handleChange} required />
      <input type="text" name="fullName" placeholder="Full Name" value={student.fullName} onChange={handleChange} required />
      <input type="date" name="dateOfBirth" placeholder="Date of Birth" value={student.dateOfBirth} onChange={handleChange} required />
      <input type="text" name="className" placeholder="Class Name" value={student.className} onChange={handleChange} required />
      <input type="text" name="program" placeholder="Program" value={student.program} onChange={handleChange} required />
      <input type="text" name="status" placeholder="Status" value={student.status} onChange={handleChange} required />
      <button type="submit">Update Student</button>
    </form>
  );
};

export default EditStudent;
