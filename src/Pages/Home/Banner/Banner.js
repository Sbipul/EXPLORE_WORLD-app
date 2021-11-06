import React from 'react';
import { Carousel } from 'react-bootstrap';

const Banner = () => {
    return (
        <div>
                <Carousel fade>
                    <Carousel.Item className="position-relative">
                        <img
                        style={{height:'75vh',objectFit:'cover'}}
                        className="d-block w-100"
                        src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg"
                        alt="First slide"
                        />
                        <Carousel.Caption className="position-absolute top-50">
                        <h3 className="text-primary" style={{fontSize:'60px',fontFamily:"'Oswald', sans-serif"}}>TRAVELL TO EXPLORE</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item className="position-relative">
                        <img
                        style={{height:'75vh',objectFit:'cover'}}
                        className="d-block w-100"
                        src="https://t3.ftcdn.net/jpg/02/90/05/50/360_F_290055018_wlqdL0vQ6bJ2wijZCc33xjLUq3zQsuSf.jpg"
                        alt="Second slide"
                        />

                        <Carousel.Caption className="position-absolute top-50">
                        <h3 className="text-danger" style={{fontSize:'60px',fontFamily:"'Oswald', sans-serif"}}>TRAVELL WITH FRIENDS</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item className="position-relative">
                        <img
                        style={{height:'75vh',objectFit:'cover'}}
                        className="d-block w-100"
                        src="https://images.unsplash.com/photo-1503220317375-aaad61436b1b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTF8fHxlbnwwfHx8fA%3D%3D&w=1000&q=80"
                        alt="Third slide"
                        />

                        <Carousel.Caption className="position-absolute top-50">
                        <h3 className="text-warning" style={{fontSize:'60px',fontFamily:"'Oswald', sans-serif"}}>TRAVELL FOR HAPPINESS</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
        </div>
    );
};

export default Banner;