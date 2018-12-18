import React, { Component } from 'react';
import Img from 'react-image';

class Navbar extends Component {

    navBar() {
        return (
            <div>

                <nav id="navbar" className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <Img src="http://static1.squarespace.com/static/558afaebe4b04871ce600780/t/558afbc9e4b01d698d1a354f/1435171786494/smaller.png?format=1500w" width="75px" height="75px" />
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
                        <a id="call" className="navbar-text" href="tel:2096907744">Call Instantly</a>
                        <a id="text" className="navbar-text" href="sms:2096907744">Text Instantly</a>
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