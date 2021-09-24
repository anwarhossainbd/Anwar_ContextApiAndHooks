import React, {Component} from 'react';
import {ShopContext} from "../Context/ShopContext";

class ShowProducts extends Component {

    static contextType=ShopContext ;

    render() {
        const {products}=this.context;

        return (
            <div>
                <h1>Show Products</h1>
                {products.map(pro=>(
                    <div key={pro.id}>

                        <h2>Name : {pro.name}</h2>
                        <h4>Price : {pro.price}</h4>
                    </div>
                ))}
            </div>
        );
    }
}

export default ShowProducts;