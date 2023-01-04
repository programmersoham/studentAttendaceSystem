import React, { useState, useEffect } from 'react';
import StudentList from './StudentList';
import './styles.css'
function StudentAttendance() {
  const [rollNumber, setRollNumber] = useState('');
  const [studentName, setStudentName] = useState('');
  const [students, setStudents] = useState([]);

  const handleRollNumberChange = (event) => {
    setRollNumber(event.target.value);
  };

  const handleStudentNameChange = (event) => {
    setStudentName(event.target.value);
  };

  const handleCheckOut = (index) => {
    setStudents((prevStudents) => {
      const currentTime = new Date();
      const updatedStudents = [...prevStudents];
      updatedStudents[index].checkOutTime = currentTime;
      return updatedStudents;
    });
    setCheckOutMessage(`Student with roll number ${students[index].rollNumber} checked out`);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const currentTime = new Date();
    setStudents((prevStudents) => [
      ...prevStudents,
      { rollNumber, studentName, checkInTime: currentTime },
    ]);
    setRollNumber('');
    setStudentName('');
  };

  const numStudentsCheckedIn = students.filter((student) => !student.checkOutTime).length;

  return (
    <>
      <h1>Number of students checked in: {numStudentsCheckedIn}</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Roll Number:
          <input type="text" value={rollNumber} onChange={handleRollNumberChange} />
        </label>
        <br />
        <label>
          Student Name:
          <input type="text" value={studentName} onChange={handleStudentNameChange} />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
      <StudentList students={students} handleCheckOut={handleCheckOut} />
    </>
  );
}

export default StudentAttendance;
