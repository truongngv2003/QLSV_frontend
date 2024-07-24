import axios from 'axios';

const API_URL = 'http://localhost:5000/students';

export const getAllStudents = () => axios.get(API_URL);
export const getStudentById = (studentId) => axios.get(`${API_URL}/${studentId}`);
export const addStudent = (student) => axios.post(`${API_URL}/addAStudent`, student);
export const updateStudent = (studentId, student) => axios.put(`${API_URL}/${studentId}/editAStudent`, student);
export const deleteStudent = (studentId) => axios.delete(`${API_URL}/${studentId}/deleteAStudent`);
