import {useEffect} from 'react';
import { Container, Row, Col } from 'react-bootstrap'
import image from '../../../../assets/images/theme/01/bg-01.png'
import record from '../../../../assets/images/Record.png';
import Snowfall from 'react-snowfall' 
import AOS from "aos";
import "aos/dist/aos.css";
import { Link, animateScroll as scroll } from "react-scroll";

const CoverView = (props) => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  
  return (
    <>
    {props.Header}
    <Col ref={props.myRef1} xs={12} className="d-flex justify-content-center align-items-start h-100" style={{position:'relative', height: '94%', backgroundImage: `url(${image})`, backgroundRepeat: 'no-repeat', backgroundSize: '100% 100%', overflow: 'auto ' }}>
   <Row className="h-100 w-100 " data-aos={props.vis == true ? "fade-right" : "fade-right"}>
      
        <Col xs={12} className="h-100 w-100 d-flex flex-column justify-content-start align-items-center">
        <Snowfall snowflakeCount={20} />
          <Row className="d-flex flex-column flex-2 align-items-center h-100 w-100 ">
            <Col className="d-flex flex-column flex-1 justify-content-center pt-5 ">
            <span data-aos="fade-up" className="wedding-of">THE WEDDING OF</span>
            </Col>
            <Col xs={10} className="d-flex flex-column flex-2 justify-content-end align-items-start">
              <span className="name-of">ISTI</span>
            </Col>
            <Col xs={10} className="d-flex flex-column flex-2 justify-content-center align-items-center ">
              <span className="name-of">&</span>
            </Col>
            <Col xs={10} className="d-flex flex-column flex-2 justify-content-start align-items-end">
              <span className="name-of">AGUNG</span>
            </Col>
            <Col className="d-flex flex-column flex-2 justify-content-end  pb-5">
              <center><small >JAKARTA - MINGGU  8 AGUSTUS 2021</small></center>
            </Col>
            <Col className="d-flex flex-column flex-2 justify-content-start align-items-center">
              <button className="custom-button" style={{ width: '80%' }} > <img style={{ width: '10%' }} src={record} /> LIHAT SEMUA LIVE STREAM</button>
            </Col>
          </Row>
        </Col>
      </Row>
    </Col>
    </>

  );
}

export default CoverView;