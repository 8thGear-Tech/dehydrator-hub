import React from 'react'
import { Row, Col } from 'react-bootstrap'

const Footer = () => {
  return (
    <div className='' style={{background:'#000000'}}>
        <Row className='px-3 px-md-5 py-3 py-md-5'  style={{borderBottom:'1px solid #ffffff'}}>
            <Col xs={6} md={4} className='d-flex flex-column gap-3 text-white pe-3 mb-3'>
            <h2 className='text-white' style={{fontSize:'700'}}>LOGO</h2>
            <h6 className='text-white'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </h6>
            <h6 className='text-white'>@Company.com</h6>
            </Col>
            <Col xs={6} md={2} className='mb-3'>
                <h6 className='mb-3 text-white' style={{fontWeight:'600'}}>About us</h6>
                <div className='d-flex flex-column gap-1'>
                <h6 className='text-white'>Company</h6>
                <h6 className='text-white'>Portfolio</h6>
                <h6 className='text-white'>Careers</h6>
                <h6 className='text-white'>Contact us</h6>
                </div>
                
            </Col>
            <Col xs={6} md={4} className='d-flex flex-column gap-3 pe-3 mb-3'>
            <h6 className='text-white' style={{fontWeight:'600'}}>Contact us</h6>
            <h6 className='text-white'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </h6>
            <h6 className='text-white'>+9000 0000 000</h6>
            </Col>
            <Col xs={6} md={2} className='d-flex align-items-end gap-3 mb-3'>
                
                <i className='bi bi-facebook px-1' style={{background:'#fff', borderRadius:'50%'}}></i>
                <i className='bi bi-instagram px-1' style={{background:'#fff', borderRadius:'50%'}}></i>
                <i className='bi bi-twitter px-1' style={{background:'#fff', borderRadius:'50%'}}></i>
                <i className='bi bi-linkedin px-1' style={{background:'#fff', borderRadius:'50%'}}></i>
            </Col>
        </Row>
        <div  className='py-3 text-center text-white' style={{fontSize:'13px'}}> Copyright &copy; 2021 Company All rights Received</div>
      
    </div>
  )
}

export default Footer
