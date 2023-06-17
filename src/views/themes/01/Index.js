import * as React from 'react';
import {Container,Row,Col} from 'react-bootstrap'
import BottomNavigationBar from '../../../components/BottomNavigationBar';
import Aos from "aos";
import "aos/dist/aos.css";
import CoverView from './tabs/CoverView';
import BridgeRoom from './tabs/BridgeRoom';
import image02 from '../../../assets/images/theme/01/bg-02.png'
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';

export default function Index(){
  const myRef1 = React.useRef(null);
  const myRef2 = React.useRef(null);
  const myRef3 = React.useRef(null);
  const myRef4 = React.useRef(null);
  const myRef5 = React.useRef(null);
  // const executeScroll1 = () => myRef1.current.scrollIntoView();
  const [vis,setVis] = React.useState(false);  
  console.log('vis',vis)
  React.useEffect(()=>{
    // executeScroll1();
    const observer = new IntersectionObserver((entries)=>{
      const entry =  entries[0];
      setVis(entry.isIntersecting)   
     
    })
    observer.observe(myRef1.current) 
    console.log(myRef1.current) 
    console.log(myRef2.current)   
  },[])

  return(
    <div className="box-content">
      
       <ContentMobile vis={vis} myRef1={myRef1} myRef2={myRef2} myRef3={myRef3} myRef4={myRef4} myRef5={myRef5}>
       <Navbar/>
        </ContentMobile>
       <ContentDesktop/>
      
       <div className="mobile" style={{background:'white',height:'6%'}}>
        <BottomNavigationBar myRef1={myRef1} myRef2={myRef2} myRef3={myRef3} myRef4={myRef4} myRef5={myRef5}/>
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
          <Container  className="front-bg-desktop-box" style={{backgroundImage:`url(${image02})`,backgroundRepeat:'no-repeat'}}>
          <Row>
            <Col> ok</Col>        
          </Row>
        </Container>
        </Col>
      </Row>
    </Container>
  )
}

function ContentMobile(props){    
  React.useEffect(()=>{
    Aos.init({ duration: 1000 });
    console.log('vis1',props.vis)
  })
  return(
    <Container fluid className="front-bg-mobile">    
    <Row className="d-flex flex-row justify-content-center h-100">
      <CoverView Header={props.children} myRef1={props.myRef1} />
      <BridgeRoom myRef2={props.myRef2}/>
      <MapsView myRef3={props.myRef3} />
      <MomentsView myRef4={props.myRef4} />
      <MoreView myRef5={props.myRef5} />    

    </Row> 
  </Container>

  )
}


const MapsView = (props)=>{
  return(
    <Col  ref={props.myRef3} xs={12} className="d-flex justify-content-center align-items-center h-100" style={{height:'94%',backgroundImage:`url(${image02})`,backgroundRepeat:'no-repeat',backgroundSize:'100% 100%',overflow:'auto '}}>               
       <Row className="justify-content-center">
          <Col xs={8}>
            <center><p className="text-white" style={{fontFamily:'Quicksand,sans-serif',fontStyle:'italic'}}>3Dalam upaya mengurangi penyebaran Covid 19 pada masa pandemi, kami harapkan kedatangan para tamu undangan agar menjalankan protokol yang berlaku.</p></center>            
           
          </Col>
        </Row>         
      </Col>       
  );
}

const MomentsView = (props)=>{
  return(
    <Col  ref={props.myRef4} xs={12} className="d-flex justify-content-center align-items-center h-100" style={{height:'94%',backgroundImage:`url(${image02})`,backgroundRepeat:'no-repeat',backgroundSize:'100% 100%',overflow:'auto '}}>               
       <Row className="justify-content-center">
          <Col xs={8}>
            <center><p className="text-white" style={{fontFamily:'Quicksand,sans-serif',fontStyle:'italic'}}>4Dalam upaya mengurangi penyebaran Covid 19 pada masa pandemi, kami harapkan kedatangan para tamu undangan agar menjalankan protokol yang berlaku.</p></center>            
           
          </Col>
        </Row>         
      </Col>       
  );
}

const MoreView = (props)=>{
  return(
    <Col  ref={props.myRef5} xs={12} className="d-flex justify-content-center align-items-center h-100" style={{height:'94%',backgroundImage:`url(${image02})`,backgroundRepeat:'no-repeat',backgroundSize:'100% 100%',overflow:'auto '}}>               
    <Row className="justify-content-center">
       <Col xs={8}>
         <center><p className="text-white" style={{fontFamily:'Quicksand,sans-serif',fontStyle:'italic'}}>5Dalam upaya mengurangi penyebaran Covid 19 pada masa pandemi, kami harapkan kedatangan para tamu undangan agar menjalankan protokol yang berlaku.</p></center>                        
       </Col>
     </Row>         
   </Col> 
  
  )
}

function Navbar(){
  return(
    <Row >
      <Col style={{color:'white',background:'black',lineHeight:'50px',position:'fixed',zIndex:10000}}>
      MNTN
      </Col>
    </Row>
  )
}