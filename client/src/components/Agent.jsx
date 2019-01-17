import React, { Component } from 'react';
import Img from 'react-image';

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

    setReroute(e, f) {
        this.setState({
            reroute: e,
        })
        this.agentChoice()
    }


    agentChoice() {
        return (
            <div id="agentForm" onSubmit={this.reroute.bind(this)}>
                <form id="agentSelectForm">
                    <h1 id="agentHeader">Which Group Member would you like to leave a Review for?</h1>
                    <p><i>Select your agent below.</i></p>
                    <br></br>
                    <br></br>
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <a id="danielAgent" onClick={() => this.setReroute('Daniel')}><Img  src={this.state.reroute === 'Daniel' ? 'https://i.imgur.com/8S2LxZW.png' : this.state.daniel1 } width="300px" height="300px" /></a>
                                <p>Daniel Del Real</p>
                            </div>
                            <div className="col">
                                <a id="andyAgent" onClick={() => this.setReroute('Andy')}><Img src={this.state.reroute === 'Andy' ? 'https://i.imgur.com/SUxwTcY.png' : this.state.andy1} width="300px" height="300px" /></a>
                                <p>Indalecio 'Andy' Del Real</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <a id="carlosAgent" onClick={() => this.setReroute('Carlos')}><Img src={this.state.reroute === 'Carlos' ? 'https://i.imgur.com/9wxoV53.png' : this.state.carlos1} width="300px" height="300px" /></a>
                                <p>Carlos Gutierrez</p>
                            </div>
                            <div className="col">
                                <a id="donAgent" onClick={() => this.setReroute('Don')}><Img src={this.state.reroute === 'Don' ? 'https://i.imgur.com/kCSX8n2.png' : this.state.don1} width="300px" height="300px" /></a>
                                <p>Don Wright</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <a id="pattyAgent" onClick={() => this.setReroute('Patty')}><Img src={this.state.reroute === 'Patty' ? 'https://i.imgur.com/HXBk1fm.png' : this.state.patty1 } width="300px" height="300px" /></a>
                                <p>Patricia Servin-Martinez</p>
                            </div>
                            <div className="col">
                                <a id="amandaAgent" onClick={() => this.setReroute('Amanda')}><Img src={this.state.reroute === 'Amanda' ? 'https://i.imgur.com/Qm80Du2.png' : this.state.amanda1} width="300px" height="300px" /></a>
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