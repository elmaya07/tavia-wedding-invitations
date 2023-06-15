import * as React from 'react';
import {Container,Row,Col} from 'react-bootstrap'
import BottomNavigationBar from '../../../components/BottomNavigationBar';
import image from '../../../assets/images/theme/01/bg-01.png'

export default function Index(){
  return(
    <div className="box-content">
       <ContentMobile/>
       <ContentDesktop/>
       <div class="mobile" style={{background:'green',height:'6%'}}>
        <BottomNavigationBar/>
        </div>
    </div>
  )
}

function ContentDesktop(){
  return(
    <Container fluid className="front-bg-desktop"   >
      <Row style={{height:'100%'}}>
        <Col lg={9}>test</Col>
        <Col lg={3} >

          <Container  className="front-bg-desktop-box" style={{backgroundImage:`url(${image})`,backgroundRepeat:'no-repeat'}}>
          <Row>
            <Col> ok</Col>        
          </Row>
        </Container>

        </Col>
      </Row>
    </Container>

  )
}

function ContentMobile(){
  return(
    <Container fluid className="front-bg-mobile" style={{height:'94%',backgroundImage:`url(${image})`,backgroundRepeat:'no-repeat'}}>
    <Row>
      <Col></Col>        
    </Row>
  </Container>

  )
}
 