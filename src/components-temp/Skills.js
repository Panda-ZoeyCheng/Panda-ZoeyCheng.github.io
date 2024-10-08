import { Container, Row, Col } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import colorSharp from "../assets/img/color-sharp.png";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="skill" id="skills">
      <Container>
        <Row>
          <Col>
            <div className="skill-bx wow zoomIn">
              <h2>Skills</h2>
              <p>
                This is a sentence.<br></br> This is a sentence.<br></br> This
                is a sentence.<br></br>
              </p>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="owl-carousel owl-theme skill-slider"
              >
                <div className="item">
                  <img src={meter1} alt="Software Development" />
                  <h5>Software Development</h5>
                </div>
                <div className="item">
                  <img src={meter2} alt="Data Engineering" />
                  <h5>Data Engineering</h5>
                </div>
                <div className="item">
                  <img src={meter2} alt="Cloud Computing" />
                  <h5>Cloud Computing</h5>
                </div>
                <div className="item">
                  <img src={meter1} alt="API Integration" />
                  <h5>API Integration</h5>
                </div>
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
      <img className="background-image-left" src={colorSharp} alt="img" />
    </section>
  );
};
