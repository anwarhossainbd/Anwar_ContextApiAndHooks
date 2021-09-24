import React, {Fragment,useState,useEffect} from 'react';
import { v4 as uuidv4 } from 'uuid';
import InputHook from "./InputHook";

const Languages = () => {

    const [computerLanguages,setComputerLanguages] = useState([
        {id:1 ,name:"PHP" , email:"amwar@gmail.com"},
        {id:2 ,name:"NodeJs", email:"amwar@gmail.com"},
        {id:3 ,name:"Java" , email:"amwar@gmail.com"},
        {id:4 ,name:"Javascript", email:"amwar@gmail.com"},
        {id:5 ,name:"C#" ,email:"amwar@gmail.com"}
    ])

   // const [name,setName]=useState("");

    // const namevalue =(e)=>{
    //    setName(e.target.value) ;
    // }



    const [name,namevalue,clear]=InputHook("");

    const [email,emailvalue,clearmail]=InputHook("");
    const[count,setCount]=useState(0)


    const increase=()=>{
        setCount(count+1)
    }


    const addLanguage=(event)=>{
        event.preventDefault() ;
        setComputerLanguages([...computerLanguages,  {id:uuidv4() ,name:name ,email:email}]);

        clear("");
        clearmail("");
    }

    useEffect(()=>{
        console.log("Use Effect Method run")
    },[count])

    return (
        <Fragment>

            <h1>{count}</h1>

            <table className="table">
                <thead>
                   <th>ID</th>
                   <th>Name</th>
                   <th>Email</th>
                </thead>
                <tbody>
                {computerLanguages.map(language=>(
                   <tr key={language.id}>
                       <td>{language.id}</td>
                       <td>{language.name}</td>
                       <td>{language.email}</td>
                   </tr>
                ))}
                </tbody>
            </table>

            <form onSubmit={addLanguage}>

                <div className="form-group">
                    <input type="text" className="form-control" value={name} onChange={namevalue} placeholder="Add Languages..."  />
                </div> <br />

                <div className="form-group">
                    <input type="email" className="form-control" value={email} onChange={emailvalue} placeholder="Add Email..."  />
                </div> <br />

                <div className="form-group">
                      <input type="submit" className="btn btn-primary"  value="Add Language"/>
                </div>

            </form> <br/>

            <div className="form-group">
                <input type="submit" className="btn btn-danger" onClick={increase} value="Count"/>
            </div>

        </Fragment>
    );
};

export default Languages;