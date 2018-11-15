import React from 'react';
import { Carousel } from 'react-bootstrap';

class Slideshow extends React.Component {
  render() {
    return (
      <div className="carousel-container">
        <Carousel>
          <Carousel.Item>
            <img width={900} height={300} alt="900x300" src="https://s3.amazonaws.com/rugbyscout-two/slideshow/590abead6185c+Cropped+Cropped.jpg" />
            <Carousel.Caption>
              <h5>Logon</h5>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img width={900} height={300} alt="900x300" src="https://s3.amazonaws.com/rugbyscout-two/slideshow/AUS-rugby-team-+Cropped.jpg" />
            <Carousel.Caption>
              <h5>Upload Stats</h5>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img width={900} height={300} alt="900x300" src="https://s3.amazonaws.com/rugbyscout-two/slideshow/foleytry+Cropped.jpg" />
            <Carousel.Caption>
              <h5>Post</h5>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img width={900} height={300} alt="900x300" src="https://s3.amazonaws.com/rugbyscout-two/slideshow/fijirugbycheer+Cropped.jpg" />
            <Carousel.Caption>
              <h5>Recruit your team</h5>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    );
  }
}

export default Slideshow;