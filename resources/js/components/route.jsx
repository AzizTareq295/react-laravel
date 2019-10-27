import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Home from './home';
import CreateProduct from './create';
import ProductList from './list';
import AllProducts from './allProducts';

class Routing extends React.Component {
    render(){
        return(
            <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/create" component={CreateProduct} />
                <Route path="/list" component={ProductList} />
                <Route path="/all_products" component={AllProducts}/>
            </Switch>
        )
    }
}

export default Routing;