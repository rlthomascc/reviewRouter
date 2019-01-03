import React, { Component } from 'react';
import Img from 'react-image';

class Reviews extends Component {
    constructor(props) {
        super(props);
    }

    copyData() {
        let copyText = document.getElementById("COPYPASTE");
        copyText.select();
        document.execCommand("copy");
        alert("Copied the text: " + copyText.value);
    }

    render() {
        if (this.props.agent === 'Daniel'){
            return (
                <div id="reviews">
                    <h1 id="almostDone">Almost done... Only 3 Steps away!</h1>
                    <br></br>
                    <h4 id="step">Step 1:</h4>
                    <h4>Copy your review by selecting the <i>'Copy To Clipboard'</i> button.</h4>
                    <br></br>

                    <h4 id="step">Step 2:</h4>
                    <h4>Click on the website button (Zillow, Yelp, & Google) below.</h4>
                    <br></br>

                    <h4 id="step">Step 3:</h4>
                    <h4>Paste your review into the testimonial box on the review site by pressing CTRL + V on a PC or Command + V on a Mac.</h4>
                    <br></br>
                    <br></br>

                    <h1 id="almostDone">Want more chances to win the $500 VISA Gift Card?</h1>
                    <p id="almostDoneParagraph"><i>We will add an additional entry for you for every review you leave us. For example, if you leave us a review on Zillow, Yelp <br></br>
                    and Google then you will have 3 entries in the drawing. Home Buyers and Sellers want to know which Real Estate agent and <br></br>
                    team offer the best services as well as experience. Your reviews will help us continue to grow our business.</i></p>

                    <div id="reviewsCopyPaste">
                    <textarea className="form-control" id="COPYPASTE" rows="3" value={this.props.bio}required/>
                    <button className="btn btn-primary" onClick={this.copyData}>Copy To Clipboard</button>
                    </div>
                    <br></br>
                    <br></br>
                    <div id="reviewButtons">
                        <a id="googleReview" href="https://www.google.com/search?q=the+del+real+group&ie=utf-8&oe=utf-8&client=firefox-b-1-ab&npsic=0&rflfq=1&rlha=0&rllag=37688080,-121058636,4090&tbm=lcl&rldimm=16470356922505957134&ved=2ahUKEwij5Kim7qbdAhXXITQIHY1yB-EQvS4wAXoECAYQEw&rldoc=1&tbs=lrf:!2m1!1e2!3sIAE,lf:1,lf_ui:2#lrd=0x80905179bdeeba05:0xe492765b79dd0f0e,3,,,&rlfi=hd:;si:16470356922505957134;mv:!3m12!1m3!1d32429.09598449403!2d-121.05778790000001!3d37.68687775!2m3!1f0!2f0!3f0!3m2!1i392!2i493!4f13.1;tbs:lrf:!2m1!1e2!3sIAE,lf:1,lf_ui:2" target="_blank"><Img src="https://i.imgur.com/fiABxYH.png" width="300px" height="170px" /></a>
                        <a id="yelpReview" href="https://www.yelp.com/writeareview/biz/q7ImrPf7UA61gH5zFhSrFA?return_url=%2Fbiz%2Fq7ImrPf7UA61gH5zFhSrFA&source=biz_details_war_button" target="_blank"><Img src="https://i.imgur.com/8HgaHs6.png" width="300px" height="170px" /></a>
                        <a id="zillowReview" href="https://www.zillow.com/reviews/write/?s=X1-ZUyzjp1enu0etl_67ces" target="_blank"><Img src="https://i.imgur.com/QQTUlDf.png" width="300px" height="170px" /></a>
                        <a id="realtorReview" href="https://www.realtor.com/realestateagents/daniel-del-real_modesto_ca_1204657_073494348" target="_blank"><Img src="https://i.imgur.com/UYvHAQz.png" width="300px" height="170px" /></a>
                    </div>
                    <br></br>
                    <br></br>

                    <p id="almostDoneParagraph"><i>Thank you for putting your trust in The Del Real Group for your Real Estate needs!</i></p>
                </div>
            );
        } else if (this.props.agent === 'Don') {
            return (
                <div id="reviews">
                    <h1 id="almostDone">Almost done... Only 3 Steps away!</h1>
                    <br></br>
                    <h4 id="step">Step 1:</h4>
                    <h4>Copy your review by selecting the <i>'Copy To Clipboard'</i> button.</h4>
                    <br></br>

                    <h4 id="step">Step 2:</h4>
                    <h4>Click on the website button (Zillow, Yelp, & Google) below.</h4>
                    <br></br>

                    <h4 id="step">Step 3:</h4>
                    <h4>Paste your review into the testimonial box on the review site by pressing CTRL + V on a PC or Command + V on a Mac.</h4>
                    <br></br>
                    <br></br>

                    <h1 id="almostDone">Want more chances to win the $500 VISA Gift Card?</h1>
                    <p id="almostDoneParagraph"><i>We will add an additional entry for you for every review you leave us. For example, if you leave us a review on Zillow, Yelp <br></br>
                    and Google then you will have 3 entries in the drawing. Home Buyers and Sellers want to know which Real Estate agent and <br></br>
                    team offer the best services as well as experience. Your reviews will help us continue to grow our business.</i></p>

                    <div id="reviewsCopyPaste">
                    <textarea className="form-control" id="COPYPASTE" rows="3" value={this.props.bio}required/>
                    <button className="btn btn-primary" onClick={this.copyData}>Copy To Clipboard</button>
                    </div>
                    <br></br>
                    <br></br>
                    <div id="reviewButtons">
                        <a id="googleReview" href="https://www.google.com/search?q=the+del+real+group&ie=utf-8&oe=utf-8&client=firefox-b-1-ab&npsic=0&rflfq=1&rlha=0&rllag=37688080,-121058636,4090&tbm=lcl&rldimm=16470356922505957134&ved=2ahUKEwij5Kim7qbdAhXXITQIHY1yB-EQvS4wAXoECAYQEw&rldoc=1&tbs=lrf:!2m1!1e2!3sIAE,lf:1,lf_ui:2#lrd=0x80905179bdeeba05:0xe492765b79dd0f0e,3,,,&rlfi=hd:;si:16470356922505957134;mv:!3m12!1m3!1d32429.09598449403!2d-121.05778790000001!3d37.68687775!2m3!1f0!2f0!3f0!3m2!1i392!2i493!4f13.1;tbs:lrf:!2m1!1e2!3sIAE,lf:1,lf_ui:2" target="_blank"><Img src="https://i.imgur.com/fiABxYH.png" width="300px" height="170px" /></a>
                        <a id="yelpReview" href="https://www.yelp.com/writeareview/biz/q7ImrPf7UA61gH5zFhSrFA?return_url=%2Fbiz%2Fq7ImrPf7UA61gH5zFhSrFA&source=biz_details_war_button" target="_blank"><Img src="https://i.imgur.com/8HgaHs6.png" width="300px" height="170px" /></a>
                        <a id="zillowReview" href="https://www.zillow.com/reviews/write/?s=X1-ZU11dmxkbycqozt_634pd" target="_blank"><Img src="https://i.imgur.com/QQTUlDf.png" width="300px" height="170px" /></a>
                        <a id="realtorReview" href="https://www.realtor.com/realestateagents/don-wright_modesto_ca_2990901_762044528" target="_blank"><Img src="https://i.imgur.com/UYvHAQz.png" width="300px" height="170px" /></a>
                    </div>
                    <br></br>
                    <br></br>

                    <p id="almostDoneParagraph"><i>Thank you for putting your trust in The Del Real Group for your Real Estate needs!</i></p>
                </div>
            );
        } else if (this.props.agent === 'Carlos') {
            return (
                <div id="reviews">
                    <h1 id="almostDone">Almost done... Only 3 Steps away!</h1>
                    <br></br>
                    <h4 id="step">Step 1:</h4>
                    <h4>Copy your review by selecting the <i>'Copy To Clipboard'</i> button.</h4>
                    <br></br>

                    <h4 id="step">Step 2:</h4>
                    <h4>Click on the website button (Zillow, Yelp, & Google) below.</h4>
                    <br></br>

                    <h4 id="step">Step 3:</h4>
                    <h4>Paste your review into the testimonial box on the review site by pressing CTRL + V on a PC or Command + V on a Mac.</h4>
                    <br></br>
                    <br></br>

                    <h1 id="almostDone">Want more chances to win the $500 VISA Gift Card?</h1>
                    <p id="almostDoneParagraph"><i>We will add an additional entry for you for every review you leave us. For example, if you leave us a review on Zillow, Yelp <br></br>
                    and Google then you will have 3 entries in the drawing. Home Buyers and Sellers want to know which Real Estate agent and <br></br>
                    team offer the best services as well as experience. Your reviews will help us continue to grow our business.</i></p>

                    <div id="reviewsCopyPaste">
                    <textarea className="form-control" id="COPYPASTE" rows="3" value={this.props.bio}required/>
                    <button className="btn btn-primary" onClick={this.copyData}>Copy To Clipboard</button>
                    </div>
                    <br></br>
                    <br></br>
                    <div id="reviewButtons">
                        <a id="googleReview" href="https://www.google.com/search?q=the+del+real+group&ie=utf-8&oe=utf-8&client=firefox-b-1-ab&npsic=0&rflfq=1&rlha=0&rllag=37688080,-121058636,4090&tbm=lcl&rldimm=16470356922505957134&ved=2ahUKEwij5Kim7qbdAhXXITQIHY1yB-EQvS4wAXoECAYQEw&rldoc=1&tbs=lrf:!2m1!1e2!3sIAE,lf:1,lf_ui:2#lrd=0x80905179bdeeba05:0xe492765b79dd0f0e,3,,,&rlfi=hd:;si:16470356922505957134;mv:!3m12!1m3!1d32429.09598449403!2d-121.05778790000001!3d37.68687775!2m3!1f0!2f0!3f0!3m2!1i392!2i493!4f13.1;tbs:lrf:!2m1!1e2!3sIAE,lf:1,lf_ui:2" target="_blank"><Img src="https://i.imgur.com/fiABxYH.png" width="300px" height="170px" /></a>
                        <a id="yelpReview" href="https://www.yelp.com/writeareview/biz/q7ImrPf7UA61gH5zFhSrFA?return_url=%2Fbiz%2Fq7ImrPf7UA61gH5zFhSrFA&source=biz_details_war_button" target="_blank"><Img src="https://i.imgur.com/8HgaHs6.png" width="300px" height="170px" /></a>
                        <a id="zillowReview" href="https://www.zillow.com/reviews/write/?s=X1-ZUzeuvi4q8vpxl_adn9b" target="_blank"><Img src="https://i.imgur.com/QQTUlDf.png" width="300px" height="170px" /></a>
                        <a id="realtorReview" href="https://www.realtor.com/realestateagents/daniel-del-real_modesto_ca_1204657_073494348" target="_blank"><Img src="https://i.imgur.com/UYvHAQz.png" width="300px" height="170px" /></a>
                    </div>
                    <br></br>
                    <br></br>

                    <p id="almostDoneParagraph"><i>Thank you for putting your trust in The Del Real Group for your Real Estate needs!</i></p>
                </div>
            );
        } else if (this.props.agent === 'Patty') {
            return (
                <div id="reviews">
                    <h1 id="almostDone">Almost done... Only 3 Steps away!</h1>
                    <br></br>
                    <h4 id="step">Step 1:</h4>
                    <h4>Copy your review by selecting the <i>'Copy To Clipboard'</i> button.</h4>
                    <br></br>

                    <h4 id="step">Step 2:</h4>
                    <h4>Click on the website button (Zillow, Yelp, & Google) below.</h4>
                    <br></br>

                    <h4 id="step">Step 3:</h4>
                    <h4>Paste your review into the testimonial box on the review site by pressing CTRL + V on a PC or Command + V on a Mac.</h4>
                    <br></br>
                    <br></br>

                    <h1 id="almostDone">Want more chances to win the $500 VISA Gift Card?</h1>
                    <p id="almostDoneParagraph"><i>We will add an additional entry for you for every review you leave us. For example, if you leave us a review on Zillow, Yelp <br></br>
                    and Google then you will have 3 entries in the drawing. Home Buyers and Sellers want to know which Real Estate agent and <br></br>
                    team offer the best services as well as experience. Your reviews will help us continue to grow our business.</i></p>

                    <div id="reviewsCopyPaste">
                    <textarea className="form-control" id="COPYPASTE" rows="3" value={this.props.bio}required/>
                    <button className="btn btn-primary" onClick={this.copyData}>Copy To Clipboard</button>
                    </div>
                    <br></br>
                    <br></br>
                    <div id="reviewButtons">
                        <a id="googleReview" href="https://www.google.com/search?q=the+del+real+group&ie=utf-8&oe=utf-8&client=firefox-b-1-ab&npsic=0&rflfq=1&rlha=0&rllag=37688080,-121058636,4090&tbm=lcl&rldimm=16470356922505957134&ved=2ahUKEwij5Kim7qbdAhXXITQIHY1yB-EQvS4wAXoECAYQEw&rldoc=1&tbs=lrf:!2m1!1e2!3sIAE,lf:1,lf_ui:2#lrd=0x80905179bdeeba05:0xe492765b79dd0f0e,3,,,&rlfi=hd:;si:16470356922505957134;mv:!3m12!1m3!1d32429.09598449403!2d-121.05778790000001!3d37.68687775!2m3!1f0!2f0!3f0!3m2!1i392!2i493!4f13.1;tbs:lrf:!2m1!1e2!3sIAE,lf:1,lf_ui:2" target="_blank"><Img src="https://i.imgur.com/fiABxYH.png" width="300px" height="170px" /></a>
                        <a id="yelpReview" href="https://www.yelp.com/writeareview/biz/q7ImrPf7UA61gH5zFhSrFA?return_url=%2Fbiz%2Fq7ImrPf7UA61gH5zFhSrFA&source=biz_details_war_button" target="_blank"><Img src="https://i.imgur.com/8HgaHs6.png" width="300px" height="170px" /></a>
                        <a id="zillowReview" href="https://www.zillow.com/reviews/write/?s=X1-ZUxlg6yk8n2cy1_9hc6g" target="_blank"><Img src="https://i.imgur.com/QQTUlDf.png" width="300px" height="170px" /></a>
                        <a id="realtorReview" href="https://www.realtor.com/realestateagents/daniel-del-real_modesto_ca_1204657_073494348" target="_blank"><Img src="https://i.imgur.com/UYvHAQz.png" width="300px" height="170px" /></a>
                    </div>
                    <br></br>
                    <br></br>

                    <p id="almostDoneParagraph"><i>Thank you for putting your trust in The Del Real Group for your Real Estate needs!</i></p>
                </div>
            );
        } else if (this.props.agent === 'Amanda') {
            return (
                <div id="reviews">
                    <h1 id="almostDone">Almost done... Only 3 Steps away!</h1>
                    <br></br>
                    <h4 id="step">Step 1:</h4>
                    <h4>Copy your review by selecting the <i>'Copy To Clipboard'</i> button.</h4>
                    <br></br>

                    <h4 id="step">Step 2:</h4>
                    <h4>Click on the website button (Zillow, Yelp, & Google) below.</h4>
                    <br></br>

                    <h4 id="step">Step 3:</h4>
                    <h4>Paste your review into the testimonial box on the review site by pressing CTRL + V on a PC or Command + V on a Mac.</h4>
                    <br></br>
                    <br></br>

                    <h1 id="almostDone">Want more chances to win the $500 VISA Gift Card?</h1>
                    <p id="almostDoneParagraph"><i>We will add an additional entry for you for every review you leave us. For example, if you leave us a review on Zillow, Yelp <br></br>
                    and Google then you will have 3 entries in the drawing. Home Buyers and Sellers want to know which Real Estate agent and <br></br>
                    team offer the best services as well as experience. Your reviews will help us continue to grow our business.</i></p>

                    <div id="reviewsCopyPaste">
                    <textarea className="form-control" id="COPYPASTE" rows="3" value={this.props.bio}required/>
                    <button className="btn btn-primary" onClick={this.copyData}>Copy To Clipboard</button>
                    </div>
                    <br></br>
                    <br></br>
                    <div id="reviewButtons">
                        <a id="googleReview" href="https://www.google.com/search?q=the+del+real+group&ie=utf-8&oe=utf-8&client=firefox-b-1-ab&npsic=0&rflfq=1&rlha=0&rllag=37688080,-121058636,4090&tbm=lcl&rldimm=16470356922505957134&ved=2ahUKEwij5Kim7qbdAhXXITQIHY1yB-EQvS4wAXoECAYQEw&rldoc=1&tbs=lrf:!2m1!1e2!3sIAE,lf:1,lf_ui:2#lrd=0x80905179bdeeba05:0xe492765b79dd0f0e,3,,,&rlfi=hd:;si:16470356922505957134;mv:!3m12!1m3!1d32429.09598449403!2d-121.05778790000001!3d37.68687775!2m3!1f0!2f0!3f0!3m2!1i392!2i493!4f13.1;tbs:lrf:!2m1!1e2!3sIAE,lf:1,lf_ui:2" target="_blank"><Img src="https://i.imgur.com/fiABxYH.png" width="300px" height="170px" /></a>
                        <a id="yelpReview" href="https://www.yelp.com/writeareview/biz/q7ImrPf7UA61gH5zFhSrFA?return_url=%2Fbiz%2Fq7ImrPf7UA61gH5zFhSrFA&source=biz_details_war_button" target="_blank"><Img src="https://i.imgur.com/8HgaHs6.png" width="300px" height="170px" /></a>
                        <a id="zillowReview" href="https://www.zillow.com/reviews/write/?s=X1-ZU116msxtuqr8cp_9fxlz" target="_blank"><Img src="https://i.imgur.com/QQTUlDf.png" width="300px" height="170px" /></a>
                        <a id="realtorReview" href="https://www.realtor.com/realestateagents/daniel-del-real_modesto_ca_1204657_073494348" target="_blank"><Img src="https://i.imgur.com/UYvHAQz.png" width="300px" height="170px" /></a>
                    </div>
                    <br></br>
                    <br></br>

                    <p id="almostDoneParagraph"><i>Thank you for putting your trust in The Del Real Group for your Real Estate needs!</i></p>
                </div>
            );
        } else if (this.props.agent === 'Andy'){
            return (
                <div id="reviews">
                    <h1 id="almostDone">Almost done... Only 3 Steps away!</h1>
                    <br></br>
                    <h4 id="step">Step 1:</h4>
                    <h4>Copy your review by selecting the <i>'Copy To Clipboard'</i> button.</h4>
                    <br></br>

                    <h4 id="step">Step 2:</h4>
                    <h4>Click on the website button (Zillow, Yelp, & Google) below.</h4>
                    <br></br>

                    <h4 id="step">Step 3:</h4>
                    <h4>Paste your review into the testimonial box on the review site by pressing CTRL + V on a PC or Command + V on a Mac.</h4>
                    <br></br>
                    <br></br>

                    <h1 id="almostDone">Want more chances to win the $500 VISA Gift Card?</h1>
                    <p id="almostDoneParagraph"><i>We will add an additional entry for you for every review you leave us. For example, if you leave us a review on Zillow, Yelp <br></br>
                    and Google then you will have 3 entries in the drawing. Home Buyers and Sellers want to know which Real Estate agent and <br></br>
                    team offer the best services as well as experience. Your reviews will help us continue to grow our business.</i></p>

                    <div id="reviewsCopyPaste">
                    <textarea className="form-control" id="COPYPASTE" rows="3" value={this.props.bio}required/>
                    <button className="btn btn-primary" onClick={this.copyData}>Copy To Clipboard</button>
                    </div>
                    <br></br>
                    <br></br>
                    <div id="reviewButtons">
                        <a id="googleReview" href="https://www.google.com/search?q=the+del+real+group&ie=utf-8&oe=utf-8&client=firefox-b-1-ab&npsic=0&rflfq=1&rlha=0&rllag=37688080,-121058636,4090&tbm=lcl&rldimm=16470356922505957134&ved=2ahUKEwij5Kim7qbdAhXXITQIHY1yB-EQvS4wAXoECAYQEw&rldoc=1&tbs=lrf:!2m1!1e2!3sIAE,lf:1,lf_ui:2#lrd=0x80905179bdeeba05:0xe492765b79dd0f0e,3,,,&rlfi=hd:;si:16470356922505957134;mv:!3m12!1m3!1d32429.09598449403!2d-121.05778790000001!3d37.68687775!2m3!1f0!2f0!3f0!3m2!1i392!2i493!4f13.1;tbs:lrf:!2m1!1e2!3sIAE,lf:1,lf_ui:2" target="_blank"><Img src="https://i.imgur.com/fiABxYH.png" width="300px" height="170px" /></a>
                        <a id="yelpReview" href="https://www.yelp.com/writeareview/biz/q7ImrPf7UA61gH5zFhSrFA?return_url=%2Fbiz%2Fq7ImrPf7UA61gH5zFhSrFA&source=biz_details_war_button" target="_blank"><Img src="https://i.imgur.com/8HgaHs6.png" width="300px" height="170px" /></a>
                        <a id="zillowReview" href="https://www.zillow.com/reviews/write/?s=X1-ZUz7w40pq8jcax_4lr3f" target="_blank"><Img src="https://i.imgur.com/QQTUlDf.png" width="300px" height="170px" /></a>
                        <a id="realtorReview" href="https://www.realtor.com/realestateagents/indalecio-del-real_modesto_ca_1680134_681144528" target="_blank"><Img src="https://i.imgur.com/UYvHAQz.png" width="300px" height="170px" /></a>
                    </div>
                    <br></br>
                    <br></br>

                    <p id="almostDoneParagraph"><i>Thank you for putting your trust in The Del Real Group for your Real Estate needs!</i></p>
                </div>
            );
        } else {
            console.log('oops')
        }
    };
};

export default Reviews;