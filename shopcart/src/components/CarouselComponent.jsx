import React from 'react'
import Carousel from 'react-bootstrap/Carousel'

export default function CarouselComponent() {
    return (
        <div className="container">
        <Carousel interval={1000}>
            <Carousel.Item interval={500}>
                <img
                className="d-block w-100"
                src="/assests/images/ad8.png"
                alt="Super Sale"
                height="500"
                />
                <Carousel.Caption>
                <h3>Amazing deals</h3>
                <p>Enhance the power of listening</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={500}>
                <img
                className="d-block w-100"
                src="/assests/images/ad6.jpg"
                alt="Second slide"
                height="500"
                />
                <Carousel.Caption>
                <h3>Super Exciting</h3>
                <p>Worth a deal</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={500}>
                <img
                className="d-block w-100"
                src="/assests/images/ad3.jpg"
                alt="Third slide"
                height="500"
                />
                <Carousel.Caption>
                <h3>Mind Blowing Sale</h3>
                <p>Worth a deal</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={500}>
                <img
                className="d-block w-100"
                src="/assests/images/ad4.jpg"
                alt="Third slide"
                height="500"

                />
                <Carousel.Caption>
                <h3>Mind Blowing Sale</h3>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={500}>
                <img
                className="d-block w-100"
                src="/assests/images/ad1.jpg"
                alt="Third slide"
                height="500"

                />
                <Carousel.Caption>
                <h3>Mind Blowing Sale</h3>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
            </Carousel.Item >
            <Carousel.Item interval={500}>
                <img
                className="d-block w-100"
                src="/assests/images/ad2.jpg"
                alt="Third slide"
                height="500"

                />
                <Carousel.Caption>
                <h3>Mind Blowing Sale</h3>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={500}>
                <img
                className="d-block w-100"
                src="/assests/images/ad7.jpg"
                alt="Third slide"
                height="500"

                />
                <Carousel.Caption>
                <h3>Mind Blowing Sale</h3>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={500}>
                <img
                className="d-block w-100"
                src="/assests/images/ad5.jpg"
                alt="Third slide"
                height="500"

                
                />
                <Carousel.Caption>
                <h3>Mind Blowing Sale</h3>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
        </div>
    )
}
