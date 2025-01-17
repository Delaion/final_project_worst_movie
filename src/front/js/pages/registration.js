import React,{useState,useContext} from "react";
import "../../styles/registration.css";
import { Context } from "../store/appContext";
export const Registration=()=>{
  const[userName,setUserName]=useState();
  const { store, actions } = useContext(Context);
  const[name,setName]=useState();
  const[email,setEmail]=useState();
  const[password, setPassword]=useState();
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(userName, name,email);
    actions.signUp(userName, name, email, password);
   
  };
    return(
        <form className="text-center" onSubmit={handleSubmit}>
        <h1 className="text-light mt-5">The So-Bad-It's-Good Movie Registration Form</h1> 
       <h3 className= "text-warning mt-4">Rate, Review and Comment a Cinematic Catastrophe with Pride!</h3>
       <div  className="superFormWrappa2">
       <div className=" formWrappa2 mb-3">
       <div className="mb-3">
          <label for="exampleInputPassword1" className="form-label text-warning">Username</label>
          <input type="text" className="form-control" placeholder=
          
           "Type your username" id="exampleInputPassword1" onChange={(e) => setUserName(e.target.value)}
           />
          </div>
          <div className="mb-3">
          <label for="exampleInputPassword1" className="form-label text-warning">Name</label>
          <input type="text" className="form-control" placeholder="Type your name" 
          id="exampleInputPassword1" onChange={(e) => setName(e.target.value)}/>
          </div>
          <label for="exampleInputEmail1" className="form-label text-warning">Email address</label>
          <input type="email" className="form-control" 
          placeholder="Type your email" id="exampleInputEmail1" 
          aria-describedby="emailHelp" onChange={(e) => setEmail(e.target.value)}/>
          <div id="emailHelp" className="form-text mt-2">We'll never share your email with anyone else.</div>
          <div className="mb-3">
          <label for="exampleInputPassword1" className="form-label text-warning">Password</label>
          <input type="password" className="form-control" 
          placeholder="Type your password" 
          id="exampleInputPassword1" onChange={(e) => setPassword(e.target.value)}/>
          </div>
        <button type="submit" className="btn btn-primary">Submit</button>
        </div>
       </div>
      
      </form>
         );
    };