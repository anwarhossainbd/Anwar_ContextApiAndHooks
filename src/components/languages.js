import React, {Fragment,useState} from 'react';

const Languages = () => {

    const [computerLanguages,setComputerLanguages] = useState([
        {id:1 ,name:"PHP"},
        {id:2 ,name:"NodeJs"},
        {id:3 ,name:"Java"},
        {id:4 ,name:"Javascript"},
        {id:5 ,name:"C#"}
    ])

    const addLanguage=(event)=>{
        event.preventDefault() ;
        setComputerLanguages([...computerLanguages,  {id:6 ,name:"MongoDB"}])
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

            <input type="submit" className="btn btn-primary" onClick={addLanguage} value="Add Language"/>

        </Fragment>
    );
};

export default Languages;