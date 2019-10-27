import React from 'react';
import axios from 'axios';

class ProductList extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            products : []
        }
    }

    componentDidMount(){
        axios.get('api/products')
            .then(res => {
                this.setState({
                    products:res.data
                })
            })
            .catch(err =>{
                console.log(err);
            })
    }

    render() { 
        return ( 
            <div className="product-list">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-10">
                            <table className="table table-bordered">
                                <thead>
                                    <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Product Name</th>
                                    <th scope="col">Image</th>
                                    <th scope="col">Price</th>
                                    <th scope="col">Quantity</th>
                                    <th scope="col">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    

                                    {this.state.products.map((product,index) =>(
                                        <tr key={product.id}>
                                            <td>{++index}</td>
                                            <td>{product.product_name}</td>
                                            <td><img src={'images/'+product.image} className="img-fluid" alt="image" width="50" height="50" /></td>
                                            <td>{product.product_price}</td>
                                            <td>{product.product_qty}</td>
                                            <td></td>
                                        </tr>
                                    ))}
                                    
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
         );
    }
}
 
export default ProductList;