import React, { Component } from 'react';

class Form extends Component {


    form() {
        return (
            <div id="form">
            <h3>GIFT CARD INFORMATION HERE</h3>
                <form>

                    <div className="form-group col-sm-5">
                        <label for="full name"><b>Full Name</b></label>
                        <input type="text" className="form-control" id="full name" placeholder="John Doe" required />
                    </div>

                    <div className="col-sm">
                        <label for="experienceRating"><b>How would you rate your overall experience with The Del Real Group</b></label>
                    </div>
                    <div className="col-sm">
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="experienceRadioOptions" id="experienceRadio1" value="1" required/>
                            <label className="form-check-label" for="experienceRating1">1</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="experienceRadioOptions" id="experienceRadio2" value="2" required/>
                            <label className="form-check-label" for="experienceRating2">2</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="experienceRadioOptions" id="experienceRadio3" value="3" required/>
                            <label className="form-check-label" for="experienceRating2">3</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="experienceRadioOptions" id="experienceRadio4" value="4" required/>
                            <label className="form-check-label" for="experienceRating2">4</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="experienceRadioOptions" id="experienceRadio5" value="5" required/>
                            <label className="form-check-label" for="experienceRating2">5</label>
                        </div>
                    </div>
                    <br></br>

                    <div className="col-sm">
                        <label for="recommendRating"><b>Will you recommend The Del Real Group to friends and family based on your experience?</b> </label>
                    </div>
                    <div className="col-sm">
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="recommendRating" id="recommendRating1" value="Yes" />
                            <label className="form-check-label" for="recommendRating1">Yes</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="recommendRating" id="recommendRating2" value="No" />
                            <label className="form-check-label" for="recommendRating2">No</label>
                        </div>
                    </div>
                    <br></br>

                    <div className="col-sm">
                        <label for="contacted"><b>Please provide your comments about your loan experience, the people you worked with at <br></br>
                        The Del Real Group, or any suggestions you may have.</b></label>
                        <textarea className="form-control col-sm" id="comments" rows="3" required/>
                    </div>
                    <br></br>

                    <div className="col-sm">
                        <label for="marketing"><b>May we use your feedback from this survey as a testimonial for marketing purposes?</b> </label>
                    </div>
                    <div className="col-sm">
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="marketing" id="marketing1" value="Yes" />
                            <label className="form-check-label" for="marketing1">Yes</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="marketing" id="marketing2" value="No" />
                            <label className="form-check-label" for="marketing2">No</label>
                        </div>
                    </div>
                    <br></br>

                    <div className="col-sm">
                        <label for="contacted" required> <i>The Del Real Group is always looking for ways that we can improve your real estate experience.</i> <br></br>
                        <b>What is at least one thing we can do to improve?</b> </label>
                        <input className="form-control col-sm-5" id="comments" rows="3" />
                    </div>
                    <br></br>

                    <button className="btn btn-primary btn-lg" type="submit">Submit</button>
                </form>
                <p>CONTEST RULES LINK // USE MODAL FOR FORM POP UP WITH INFORMATION</p>
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