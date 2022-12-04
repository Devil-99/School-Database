import React,{ useState } from 'react';
import db from './firebase';
import { setDoc, doc } from 'firebase/firestore';
import './inputbar.css';
import {Ntheme , Btheme} from './theme';

function Inputbar() {

  // useState = to change the state variable in react
  // useEffect = run code on a condition in react
    const [Name,setName]=useState('');
    const [id,setRoll]=useState('');
    const [CGPA,setCGPA]=useState('');
  
    // addData method add a new data to the database
    function addData(newStudent)
      {
        const docref = doc(db, "Students", id);
        const inputbox = document.querySelector(".inputs");
        setDoc(docref,{
            Name:newStudent.Name,
            CGPA:newStudent.CGPA,
            id:newStudent.id
        })
        .then(()=>{
            inputbox.reset();
        })
        .catch((err)=>{console.log(err)});
      }

    return (
          <div id="inputBox" className="input_box">
          <form className="inputs">
          <h1>Students Database</h1> 
          <input id="Input1" className="input1" placeholder="Name" type="text" onChange={(e)=>setName(e.target.value)} />
          <input id="Input2" className="input1" placeholder="Roll No" type="number" onChange={(e)=>setRoll(e.target.value)} />
          <input id="Input3" className="input1" placeholder="CGPA" type="number" onChange={(e)=>setCGPA(e.target.value)}/>
          <button type="reset" onClick={()=> addData( {Name,id,CGPA} )} >Add New</button>
          <button type='button' onClick={()=>Ntheme()}>🌜</button>
          <button type='button' onClick={()=>Btheme()}>☀</button>
          </form>
          </div> 
    );
}

export default Inputbar
