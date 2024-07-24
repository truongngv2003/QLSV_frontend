import React, { useState } from 'react';
import { addStudent } from '../services/studentService';

const AddStudent = () => {
  const [student, setStudent] = useState({
    studentId: '',
    fullName: '',
    dateOfBirth: '',
    className: '',
    program: '',
    status: ''
  });

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
      await addStudent(student);
      alert('Student added successfully!');
    } catch (error) {
      console.error(error);
      alert('Failed to add student');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="studentId" placeholder="Student ID" onChange={handleChange} required />
      <input type="text" name="fullName" placeholder="Full Name" onChange={handleChange} required />
      <input type="date" name="dateOfBirth" placeholder="Date of Birth" onChange={handleChange} required />
      <input type="text" name="className" placeholder="Class Name" onChange={handleChange} required />
      <input type="text" name="program" placeholder="Program" onChange={handleChange} required />
      <input type="text" name="status" placeholder="Status" onChange={handleChange} required />
      <button type="submit">Add Student</button>
    </form>
  );
};

export default AddStudent;
