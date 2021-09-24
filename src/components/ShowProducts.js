import React, {useContext, Fragment} from 'react';
import {ShopContext} from "../Context/ShopContext";
import {ThemeContext} from "../Context/ThemeContext";

const ShowProducts =()=> {

    const {products,doSome}= useContext(ShopContext);
    const ThemeData=useContext(ThemeContext)

    console.log(ThemeData);

        return (
            <Fragment>

                <h1>Show Products</h1>
                <h2 style={{color:"red"}}>{doSome}</h2>
                    {products.map(pro=>(
                        <div key={pro.id}>

                            <h2>Name : {pro.name}</h2>
                            <h4>Price : {pro.price}</h4>
                        </div>
                    ))}

            </Fragment>
        );

}

export default ShowProducts;