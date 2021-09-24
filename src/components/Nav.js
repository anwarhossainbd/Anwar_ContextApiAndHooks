import React, {useContext} from 'react';
import {ShopContext} from "../Context/ShopContext";

const Nav =()=>{

    const {products}  =useContext(ShopContext);

    
        return (
            <div>
                <h1>We have total {products.length} products</h1>
            </div>
        );

}

export default Nav;