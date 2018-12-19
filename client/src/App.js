import React, { Component } from 'react';
import Form from './components/Form.jsx';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import Reviews from './components/Reviews.jsx';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
        router: 'home',
        bio: ''
        }
    }

    setRouter(router, bio) {
        this.setState({
            router: router,
            bio: bio
        })
        this.renderView();
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
        } else if (this.state.router === 'reviews') {
            return (
                <div>
                    <Navbar />
                    <Reviews bio={this.state.bio}/>
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