import React from 'react';
import { Button, Container, Form } from 'react-bootstrap';

const About = () => {
    return (
        <div>
            <Container>

                <h1 className="fw-bold">About us</h1>

                <div className="row py-5">
                    <div className="col-12 col-md-4">
                        <h5>Trip emmergency</h5>
                        <p>We are a network of physicians and Allied Health Professionals working together to provide the public with current, comprehensive medical information, written in easy to understand language. Our role is that of educator. To learn more about MedicineNet, Inc., please visit our About Us section.</p>
                    </div>
                    <div className="col-12 col-md-4">
                        <img className="w-100" src="https://tourtoday.com.bd/wp-content/uploads/2017/07/Lalakhal-most-attractive-tourist-spot-in-sylhet.jpg" alt="" />
                    </div>
                    <div className="col-12 col-md-4">
                        <h5>Corrections Policy</h5>
                        <p>MedicineNet.com, a WebMD Company, is committed to making corrections or clarifications to original content when it deems necessary. We take prompt action to edit even minor errors like spelling, grammar, or stylistic changes. Because style changes do not change the meaning of the content, those kinds of "style" changes will be updated on our site without notice.</p>
                    </div>
                </div>
            </Container>
            <div className="bg-img">
                <Container>
                <div className="py-5">
                    <h3 className="text-warning">TRIP WORLD and part of the WebMD Network</h3>
                    <p className="text-danger">Trip world is a rapidly-growing global online travel agency, Trip.com is here to help you plan the perfect trip. Whether you're going on holiday, taking a business trip, or looking to set up a corporate travel account, Trip.com is here to help you travel the world with cheap flights, discount hotels, and train tickets. Looking to find great travel deals or enjoy the biggest savings on your next trip? Trip.com has you covered. With our easy-to-use website and app, along with 24-hour customer service, booking your next trip couldn't be simpler. With Trip.com, quality travel services in over a dozen languages including English, Mandarin, Cantonese, Japanese, Korean, German, French, and Spanish are just a call—or click—away.Easily Customize Your Trip with the Best Hotel and Flight Deals
                    It's easy to customize your travel experience with our robust flight and hotel search filter options and Trip.com travel tools like flight fare alerts, deal-finder calendar, and early bird deals. Trip.com's secure payment system takes the stress out of travel by providing easy payment options, including credit and debit cards, and UnionPay.Featured Hotel DestinationsHotels in Shanghai</p>
                </div>
                </Container>
            </div>
            <Container>
                <div className="row py-5">
                    <div className="col-12 col-md-8">
                        <h3>Corrections Policy</h3>
                        <p className="jstfy">MedicineNet.com, a WebMD Company, is committed to making corrections or clarifications to original content when it deems necessary. We take prompt action to edit even minor errors like spelling, grammar, or stylistic changes. Because style changes do not change the meaning of the content, those kinds of "style" changes will be updated on our site without notice.

                        If we identify errors that are material to the content, we will update the content and note those corrections on this page for sixty (60) days after the correction by linking to the corrected version of the original article and note the correction here for your reference. This corrections policy only applies to MedicineNet.com original content, including, but not limited to, news, feature articles, or original medical reference material. Any corrections to licensed or third party content are the responsibility of the publisher.

                        If you believe you have found an error in any of our content, let us know by sending an email to our Customer Service team using the "Contact Us" links in the footer section of our Site.</p>
                    </div>
                    <div className="col-12 col-md-4">
                        <h4>Editorial Policy</h4>
                        <p className="text-primary">MedicineNet.com is an Internet site designed to provide educational health information for the general public. The aim of MedicineNet.com is to ensure that this information is reliable, integrated, and easy to access, read, and understand. MedicineNet.com's health information, or content, intended to provide the viewer with a better understanding of health issues.</p>
                    </div>
                </div>
                
            </Container>
        </div>
    );
};

export default About;