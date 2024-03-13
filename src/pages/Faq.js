import React, { useState } from 'react'
import GuestNavbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer'
import { NavLink } from 'react-router-dom'
import {FaFacebook, FaInstagram, FaTwitter, FaLinkedin, FaPhoneVolume} from 'react-icons/fa'
import { Card, Row, Col, Button , Form, Accordion} from 'react-bootstrap'
import line1 from '../assets/images/line1.svg'
import line2 from '../assets/images/line2.svg'
import arrowDown from '../assets/images/arrow-down.svg'
import arrowRight from '../assets/images/arrow-right.svg'
import { allFAQ } from '../data'



const FAQ = () => {
  const [activeKey, setActiveKey] = useState(null);
  const [faqs, setFaqs] = useState(allFAQ);

  const toggleActiveKey = (key) => {
    setActiveKey(activeKey === key ? null : key);
  };

  return (
    <div>
      <GuestNavbar/>
      <div className='py-5 px-3 px-md-5 m-lg-5'>
        <div className='d-flex flex-column gap-3 gap-lg-4 justify-content-md-center align-items-center mb-lg-5 '>
        <div className="d-flex gap-2 align-items-center about justify-content-md-center" >  
    <NavLink className='nav-link' activeclassname='active'  to="/">Home</NavLink>
    <i className="bi bi-chevron-right" style={{fontSize:'0.8rem'}}></i>
        <NavLink activeclassname='active' className='nav-link'  to="/faq">FAQ </NavLink>
        </div>
        <h2>Lorem Ipsum is simply dummy text of the printing and.</h2>
        <h6 style={{color:'#898989'}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </h6>
        </div>
      
      

      </div>
      <section style={{backgroundColor:'#F5F5F5'}} className='position-relative px-xl-5 py-3'>
       
        <div className='py-5 px-4 px-lg-5 position-relative mx-xl-5'>
        <img  src={line1} alt='line' className='d-none d-md-flex position-absolute' style={{top:'-4.5%', left:"-9%"}}/>
        <img  src={line2} alt='line' className='d-none d-md-flex  position-absolute' style={{bottom:'-3%', left:"-9%"}}/>
        <div className='mx-xl-5 px-xl-5'>
        <Accordion className='gap-3 z-0' defaultActiveKey={activeKey}>
      {faqs.map((faq, index) => (
        <Accordion.Item eventKey={String(index)} key={faq.id} className='mb-4' style={{border:'none', borderRadius:'15px'}}>
          <Accordion.Header onClick={() => toggleActiveKey(String(index))} style={{ alignItems: 'center', display: 'flex', cursor:'pointer',position:'relative' }}> 
          
              <img  className='arrows'
              src={activeKey === String(index) ? arrowDown : arrowRight}
              alt="Toggle Icon"
              style={{ position:'absolute', zIndex:'3'}} 
            />
            {faq.title}
          </Accordion.Header>
          <Accordion.Body style={{color:'#898989'}} className=''>
            {faq.description}
          </Accordion.Body>
        </Accordion.Item>
      ))}
    </Accordion>
        </div>
    </div>
        </section>

      <section className='my-3 my-md-5 p-3 p-md-5 mx-2 mx-lg-4' >
          <h1 className='my-4'>Lorem Ipsum</h1>
          <h6>Lorem Ipsum is simply dummy text of the printing and typesetting <br/> industry. </h6>
          <Card className='border-0 my-3' style={{background:'#000000', borderRadius:'15px'}}>
            

            <Row className='px-3 py-5 px-md-5 align-items-center'>
              
              <Col xs={12} md={7} className='mb-3' >
                <h2 className='mb-3 text-white'>Stay in the loop</h2>
                <h5 className='text-white' style={{fontWeight:'400'}}>Subscribe to receive the latest news and updates about TDA. </h5>
<h5 className='text-white' style={{fontWeight:'400'}}>
We promise not to spam you! </h5>
              </Col>
              <Col xs={12} md={5}>
                <Card className=' border-0 p-2 bg-white' >
                  <div className="d-flex ">  <input className='border-0 bg-white w-100' placeholder='Enter email address' type='text'/>
              
              <Button className='btn-primary'>Continue</Button>
              </div>
            
              
              </Card>
              </Col>
              
            </Row>
          </Card>
        </section>
      
      <Footer/>
      
    </div>
  )
}

export default FAQ
