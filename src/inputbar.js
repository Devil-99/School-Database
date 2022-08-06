import React,{ useState } from 'react';
import db from './firebase';
import { setDoc, doc } from 'firebase/firestore';
import './inputbar.css';

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
    
    function Ntheme()
      {
          document.getElementById("inputBox").setAttribute("style",
          "background-color: #1f1f1f;"
          )
          document.getElementById("Input1").setAttribute("style",
          "background-color: #ffffb5; color: black;"
          )
          document.getElementById("Input2").setAttribute("style",
          "background-color: #ffffb5; color: black;"
          )
          document.getElementById("Input3").setAttribute("style",
          "background-color: #ffffb5; color: black;"
          )
      }
    function Btheme()
      {
          document.getElementById("inputBox").setAttribute("style",
          "background-color: #ffffb5;"
          )
          document.getElementById("Input1").setAttribute("style",
          "background-color: black; color: white;"
          )
          document.getElementById("Input2").setAttribute("style",
          "background-color: black; color: white;"
          )
          document.getElementById("Input3").setAttribute("style",
          "background-color: black; color: white;"
          )
      }

    return (
          <div id="inputBox" className="input_box">
          <form className="inputs">
          <h1>Students Database</h1> 
          <input id="Input1" className="input1" placeholder="Name" type="text" onChange={(e)=>setName(e.target.value)} />
          <input id="Input2" className="input1" placeholder="Roll No" type="number" onChange={(e)=>setRoll(e.target.value)} />
          <input id="Input3" className="input1" placeholder="CGPA" type="number" onChange={(e)=>setCGPA(e.target.value)}/>
          <button type="reset" onClick={()=> addData( {Name,id,CGPA} )} >Add New</button>
          <button type='submit' onClick={()=>Ntheme()}>🌜</button>
          <button type='submit' onClick={()=>Btheme()}>☀</button>
          </form>
          </div> 
    );
}

export default Inputbar
