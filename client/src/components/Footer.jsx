import React, { Component } from 'react';
import Img from 'react-image';

class Footer extends Component {


    footer() {
        return (
        <div>
            <nav id="navbar" className="navbar fixed-bottom navbar-light bg-dark">
            <div id="footer">
            <br></br>
                <p><i>© 2019 - The Del Real Group. All Rights Reserved. <br></br>
                        DRE Agent Lic. No. 01423976</i></p>
            </div>
            <div>
                <a id="facebook" href="https://www.facebook.com/thedelrealgroup" target="_blank"><Img src="https://i.imgur.com/p11IMOt.png" width="45px" height="45px" /></a>
                <a id="instagram" href="https://www.instagram.com/thedelrealgroup" target="_blank"><Img src="https://i.imgur.com/2v14oSQ.png" width="45px" height="45px" /></a>
            </div>
            </nav>
        </div>
        );
    }




    render() {
        return (
            this.footer()
        );
    }
}

export default Footer;