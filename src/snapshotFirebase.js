import React, { useState } from 'react';
import db from './firebase';
import { deleteDoc, doc, onSnapshot, collection } from 'firebase/firestore';
import './snapshotFirebase.css';

function SnapshotFirebase() {

  const [student,setStudent]=useState([]);
  const [teachers,setTeachers]=useState([]);

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

  // useEffect(() => {
    
  // }, [])

  function deleteData(stdent)
  {
    const docRef = doc(db, "Students", stdent.id);
    deleteDoc(docRef)
    .catch((err)=>{
      console.log(err);
  });
  }

  function teachersCollection(x){
    getTeachers(x);
  }

  function studentsCollection(y){
    getStudents(y);
  }

  return (
    <div className="show_box">
      <button type='submit' onClick={()=>teachersCollection("Teachers")}>Teachers</button>
      <button type='submit' onClick={()=>studentsCollection("Students")}>Students</button>
      
        {teachers.map( tch =>(
          <div className="main_div">
          <h2>{tch.Name}</h2>
          <h2>{tch.Age}</h2>
          </div>
        ))}

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

}

export default SnapshotFirebase;
