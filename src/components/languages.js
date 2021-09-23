import React, {Fragment,useState} from 'react';
import { v4 as uuidv4 } from 'uuid';

const Languages = () => {

    const [computerLanguages,setComputerLanguages] = useState([
        {id:1 ,name:"PHP"},
        {id:2 ,name:"NodeJs"},
        {id:3 ,name:"Java"},
        {id:4 ,name:"Javascript"},
        {id:5 ,name:"C#"}
    ])

    const [name,setName]=useState("");

    const namevalue =(e)=>{
        console.log(e.target.value)
    }

    const addLanguage=(event)=>{
        event.preventDefault() ;
        setComputerLanguages([...computerLanguages,  {id:uuidv4() ,name:"MongoDB"}])
    }

    return (
        <Fragment>

            <table className="table">
                <thead>
                   <th>ID</th>
                   <th>Name</th>
                </thead>
                <tbody>
                {computerLanguages.map(language=>(
                   <tr key={language.id}>
                       <td>{language.id}</td>
                       <td>{language.name}</td>
                   </tr>
                ))}
                </tbody>
            </table>

            <div className="form-group">
                <input type="text" className="form-control" value={name} onChange={namevalue} placeholder="Add Languages..."  />
            </div> <br />

            <div className="form-group">
                  <input type="submit" className="btn btn-primary" onClick={addLanguage} value="Add Language"/>
            </div>

        </Fragment>
    );
};

export default Languages;