import React, { useState } from 'react';
import db from './firebase';
import { onSnapshot, collection } from 'firebase/firestore';
import './collections.css';

export default function TeachersCollection(x) {

  const [teachers,setTeachers]=useState([]);

  function getTeachers(x)
  {
    const ref=collection(db, x);

    onSnapshot(ref,(snpsht)=>{
      const item=[];
      snpsht.docs.forEach(doc => {
        item.push(doc.data());
      });
      setTeachers(item);
    });
  }

  return (
    <div className="show_box">
        
      <button type='submit' onClick={()=>getTeachers("Teachers")}>Teachers</button>
      
        {teachers.map( tch =>(
          <div className="main_div">
          <h2>{tch.Name}</h2>
          <h2>{tch.Age}</h2>
          </div>
        ))}

    </div>
  );

};