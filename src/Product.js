import React from "react"

function Product(props){
    return (
        <div>
            <h3> {props.product.itemName}</h3>
             <p> {props.product.price} - {props.product.descp}</p>
        </div>
    )
}
 export default Product