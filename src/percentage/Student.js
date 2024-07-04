import React from "react";

let Student = ({ name, marks, grade }) => {
    return (
      <div>
        <p>
          Name: {name}, Marks: {marks} ,grade: {grade}
        </p>
      </div>
    );
  };
  
  export default Student;