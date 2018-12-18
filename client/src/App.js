import React, { Component } from 'react';
import Form from './components/Form.jsx';
import Navbar from './components/Navbar.jsx';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
        router: 'home'
        }
    }


    renderView() {
        if (this.state.router === 'home') {
            return (
                <div>
                    <Navbar />
                    <Form />
                </div>
            );
        }
    }


    render() {
        return (
            this.renderView()
        );
    };
};

export default App;