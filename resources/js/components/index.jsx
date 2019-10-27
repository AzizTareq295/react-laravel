import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Header from './header';
import Routing from './route';

class App extends React.Component{

    render(){
        return(
            <BrowserRouter>
                <div>
                    <Header />
                    <Routing /> 
                </div>
            </BrowserRouter>
        )
    }

}

ReactDOM.render(<App />, document.getElementById('app'))