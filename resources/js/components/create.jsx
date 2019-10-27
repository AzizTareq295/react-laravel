import React from 'react';
import axios from 'axios';

class CreateProduct extends React.Component {

    constructor(props){

        super(props)

        this.state={
            product_name : '',
            product_price: '',
            product_qty:'',
            product_image:''
        }


        this.handleFieldChange = this.handleFieldChange.bind(this)
        this.handleImage = this.handleImage.bind(this)
        this.submitFormData = this.submitFormData.bind(this)
    }

    handleFieldChange (event){
        this.setState({
            [event.target.name] : event.target.value
        })
    }

    handleImage(e){
        let fileReader = new FileReader();

        fileReader.readAsDataURL(e.target.files[0])

        fileReader.onload = e =>{
            this.setState({
                product_image : e.target.result
            })
        }
    }

    submitFormData(event){
        event.preventDefault();

        axios.post('api/products',this.state)
            .then((res)=>{
                this.setState({
                    product_name : '',
                    product_price: '',
                    product_qty:'',
                    product_image:''
                })
                alert('product uploaded')
            })
            .catch((err) =>{
                console.log(err)
            })
        
    }
    
    render() { 
        return ( 

            <div className="create-product">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <form onSubmit={this.submitFormData} encType="multipart/from-data">
                                <div className="form-group">
                                    <label>Product Name</label>
                                    <input type="text" className="form-control" placeholder="Enter Product Name" name="product_name" value={this.state.product_name} onChange={this.handleFieldChange}/>
                                </div>
                                <div className="form-group">
                                    <label>Product Price</label>
                                    <input type="text" className="form-control" placeholder="Enter Product Price" name="product_price" value={this.state.product_price} onChange={this.handleFieldChange}/>
                                </div>
                                <div className="form-group">
                                    <label>Product Quantity</label>
                                    <input type="text" className="form-control" placeholder="Enter Product Quantity" name="product_qty" value={this.state.product_qty} onChange={this.handleFieldChange}/>
                                </div>
                                <div className="form-group">
                                    <label>Product Image</label>
                                    <input type="file" className="form-control" placeholder="Enter Product Image" name="image" onChange={this.handleImage}/>
                                </div>
                                <button type="submit" className="btn btn-primary">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}
 
export default CreateProduct;