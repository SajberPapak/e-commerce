import React, { Component } from "react";
import Product from "./Product";
import Title from "./Title";
import { storeProducts, detailProduct } from "../data";
import { ProductConsumer } from "../context";

class ProductList extends Component {
  render() {
    return (
      <div>
        <React.Fragment>
          <div className="py-5">
            <div className="container">
              <Title name="our" title="products" />
              {/*Products row*/}
              <div className="row">
                <ProductConsumer>
                  {value => {
                    // console.log(value);
                    // console.log(value.products[1].id);

                    return value.products.map(product => {
                      return <Product key={product.id} product={product} />;
                    });
                  }}
                </ProductConsumer>
              </div>
            </div>
          </div>
        </React.Fragment>
      </div>
    );
  }
}

export default ProductList;
