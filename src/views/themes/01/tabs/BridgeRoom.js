import { Container, Row, Col } from 'react-bootstrap'
import image02 from '../../../../assets/images/theme/01/bg-02.png'
import female from '../../../../assets/images/api/female.png'
import male from '../../../../assets/images/api/male.png'
import { Link, animateScroll as scroll } from "react-scroll";
import React, { useEffect } from "react";

const BridgeRoom = (props) => {

  return (
    <Col ref={props.myRef2} xs={12} className="d-flex justify-content-center align-items-center h-100" style={{ height: '94%', backgroundImage: `url(${image02})`, backgroundRepeat: 'no-repeat', backgroundSize: '100% 100%', overflow: 'auto ' }}>
      <Link
        activeClass="active"
        to="section1"
        spy={true}
        smooth={true}
        offset={-70}
        duration={4000}
      >
        <Row className="d-flex justify-content-center h-100 w-100">
          <Col xs={8} className="w-100">
            <Row className="d-flex flex-column justify-content-center align-items-center">
              <Col xs={12} className="pt-3">
                <center><span style={{ color: 'grey' }}>BISMILLAHHIRRAHMANIRRAHIM</span></center>

              </Col>
              <Col xs={12} className="mt-1">
                <center>
                  <small style={{ color: "grey", fontSize: '12px' }}>Assalamu`alaikum Warahmatullahi Wabarakatuh</small>
                </center>
              </Col>

              <Col xs={12} className="mt-1" style={{ lineHeight: '18px' }}>
                <center>
                  <small style={{ fontFamily: 'Poppins', fontStyle: 'normal', color: 'grey', fontSize: '12px' }}>Dengan memohon rahmat dan ridho Allah Subhanahu Wa Ta'ala, izinkan kami mengundang Bapak/Ibu/Saudara(i) untuk menghadiri acara pernikahan putra-putri kami</small>
                </center>
              </Col>
              <Col xs={12} className="pt-4">
                <Row className="d-flex flex-row justfy-content-start ">
                  <Col xs={4} className="" >
                    <img src={female} className="foto-wedding" />
                  </Col>
                  <Col xs={8} className="" style={{ lineHeight: '19px' }} >
                    <b style={{ fontFamily: 'Tangerine,cursive', fontSize: '27px', color: 'grey' }}>Isti Latifah</b>
                    <div><small style={{ color: 'grey' }}>Putri Dari</small></div>
                    <div><b style={{ color: 'grey', fontSize: '12px' }}>Bapak (Alm) H.Soleman &</b></div>
                    <b style={{ color: 'grey', fontSize: '12px' }}>Ibu (Almh) Hj.Sumyati</b>
                  </Col>
                </Row>
              </Col>
              <Col className="mt-2 mb-2">
                <center>
                  <b style={{ fontFamily: 'Tangerine,cursive', fontSize: '25px', color: 'white' }}>Dengan</b>
                </center>
              </Col>
              <Col xs={12} className="pt-3 pb-3" style={{ borderBottom: '3px dotted white' }}>
                <Row className="d-flex flex-row justfy-content-start ">

                  <Col xs={8} className="" style={{ lineHeight: '19px' }} >
                    <div style={{ textAlign: 'right' }}>
                      <b style={{ fontFamily: 'Tangerine,cursive', fontSize: '27px', color: 'white' }}>Agung Tri Laksono</b>
                      <div><small style={{ color: 'white' }}>Putra Dari</small></div>
                      <div><b style={{ color: 'white', fontSize: '12px' }}>Bapak Sumardi &</b></div>
                      <b style={{ color: 'white', fontSize: '12px' }}>Ibu Suryanih </b>
                    </div>
                  </Col>

                  <Col xs={4} className="" >
                    <img src={male} className="foto-wedding" />
                  </Col>
                </Row>
              </Col>
            </Row>

          </Col>

        </Row>
      </Link>
    </Col>
  );
}

export default BridgeRoom;