import React, {Component} from 'react';
import {ProductConsumer} from "../context";
import {Link} from "react-router-dom";
import {ButtonContainer} from "./Button";



class Details extends Component {
  render() {
    return (
      <ProductConsumer>
        {(value)=>{
          // console.log(value.detailProduct);
          // Destructuring
          const {id, company, img, info, price, title, inCart} = value.detailProduct;

          return(
            <div className="container py-5">
              {/*title*/}
              <div className="row">
                <div className="col-10 mx-auto text-center">
                  <h1>{title}</h1>
                </div>
              </div>
            {/*end of title*/}

            {/*product info*/}

            <div className="row">
              <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                <img src={img} alt="product" className="img-fluid"/>
              </div>

              {/*product text*/}
              <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                <h2>model: {title}</h2>
                <h4>mady by: <span className="text-uppercase">{company}</span></h4>
                <h4><strong>price: <span>$</span>{price}</strong></h4>
                <p>some info</p>
                <p>{info}</p>
                {/*buttons*/}
                <div>
                  <Link to="/">
                    <ButtonContainer>
                      back to products
                    </ButtonContainer>
                  </Link>

                  <ButtonContainer disabled={inCart ? true : false} onClick={()=>{
                    value.addToCart(id);
                  }}

                  >
                    {inCart ? "inCart" : "add to cart"}
                  </ButtonContainer>
                </div>
              </div>

            </div>

            </div>
          )


        }}
      </ProductConsumer>
    );
  }
}

export default Details;