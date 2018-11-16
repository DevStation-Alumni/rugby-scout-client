import React from 'react';
import { Carousel } from 'react-bootstrap';

class Slideshow extends React.Component {
  render() {
    return (
      <div className="carousel-container">
        <Carousel indicators="false">
          <Carousel.Item>
            <img width={900} height={300} alt="900x300" src="https://s3.amazonaws.com/rugbyscout-two/slideshow/590abead6185c+Cropped+Cropped.jpg" />

          </Carousel.Item>
          <Carousel.Item>
            <img width={900} height={300} alt="900x300" src="https://s3.amazonaws.com/rugbyscout-two/slideshow/AUS-rugby-team-+Cropped.jpg" />
          </Carousel.Item>
          <Carousel.Item>
            <img width={900} height={300} alt="900x300" src="https://s3.amazonaws.com/rugbyscout-two/slideshow/foleytry+Cropped.jpg" />
          </Carousel.Item>
          <Carousel.Item>
            <img width={900} height={300} alt="900x300" src="https://s3.amazonaws.com/rugbyscout-two/slideshow/fijirugbycheer+Cropped.jpg" />
          </Carousel.Item>
        </Carousel>
      </div>
    );
  }
}

export default Slideshow;