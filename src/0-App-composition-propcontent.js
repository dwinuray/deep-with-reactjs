import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component{

    render() {

        return (

            <div>
                <Welcome />

                <p>Oke bagian main content</p>
                <Content />
            </div>
        )
    }
}



function Welcome() {

    return (

        <Notification status="success">
            <h1>Selamat Datang</h1>
        </Notification>
    )
}



function Content() {

    return (

        <Notification status="warning">
            <small>This is main content of body</small>
        </Notification>
    )
}




// template notification
function Notification( params ) {

    return (

        <div className={'notification is-' + params.status}>
            { params.children }
        </div>
    )
}


export default App;