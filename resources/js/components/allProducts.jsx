import React, { Component } from 'react';
import axios from 'axios';

class AllProducts extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            products:[]
         }
    }
    render() { 
        return ( 
            <div className="allProducts">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <h1 className="d-inline">Product list  </h1>

                            <div className="carts">
                                <div className="cart-pop">
                                    
                                    <div className="shoppingcart"><span><i className="fas fa-shopping-cart"></i></span></div>
                                    <div className="cart-list">
                                        <div className="cart-list-product">

                                            <div className="cart-product mb-3 mt-3">
                                                <div className="cart-product-image">
                                                    <img src="" alt="image" className="img-fluid" />
                                                </div>
                                                <div className="cart-product-details">
                                                    <h5></h5>
                                                    <span className="product-amount"></span>
                                                </div>
                                                <div className="cart-product-remove">
                                                    <button type="button" onClick=""><i className="fas fa-trash-alt"></i></button>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="cart-footer">
                                            <div className="subtotal">
                                                <p>Sub Total : <span id="total_sum">
                                                    </span></p>
                                            </div>
                                            <div className="cart-button">
                                                <router-link to="/checkout" className="cart-checkout">Check Out</router-link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                    
                    
                    <div className="row">
                        <div className="col-lg-3 mt-3">
                            <div className="product-body">
                                <div className="product-image">
                                    <img src="" alt="image" className="img-fluid" />
                                    <div className="product-add-to-cart">
                                        <button  onClick="" className="btn"><i className="fas fa-cart-plus"></i></button>
                                    </div>
                                </div>
                                <div className="product-description">
                                    <h5></h5>
                                    <span><i className="fas fa-dollar-sign"></i></span>
                                </div>
                            </div>
                        </div>
                    </div>


                    
                </div>
            </div>
         );
    }
}
 
export default AllProducts;