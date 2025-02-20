import React from "react";

const product = [{
   name:"FREZZ",
   category:"electronic",
   price:200000

},{
    name:"TV",
    category:"electronic",
    price:200000

},{
    name:"TELEPHOEN",
   category:"electronic",
   price:200000

},{
    name:"MOBILE",
   category:"electronic",
   price:200000

}]
 
function Products() {
    return(
        <div className="container">
            <div className="row">

        {product.map((pro,i)=>{
            return(
                <div className="card col-3" style={{width: "18rem"}}>
                <div className="card-body">
                  <h5 className="card-title">{pro.name}</h5>
                  <p className="card-text">{pro.category}</p>
                  <p className="card-text">{pro.price}</p>
        
                </div>
              </div>
            )
        })}
        </div>
        </div>
    )
}

export default Products