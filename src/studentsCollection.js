import React, { useState } from 'react';
import db from './firebase';
import { deleteDoc, doc, onSnapshot, collection } from 'firebase/firestore';
import './collections.css';

export default function StudentsCollection() {

  const [student,setStudent]=useState([]);

// getStudent method is for getting the data from the database and set it to student by setStudent 
  function getStudents(y)
  {
    const ref=collection(db, y);
    // ref.onSnapshot(snpsht =>{
    //   const item =[];
    //      snpsht.forEach(doc =>{
    //        item.push(doc.data());
    //      });
    //   setStudent(item);
    // }

    
    //  snapshot = all the messeges with different ids in object form
    //  doc.data = text and username in object form just like {username:'Soumalya' , text:"Amazon intern is here"} this.
    onSnapshot(ref,(snpsht)=>{
      const item=[];
      snpsht.docs.forEach(doc => {
        item.push(doc.data());
      });
      setStudent(item);
    });
  }

  function deleteData(stdent)
  {
    const docRef = doc(db, "Students", stdent.id);
    deleteDoc(docRef)
    .catch((err)=>{
      console.log(err);
  });
  }

  return (
    <div className="show_box">
      <button type='submit' onClick={()=>getStudents("Students")}>Students</button>

        {student.map( std =>(
          <div className="main_div" key={std.id}>
          <h2>{std.Name}</h2>
          <h2>{std.id}</h2>
          <h2>{std.CGPA}</h2>
          <button type="submit" onClick={()=> deleteData(std)} > X </button>
          </div>
        ))}

    </div>
  );

};