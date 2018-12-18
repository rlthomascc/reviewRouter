import React, { Component } from 'react';

class Form extends Component {


    form() {
        return (
            <div id="form">
                <form>

                    <div className="form-group col-sm-5">
                        <label for="full name">Full Name</label>
                        <input type="text" className="form-control" id="full name" placeholder="John Doe" />
                    </div>

                    <div className="col-sm">
                        <label for="experienceRating">How would you rate your overall experience with The Del Real Group</label>
                    </div>
                    <div className="col-sm">
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="experienceRadioOptions" id="experienceRadio1" value="1" />
                            <label className="form-check-label" for="experienceRating1">1</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="experienceRadioOptions" id="experienceRadio2" value="2" />
                            <label className="form-check-label" for="experienceRating2">2</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="experienceRadioOptions" id="experienceRadio3" value="3" />
                            <label className="form-check-label" for="experienceRating2">3</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="experienceRadioOptions" id="experienceRadio4" value="4" />
                            <label className="form-check-label" for="experienceRating2">4</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="experienceRadioOptions" id="experienceRadio5" value="5" />
                            <label className="form-check-label" for="experienceRating2">5</label>
                        </div>
                    </div>
                    <br></br>

                    <div className="col-sm">
                        <label for="closingRating">Did we close your property on time? </label>
                    </div>
                    <div className="col-sm">
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="closingRatingOptions" id="closingRating1" value="Yes" />
                            <label className="form-check-label" for="closingRating1">Yes</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="closingRatingOptions" id="closingRating2" value="No" />
                            <label className="form-check-label" for="closingRating2">No</label>
                        </div>
                    </div>
                    <br></br>

                    <div className="col-sm">
                        <label for="communicationRating">Did we effectively communicate with you during the process? </label>
                    </div>
                    <div className="col-sm">
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="communicationRatingOptions" id="communicationRating1" value="Yes" />
                            <label className="form-check-label" for="communicationRating1">Yes</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="communicationRatingOptions" id="communicationRating2" value="No" />
                            <label className="form-check-label" for="communicationRating2">No</label>
                        </div>
                    </div>
                    <br></br>

                    <div className="col-sm">
                        <label for="useAgainRating">Will you use The Del Real Group in the future should you need another home? </label>
                    </div>
                    <div className="col-sm">
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="useAgainRating" id="useAgainRating1" value="Yes" />
                            <label className="form-check-label" for="useAgainRating1">Yes</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="useAgainRating" id="useAgainRating2" value="No" />
                            <label className="form-check-label" for="useAgainRating2">No</label>
                        </div>
                    </div>
                    <br></br>

                    <div className="col-sm">
                        <label for="recommendRating">Will you recommend The Del Real Group to friends and family based on your experience? </label>
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
                        <label for="contacted">Please provide your comments about your loan experience, the people you worked with at <br></br>
                        The Del Real Group, or any suggestions you may have.</label>
                        <textarea className="form-control col-sm" id="comments" rows="3" />
                    </div>
                    <br></br>

                    <div className="col-sm">
                        <label for="contacted">Would you like to be contacted regarding your feedback? </label>
                    </div>
                    <div className="col-sm">
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="contacted" id="contacted1" value="Yes" />
                            <label className="form-check-label" for="contacted1">Yes</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="contacted" id="contacted2" value="No" />
                            <label className="form-check-label" for="contacted2">No</label>
                        </div>
                    </div>
                    <br></br>

                    <div className="col-sm">
                        <label for="marketing">May we use your feedback from this survey as a testimonial for marketing purposes? </label>
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

                    <button className="btn btn-primary btn-lg" type="submit">Submit</button>
                </form>
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