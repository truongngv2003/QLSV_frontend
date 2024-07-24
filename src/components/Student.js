import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getStudentById} from '../services/studentService';

const Student = () => {
  const { studentId } = useParams();
  const [student, setStudent] = useState({
    studentId: '',
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
        console.log(response.data);
      } catch (error) {
        console.error('Failed to fetch student', error);
      }
    };

    fetchStudent();
  }, [studentId]);

  if (!student) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Student Details</h1>
      <p>Student ID: {student.studentId}</p>
      <p>Full Name: {student.fullName}</p>
      <p>Date of Birth: {student.dateOfBirth}</p>
      <p>Class Name: {student.className}</p>
      <p>Program: {student.program}</p>
      <p>Status: {student.status}</p>
    </div>
  );
};

export default Student;
