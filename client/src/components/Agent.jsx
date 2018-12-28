import React, { Component } from 'react';
import Img from 'react-image';
import $ from 'jquery';

class Agent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            daniel1: 'https://i.imgur.com/ZJTmOVT.png',
            andy1: 'https://i.imgur.com/oI1rYR1.png',
            carlos1: "https://i.imgur.com/zUw70nm.png",
            don1: 'https://i.imgur.com/1opwNKq.png',
            patty1: "https://i.imgur.com/BkqWKjC.png",
            amanda1: "https://i.imgur.com/NFJgzHz.png",
            reroute: '-'
        }
    }

    reroute(e) {
        e.preventDefault()
        this.props.reroute('form', this.state.reroute)

    }

    setRerouteDaniel(e, f) {
        this.setState({
            reroute: e,
            daniel1: f
        })
        this.agentChoice()
    }

    setRerouteAndy(e, f) {
        this.setState({
            reroute: e,
            andy1: f
        })
        this.agentChoice()
    }

    setRerouteCarlos(e, f) {
        this.setState({
            reroute: e,
            carlos1: f
        })
        this.agentChoice()
    }

    setRerouteDon(e, f) {
        this.setState({
            reroute: e,
            don1: f
        })
        this.agentChoice()
    }

    setReroutePatty(e, f) {
        this.setState({
            reroute: e,
            patty1: f
        })
        this.agentChoice()
    }

    setRerouteAmanda(e, f) {
        this.setState({
            reroute: e,
            amanda1: f
        })
        this.agentChoice()
    }

    agentChoice() {
        return (
            <div id="agentForm" onSubmit={this.reroute.bind(this)}>
                <form id="agentSelectForm">
                    <h1 id="agentHeader">Which Agent Are You Currently Working With?</h1>
                    <p><i>Select your agent below.</i></p>
                    <br></br>
                    <br></br>
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <a id="danielAgent" onClick={() => this.setRerouteDaniel('daniel', 'https://i.imgur.com/8S2LxZW.png')}><Img  src={this.state.daniel1} width="300px" height="300px" /></a>
                                <p>Daniel Del Real</p>
                            </div>
                            <div className="col">
                                <a id="andyAgent" onClick={() => this.setRerouteAndy('andy', 'https://i.imgur.com/SUxwTcY.png')}><Img src={this.state.andy1} width="300px" height="300px" /></a>
                                <p>Indalecio 'Andy' Del Real</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <a id="carlosAgent" onClick={() => this.setRerouteCarlos('carlos', 'https://i.imgur.com/9wxoV53.png')}><Img src={this.state.carlos1} width="300px" height="300px" /></a>
                                <p>Carlos Gutierrez</p>
                            </div>
                            <div className="col">
                                <a id="donAgent" onClick={() => this.setRerouteDon('don', 'https://i.imgur.com/kCSX8n2.png')}><Img src={this.state.don1} width="300px" height="300px" /></a>
                                <p>Don Wright</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <a id="pattyAgent" onClick={() => this.setReroutePatty('patty', 'https://i.imgur.com/HXBk1fm.png')}><Img src={this.state.patty1} width="300px" height="300px" /></a>
                                <p>Patricia Servin-Martinez</p>
                            </div>
                            <div className="col">
                                <a id="amandaAgent" onClick={() => this.setRerouteAmanda('amanda', 'https://i.imgur.com/Qm80Du2.png')}><Img src={this.state.amanda1} width="300px" height="300px" /></a>
                                <p>Amanda Stallcup</p>
                            </div>
                        </div>
                    </div>

                    <br></br>
                    <br></br>
                    <br></br>
                    <h3>Your Agent Is: {this.state.reroute}</h3>
                    <p><i>Confirm that the Information above is correct.</i></p>
                    <button type="submit" className="btn btn-lg btn-primary">Submit</button>
                </form>
            </div>
        );
    }

    render() {
        return (
            this.agentChoice()
        );
    }
}

export default Agent;