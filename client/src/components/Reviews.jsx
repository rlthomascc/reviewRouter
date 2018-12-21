import React, { Component } from 'react';
import Img from 'react-image';

class Reviews extends Component {
    constructor(props) {
        super(props);
    }

    copyData() {
        console.log("you clicked me!!")
        let copyText = document.getElementById("COPYPASTE");
        copyText.select();
        document.execCommand("copy");
        alert("Copied the text: " + copyText.value);
    }

    render() {
        return (
            <div id="reviews">
                <h1><i>Thanks for the great Review!</i></h1>
                <br></br>
                <br></br>
                <p id="reviewsBody"><i>You are entered into our monthly $500 Gift Card Giveaway. We will contact you via email if you win.</i></p>
                <br></br>
                <h3><b>Want more chances to win?</b></h3>
                <br></br>
                <br></br>
                <p id="reviewsBody">If you will take a few more minutes to post your review on the popular review sites listed below, <b>we will add an additional entry
                for every review.</b> Today's shoppers want to know which companies and services are the best, and your review helps us grow
                our business. <i>This is the best 'Thank You' you can give me.</i>
                <br></br>
                <br></br>
                <br></br>
                You can copy and paste the testimonial you left for The Del Real Group by <i>selecting it in the box below and clicking CTRL + C on a PC or Command + C on a Mac. You can <br></br>
                then paste it into the testimonial box on the review site(s) with CTRL + V on a PC or Command + V on a Mac.</i>
                </p>
                <br></br>
                <br></br>
                <div id="reviewsCopyPaste">
                <textarea className="form-control" id="COPYPASTE" rows="3" value={this.props.bio}required/>
                <button className="btn btn-primary" onClick={this.copyData}>Copy To Clipboard</button>
                </div>
                <br></br>
                <br></br>
                <div id="reviewButtons">
                    <a id="googleReview" href="https://www.google.com/search?q=the+del+real+group&ie=utf-8&oe=utf-8&client=firefox-b-1-ab&npsic=0&rflfq=1&rlha=0&rllag=37688080,-121058636,4090&tbm=lcl&rldimm=16470356922505957134&ved=2ahUKEwij5Kim7qbdAhXXITQIHY1yB-EQvS4wAXoECAYQEw&rldoc=1&tbs=lrf:!2m1!1e2!3sIAE,lf:1,lf_ui:2#lrd=0x80905179bdeeba05:0xe492765b79dd0f0e,3,,,&rlfi=hd:;si:16470356922505957134;mv:!3m12!1m3!1d32429.09598449403!2d-121.05778790000001!3d37.68687775!2m3!1f0!2f0!3f0!3m2!1i392!2i493!4f13.1;tbs:lrf:!2m1!1e2!3sIAE,lf:1,lf_ui:2" target="_blank"><Img src="https://i.imgur.com/fiABxYH.png" width="200px" height="100px" /></a>
                    <a id="yelpReview" href="https://www.yelp.com/writeareview/biz/q7ImrPf7UA61gH5zFhSrFA?return_url=%2Fbiz%2Fq7ImrPf7UA61gH5zFhSrFA&source=biz_details_war_button" target="_blank"><Img src="https://i.imgur.com/8HgaHs6.png" width="200px" height="100px" /></a>
                    <a id="zillowReview" href="https://www.zillow.com/reviews/write/?s=X1-ZUyzjp1enu0etl_67ces" target="_blank"><Img src="https://i.imgur.com/QQTUlDf.png" width="200px" height="100px" /></a>

                </div>
                <br></br>
                <br></br>
                <p><i>If there is anything I could have done better, please let me know. Thank you for choosing The Del Real Group and I.</i></p>
            </div>
        );
    }
}

export default Reviews;