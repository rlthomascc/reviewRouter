import React, { Component } from 'react';
import Modal from 'react-awesome-modal';
import $ from 'jquery';
// import { isRegExp } from 'util';

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: false,
            review: ''
        }
    }


    openModal() {
        this.setState({
            visible : true
        });
    }

    closeModal() {
        this.setState({
            visible : false
        })
    }


    contestRules() {
        return (
            <div id="contestRules">

                <h1 id="contestRulesHeader">The Del Real Group $500 VISA Gift Card Giveaway Rules</h1>

                <p><b>Contest sponsor:</b> The Del Real Group, 1600 N. Carpenter Rd, Modesto, CA 95351. <br></br>
                    <b>Prize:</b> One $500 VISA Gift Card each quarter, Verifiable retail value of $500. Winner will be contacted by their team realtor.<br></br>
                    <b>Odds of winning:</b> Dependent on number of client reviews submitted each quarter. Each review submission counts for one entry.<br></br>
                    <b>Restrictions:</b><br></br>
                    <i>Must be 18 years or older to participate.</i><br></br>
                    <b>Entry dates:</b> Drawing is held on a quarterly basis; reviews submitted between the first day and last day of each quarter will only be counted in that quarter's contest.<br></br>
                    <b>Winner selection:</b> The winner, selected at random, will be contacted by phone or email with instructions on how to collect his or her prize.<br></br>
                    <i>Offer void where prohibited.</i></p>

            </div>
        )
    }

    renderReview(e) {
        this.setState({
            review: e
        })
    }


    renderData(e) {
        e.preventDefault();
        let t = e.target;
        this.renderReview(t.comments.value);
        $.ajax ({
            method: "POST",
            url: '/review',
            data: {
                fullName: t.fullName.value,
                experienceRating: t.experienceRadio.value,
                recommendationRating: t.recommendRating.value,
                review: t.comments.value,
                marketingConsent: t.marketing.value,
                improvements: t.improvements.value
            },
            success: function() {
                console.log('Data sent to server successfully.')
            },
            error: function(err) {
                console.log(err);
            }
        });
        this.props.reroute('reviews', t.comments.value);
    }


    form() {
        return (
            <div id="form" onSubmit={this.renderData.bind(this)}>
                <h3 id="formHeader">Thank you for taking a few minutes out of your day to <br></br>
                leave us reviews. As a thank you, we will add your name to our <br></br>
                quarterly $500 VISA Gift Card Giveaway!</h3>
                <br></br>
                <br></br>

                <form>
                    <div className="form-group ">
                        <label><b>Full Name</b></label>
                        <input type="text" className="form-control" id="fullName" required />
                    </div>

                    <div >
                        <label><b>How would you rate your overall experience with The Del Real Group</b></label>
                    </div>
                    <div >
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="experienceRadioOptions" id="experienceRadio" value="1" required/>
                            <label className="form-check-label" for="experienceRating1">1</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="experienceRadioOptions" id="experienceRadio" value="2" required/>
                            <label className="form-check-label" for="experienceRating2">2</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="experienceRadioOptions" id="experienceRadio" value="3" required/>
                            <label className="form-check-label" for="experienceRating2">3</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="experienceRadioOptions" id="experienceRadio" value="4" required/>
                            <label className="form-check-label" for="experienceRating2">4</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="experienceRadioOptions" id="experienceRadio" value="5" required/>
                            <label className="form-check-label" for="experienceRating2">5</label>
                        </div>
                    </div>
                    <br></br>

                    <div >
                        <label ><b>Would you recommend The Del Real Group to friends and family based on your experience?</b> </label>
                    </div>
                    <div >
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="recommendRating" id="recommendRating" value="Yes" />
                            <label className="form-check-label" for="recommendRating1">Yes</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="recommendRating" id="recommendRating" value="No" />
                            <label className="form-check-label" for="recommendRating2">No</label>
                        </div>
                    </div>
                    <br></br>

                    <div >
                        <label ><b>Please provide your Review comments about your Real Estate experience, the people you worked with at <br></br>
                        The Del Real Group, or any suggestions you may have.</b></label>
                        <textarea className="form-control" id="comments" rows="3" required/>
                    </div>
                    <br></br>

                    <div >
                        <label ><b>May we use your feedback from this survey as a testimonial for marketing purposes?</b> </label>
                    </div>
                    <div >
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="marketing" id="marketing" value="Yes" />
                            <label className="form-check-label" for="marketing1">Yes</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="marketing" id="marketing" value="No" />
                            <label className="form-check-label" for="marketing2">No</label>
                        </div>
                    </div>
                    <br></br>

                    <div className="form-group ">
                        <label ><i>The Del Real Group is always looking for ways to improve.</i><br></br>
                        <b>What can we do better? </b><i>(If anything.)  :) </i></label>
                        <input type="text" className="form-control" id="improvements"/>
                    </div>
                    <br></br>

                    <button className="btn btn-primary btn-lg" type="submit" >Next Step</button>
                </form>
                <br></br>
                <input id="contest" type="button" value="*Click here to see contest rules." onClick={() => this.openModal()} />
                <Modal visible={this.state.visible} effect="fadeInUp" onClickAway={() => this.closeModal()}>
                    <div>
                        <br></br>
                        {this.contestRules()}
                        <a href="javascript:void(0);" onClick={() => this.closeModal()}>Close</a>
                        <br></br>
                        <br></br>
                    </div>
                </Modal>
                <br></br>
                <br></br>
            </div>
        );
    }

    render() {
        return (
            <div>
                {this.form()}
            </div>
        );
    }
}


export default Form;