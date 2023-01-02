import React, { useState } from 'react';
import './collections.css';

import StudentsCollection from './studentsCollection';
import TeachersCollection from './teachersCollection';

function Collections() {
  const [teachersDisplay, setTeacherDisplay] = useState(false);
  const [studentDisplay, setStudentDisplay] = useState(false);

  return (
    <div className="buttons">
      <button onClick={()=>setTeacherDisplay(!teachersDisplay)}>displayTeachers</button>
      {teachersDisplay && <TeachersCollection/>}
      <button onClick={()=>setStudentDisplay(!studentDisplay)}>displayStudents</button>
      {studentDisplay && <StudentsCollection/>}
    </div>

  )
}

export default Collections;
