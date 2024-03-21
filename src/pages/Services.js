import React from 'react'
import { millableProducts, hydrationProducts, dehydrationMachine, processingRates, oilExtraction } from '../data'
import hero1 from '../assets/images/home-hero-section.png'
import hero2 from '../assets/images/home-hero-section-2.png'

import GuestNavbar from '../components/Navbar/Navbar'
import { Button, Card, Col, Row } from 'react-bootstrap'
import Footer from '../components/Footer'
import SidebarNavbar from '../components/Navbar/SideNavbar'
import { ServicesNavbar } from '../components/Navbar/SideNavbar'
import { useNavigate } from 'react-router-dom'

import { GoogleMap, LoadScript } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '355px'
};

const center = {
  lat: 9.0820,
  lng: 8.6753
};
const options = {
  restriction: {
    latLngBounds: {
      north: 13.885645, // Northernmost point of Nigeria
      south: 4.277144, // Southernmost point of Nigeria
      east: 14.680073, // Easternmost point of Nigeria
      west: 2.668432, // Westernmost point of Nigeria
    },
    strictBounds: true,
  },
};

const Services = () => {
  const navigate = useNavigate();
  function handleProductClick(productId, category) {
  console.log(category, productId);
    navigate(`/product/${category}-${productId}`);
  }
  
  return (
    <div>
      <GuestNavbar/>
      <div className='d-flex d-md-none'>
            <ServicesNavbar/>
            </div>
      <div className='px-3 px-md-5 mx-lg-4'>
        <section className='my-3 my-md-5'>
          <Row>
            <Col md={3}>
              <div className='d-none d-md-block'>
            <SidebarNavbar/>
            </div>
            </Col>
            <Col xs={12} md={9}>
            <Card className='border-0 mb-5'>
            <Card.Img src={hero1} alt='hero1' style={{height:'380px'}}/>

            <Card.ImgOverlay className='px-3 py-5 px-md-5'>
              <h3>Lets process your produce and</h3>
              <h1>convert them into valuable products</h1>
              <Button variant='light' className='my-4 px-3'> Learn more</Button>

            </Card.ImgOverlay>
          </Card>
            </Col>
          </Row>
         
        </section>
        <div data-bs-spy="scroll" data-bs-target="#navbar-example2" data-bs-root-margin="0px 0px -40%" data-bs-smooth-scroll="true" className="scrollspy-example " tabIndex="0">
        <div>
        <h2>Produce we process</h2>
       
        <section className='my-3 my-md-5'>
          <div className='my-4'>
          <p className= 'py-2 px-1 align-items-center text-center' style={{backgroundColor:'rgba(176, 0, 220, 0.11)', color:'#B000DC', padding:'6px, 14px, 6px, 14px', borderRadius:'8px', width:'150px'}} id="scrollspyHeading1">Prepping and Milling</p>
          </div>
          <Row>
          {millableProducts.map((product)=>(
            <Col xs={6} md={3} key={product.id} className='mb-3'>
              <Card style={{borderRadius:'16px'}} onClick={() => handleProductClick(product?.id, 'millable')} className='h-100'>
                <div className='p-2 p-md-4' style={{borderBottom:'1px solid #dfdcdc'}}>
                  <Card.Img src={product.productImage} />
                </div>
                <Card.Body className='py-2'>
                  <div className='d-flex flex-wrap'>
                    
                      <h5 style={{color:'#1C1C1C'}}>{product.productName}</h5>
                    </div>
                   
                  
                  
                  

                </Card.Body>
              </Card>
            </Col>
          ))}
          </Row>
          <div className='text-center mt-3 mb-5'>
            <Button className='btn-primary ' style={{width:'230px'}} onClick={()=> navigate('/form/produce')}>Request Service</Button>
          </div>
        </section>
        <section className='my-3 my-md-5'>
        <div>
          <p className='p-2 align-items-center text-center my-4' style={{backgroundColor:'rgba(176, 0, 220, 0.11)', color:'#B000DC', padding:'6px, 14px, 6px, 14px', borderRadius:'8px', width:'100px'}} id="scrollspyHeading2">Drying</p>
          </div>
          <Row>
          {hydrationProducts.map((product)=>(
            <Col xs={6} md={3} key={product.id} className='mb-3'>
              <Card style={{borderRadius:'16px'}} onClick={() => handleProductClick(product?.id, 'hydration')} className='h-100'> 
                <div className='p-2 p-md-4' style={{borderBottom:'1px solid #dfdcdc'}}>
                  <Card.Img src={product.productImage} />
                </div>
                <Card.Body className='py-2'>
                  <div className='d-flex flex-wrap'>
                    
                      <h5 style={{color:'#1C1C1C'}}>{product.productName}</h5>
                    </div>
                   
                  
                  
                  

                </Card.Body>
              </Card>
            </Col>
          ))}
          </Row>
          <div className='text-center mb-5 mt-3'>
            <Button className='btn-primary ' style={{width:'230px'}} onClick={()=> navigate('/form/produce')}>Request Service</Button>
          </div>
        </section>
        <section className='my-3 my-md-5'>
        <div>
          <p className='p-2 align-items-center text-center my-4' style={{backgroundColor:'rgba(176, 0, 220, 0.11)', color:'#B000DC', padding:'6px, 14px, 6px, 14px', borderRadius:'8px', width:'120px'}} id="scrollspyHeading3">Oil Extraction</p>
          </div>
          <Row>
          {oilExtraction.map((product)=>(
            <Col xs={6} md={3} key={product.id} className='mb-3'>
              <Card style={{borderRadius:'16px'}} onClick={() => handleProductClick(product?.id, 'extraction')} className='h-100'> 
                <div className='p-2 p-md-4' style={{borderBottom:'1px solid #dfdcdc'}}>
                  <Card.Img src={product.productImage} />
                </div>
                <Card.Body className='py-2'>
                  <div className='d-flex flex-wrap'>
                    
                      <h5 style={{color:'#1C1C1C'}}>{product.productName}</h5>
                    </div>
                   
                  
                  
                  

                </Card.Body>
              </Card>
            </Col>
          ))}
          </Row>
          <div className='text-center mb-5 mt-3'>
            <Button className='btn-primary ' style={{width:'230px'}} onClick={()=> navigate('/form/produce')}>Request Service</Button>
          </div>
        </section>
        </div>
        <section className='my-3 my-md-5'>
          <h2 className='my-5' id="scrollspyHeading4">Processing rates</h2>
          <Row>
          {processingRates.map((product)=>(
            <Col xs={12} md={6} key={product.id} className=' mb-4 mb-md-3'>
              <Card style={{borderRadius:'16px', border:'1px solid #DEE2E7'}} className='h-100 px-3 pt-3 pb-4'>
                <Row className=''>
                <Col xs={6} className='h-100'>
                  <Card className='p-2  h-100' style={{borderRadius:'6px', border:'1px solid #DEE2E7'}}>
                  <Card.Img src={product.productImage} className='h-100' style={{objectFit:'cover'}}/>
                  </Card>
                 
                </Col>
                <Col xs={6} >
                  <div className='d-flex flex-column gap-0 my-3 my-sm-5 py-0 py-sm-5 py-md-0 py-lg-5 h-100'>
                  <h4 className='mt-3 mt-sm-0'style={{fontWeight:'600', color:'#1C1C1C'}}>{product.productType}</h4>
                  {product.productPrice && <h4 className='py-3 align-items-center text-center my-4 price' style={{backgroundColor:'#FFF0DF', color:'#FA3434', fontWeight:'600'}}>N{product.productPrice}/kg</h4>}
          
          

          <h6 style={{fontStyle:'italic', color:'#505050'}}>{product.productDescription}</h6>
                  </div>
                  
                </Col>
                </Row>
              </Card>
            </Col>
          ))}
          </Row>
          <div className='text-center mb-5 mt-3'>
            <Button className='btn-primary ' style={{width:'230px'}}onClick={()=> navigate('/form/produce')}>Request Service</Button>
          </div>
        </section>
        </div>
      
      </div>
      <Footer/>
    </div>
  )
}

export default Services
