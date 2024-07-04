import React, { useState } from 'react';
// import Student from './Student';
import Student from './Student';

const StudentList = () => {
  const [students, setstudents] = useState([
    { name: 'ram', marks: 85 ,grade:'B'},
    { name: 'seeta', marks: 90 ,grade:'A' },
    { name: 'hanuman', marks: 78,grade:'C' },
  ]);

  return (
    <div>
      {students.map((student, index) => (
        <Student key={index} name={student.name} marks={student.marks } grade={student.grade} />
      ))}
    </div>
  );
};

export default StudentList;
