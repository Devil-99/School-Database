import React from 'react';
import './collections.css';

import StudentsCollection from './studentsCollection';
import TeachersCollection from './teachersCollection';

function Collections() {
  return (
    
    <div className="buttons">
    <TeachersCollection/>
    <StudentsCollection/>
    </div>

  )
}

export default Collections;
