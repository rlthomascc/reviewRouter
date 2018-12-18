import React, { Component } from 'react';

class Navbar extends Component {

    navBar() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <a className="navbar-brand" href="#" onClick={() => this.props.changeView('home')}>The Del Real Group Logo Here</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link" href="http://www.thedelrealgroup.com/" target="_blank">Search</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="https://www.thedelrealgroup.com/results-gallery/?userID=all" target="_blank">Current Listings</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="https://www.thedelrealgroup.com/contactus/" target="_blank">Contact Us</a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        );
    }

    render() {
        return (
            this.navBar()
        );
    }
}

export default Navbar;