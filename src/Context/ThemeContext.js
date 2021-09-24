import React, {Fragment, createContext, useState} from 'react';

export  const ThemeContext = createContext() ;

const ThemeContextProvider = (props) => {

    const [color,setColour] =useState({
        backgrround:"black",
        color:"white",
    });

    return (
        <Fragment>

            <ThemeContext.Provider value={{...color}}>
                {props.children}
            </ThemeContext.Provider>
            
        </Fragment>
    );
};

export default ThemeContextProvider;