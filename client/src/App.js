import React, { Component } from 'react';
import Form from './components/Form.jsx';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
        router: 'home',
        }
    }

    setRouter(e) {
        this.setState({
            router: e
        })
    }

    renderView() {
        if (this.state.router === 'home') {
            return (
                <div>
                    <Navbar />
                    <Form reroute={this.setRouter.bind(this)}/>
                    <Footer />
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