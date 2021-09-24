import React, {Fragment,useState} from 'react';

const InputHook = (val) => {

    const [state,setState]=useState(val);

    const namevalue =(e)=>{
        setState(e.target.value) ;
    }

    const clear =()=>{
        setState("")
    }

    return [state,namevalue,clear];
};

export default InputHook;