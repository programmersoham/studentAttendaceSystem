import React from 'react';

function StudentList({ students, handleCheckOut }) {
  return (
    <>
      <h2>Students Currently Checked In:</h2>
      {students.map((student, index) => (
        <div key={student.rollNumber}>
          {student.rollNumber} - {student.studentName} - Checked in at: {student.checkInTime.toString()}
          <button onClick={() => handleCheckOut(index)}>Check Out</button>
        </div>
      ))}
    </>
  );
}

export default StudentList;
