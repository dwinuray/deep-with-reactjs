import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { render } from '@testing-library/react';


// membuat context
const MyContext = React.createContext();


class App extends Component{

    constructor(props){

        super(props);
        this.state = {

            buttonType : "medium",
            buttonColor: "default"
        }
    }
    render() {

        return(

            <MyContext.Provider value={this.state}>
                <b>Contex</b>
                <Navigation color="Default params from parent or hierarchical type" />
            </MyContext.Provider>
        )
    }
}

class Navigation extends Component{

    render() {

        return (

            <div>
                <a href="">{this.props.color}</a>
                <Button />
            </div>
        )
    }
}



function Button(){


    return (

        <MyContext.Consumer>
            {(Context) => (

                <div>
                    <button>Button</button>
                    <small>This button size is {Context.buttonType} and the color of this button is {Context.buttonColor}</small>
                </div>
            )}
        </MyContext.Consumer>
    )
}


export default App;