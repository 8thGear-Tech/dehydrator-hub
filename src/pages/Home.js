import React from 'react'
import { millableProducts, hydrationProducts, dehydrationMachine } from '../data'
import hero1 from '../assets/images/home-hero-section.png'
import hero2 from '../assets/images/home-hero-section-2.png'

import GuestNavbar from '../components/Navbar/Navbar'
import { Button, Card, Col, Row } from 'react-bootstrap'
import Footer from '../components/Footer'
import SidebarNavbar from '../components/Navbar/SideNavbar'
import { ServicesNavbar } from '../components/Navbar/SideNavbar'

const Home = () => {
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
              <h3>Lets Process, dry and</h3>
              <h1>turn your food to products</h1>
              <Button variant='light' className='my-4 px-3'> Learn more</Button>

            </Card.ImgOverlay>
          </Card>
            </Col>
          </Row>
         
        </section>
        <section className='my-3 my-md-5'>
          <h1 className='my-4'>Millable Products</h1>
          <Row>
          {millableProducts.map((product)=>(
            <Col xs={6} md={3} key={product.id} className='mb-3'>
              <Card style={{borderRadius:'16px'}}>
                <div className='p-2 p-md-4' style={{borderBottom:'1px solid #dfdcdc'}}>
                  <Card.Img src={product.productImage} />
                </div>
                <Card.Body>
                  <div className='d-flex justify-content-between align-items-center'>
                    <div>
                      <h5>${product.productPrice} {product.productOldPrice && <span style={{color:'#8B96A5', textDecoration:'line-through', fontWeight:'400', fontSize:'13px'}}>${product.productOldPrice}</span>}</h5>
                      <h6 style={{color:'#606060'}}>{product.productName}</h6>
                    </div>
                    <i className='bi bi-heart px-1 py-auto my-auto' style={{color:'blue', border:'1px solid #DEE2E7',borderRadius:'2px', height:'25px'}}></i>
                  
                  
                  </div>

                </Card.Body>
              </Card>
            </Col>
          ))}
          </Row>
        </section>
        <section className='my-3 my-md-5'>
          <h1 className='my-4'>Hydration Products</h1>
          <Row>
          {hydrationProducts.map((product)=>(
            <Col xs={6} md={3} key={product.id} className='mb-3'>
              <Card style={{borderRadius:'16px'}}>
                <div className='p-2 p-md-4' style={{borderBottom:'1px solid #dfdcdc'}}>
                  <Card.Img src={product.productImage} />
                </div>
                <Card.Body>
                  <div className='d-flex justify-content-between align-items-center'>
                    <div>
                      <h5>${product.productPrice} {product.productOldPrice && <span style={{color:'#8B96A5', textDecoration:'line-through', fontWeight:'400', fontSize:'13px'}}>${product.productOldPrice}</span>}</h5>
                      <h6 style={{color:'#606060'}}>{product.productName}</h6>
                    </div>
                    <i className='bi bi-heart px-1 py-auto my-auto' style={{color:'blue', border:'1px solid #DEE2E7',borderRadius:'2px', height:'25px'}}></i>
                  
                  
                  </div>

                </Card.Body>
              </Card>
            </Col>
          ))}
          </Row>
        </section>
        <section className='my-3 my-md-5'>
          <h1 className='my-4'>Dehydrating Machine</h1>
          <Row>
          {dehydrationMachine.map((product)=>(
            <Col xs={6} md={3} key={product.id} className='mb-3'>
              <Card style={{borderRadius:'16px'}}>
                <div className='p-2 p-md-4'>
                  <Card.Img src={product.productImage} />
                </div>
                <Card.Body>
                  <h6 style={{fontWeight:'600'}}>{product.productName}</h6>
                  <div className='d-flex justify-content-between align-items-center'>
                    <div>
                     <h6  style={{color:'#8B96A5'}}>{product.productType}</h6>
                     <h6  style={{color:'#8B96A5'}}>{product.productSize}</h6>
                     <h6  style={{color:'#8B96A5'}}>{product.location}</h6>
                    </div>
                    <h6  style={{color:'#8B96A5'}}>{product.produtctDesription}</h6>
                  
                  
                  </div>

                </Card.Body>
              </Card>
            </Col>
          ))}
          </Row>
        </section>
        <section className='my-3 my-md-5 py-5 px-lg-5'>
          <Card className='border-0'>
            <Card.Img src={hero2} alt='hero1' style={{height:'345px'}}/>

            <Card.ImgOverlay className='px-3 py-5 px-md-5' style={{maxWidth:'35rem', color:'#ffffff'}}>
              <h1 style={{ color:'#ffffff'}}>An easy way to send requests to all suppliers</h1>
              <h5 className='mt-3'style={{ color:'#ffffff', fontWeight:'400'}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.</h5>
              
              <Button className='my-3 px-3 btn-primary' style={{borderRadius:'40px'}}>Get in touch</Button>

            </Card.ImgOverlay>
          </Card>
        </section>
        <section className='my-3 my-md-5 py-lg-4'>
          <h1 className='my-4'>Shop</h1>
          <Row className='mb-1'>
          {millableProducts.map((product)=>(
            <Col xs={6} md={3} key={product.id} className='mb-3'>
              <Card style={{borderRadius:'16px'}}>
                <div className='p-2 p-md-4' style={{borderBottom:'1px solid #dfdcdc'}}>
                  <Card.Img src={product.productImage} />
                </div>
                <Card.Body>
                  <div className='d-flex justify-content-between align-items-center'>
                    <div>
                      <h5>${product.productPrice} {product.productOldPrice && <span style={{color:'#8B96A5', textDecoration:'line-through', fontWeight:'400', fontSize:'13px'}}>${product.productOldPrice}</span>}</h5>
                      <h6 style={{color:'#606060'}}>{product.productName}</h6>
                    </div>
                    <i className='bi bi-heart px-1 py-auto my-auto' style={{color:'blue', border:'1px solid #DEE2E7',borderRadius:'2px', height:'25px'}}></i>
                  
                  
                  </div>

                </Card.Body>
              </Card>
            </Col>
          ))}
          </Row>
          <Row>
          {hydrationProducts.map((product)=>(
            <Col xs={6} md={3} key={product.id} className='mb-3'>
              <Card style={{borderRadius:'16px'}}>
                <div className='p-2 p-md-4' style={{borderBottom:'1px solid #dfdcdc'}}>
                  <Card.Img src={product.productImage} />
                </div>
                <Card.Body>
                  <div className='d-flex justify-content-between align-items-center'>
                    <div>
                      <h5>${product.productPrice} {product.productOldPrice && <span style={{color:'#8B96A5', textDecoration:'line-through', fontWeight:'400', fontSize:'13px'}}>${product.productOldPrice}</span>}</h5>
                      <h6 style={{color:'#606060'}}>{product.productName}</h6>
                    </div>
                    <i className='bi bi-heart px-1 py-auto my-auto' style={{color:'blue', border:'1px solid #DEE2E7',borderRadius:'2px', height:'25px'}}></i>
                  
                  
                  </div>

                </Card.Body>
              </Card>
            </Col>
          ))}
          </Row>
         
        </section>
        <section className='my-3 my-md-5 py-lg-4'>
          <h1 className='my-4'>Lorem Ipsum</h1>
          <h6>Lorem Ipsum is simply dummy text of the printing and typesetting <br/> industry. </h6>
          <Card className='border-0 my-3' style={{background:'#000000', borderRadius:'15px'}}>
            

            <Row className='px-3 py-5 px-md-5 align-items-center'>
              
              <Col xs={12} md={7} className='mb-3' >
                <h2 className='mb-3 text-white'>Dehydrator Hub</h2>
                <h5 className='text-white' style={{fontWeight:'400'}}>Subscribe to receive the latest news and updates about TDA. </h5>
<h5 className='text-white' style={{fontWeight:'400'}}>
We promise not to spam you! </h5>
              </Col>
              <Col xs={12} md={5}><Card className='d-flex flex-column gap-3 border-0 p-4' >
              <h5>Give us your feedback</h5>
              <textarea rows={2} placeholder='Type more details'></textarea>
              <div className='mb-5'>
              <Button className='btn-primary'>Submit</Button>
              </div>
              
              </Card></Col>
              
            </Row>
          </Card>
        </section>
      </div>
      <Footer/>
    </div>
  )
}

export default Home
