import React, {Component, Fragment, createContext, useState} from 'react';

export const ShopContext = createContext() ;

const ShopContextProvider =(props)=> {

    const [products,setProducts]=useState({
        products:[
            {id:1,name:"Hp-Laptop",price:80000},
            {id:2,name:"Dell-Laptop",price:75000},
            {id:3,name:"Apple-Laptop",price:180000},
            {id:4,name:"Asus-Laptop",price:60000},
            {id:5,name:"Acer-Laptop",price:60000},
            {id:6,name:"Vivo-Laptop",price:50000},
            {id:7,name:"Samsung-Laptop",price:70000},
        ]
    })

    const doSomething=()=>{
        return "Please Do something";
    }



        return (
            <Fragment>
                <ShopContext.Provider value={{...products ,doSome:doSomething}}>
                    {props.children}
                </ShopContext.Provider>

            </Fragment>
        );

}

export default ShopContextProvider;