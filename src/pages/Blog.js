
import React, { useState } from 'react'
import GuestNavbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer'
import { NavLink, useNavigate } from 'react-router-dom'

import { Card, Row, Col, Button , Form, Accordion} from 'react-bootstrap'
import { blogPosts } from '../data'

const Blog = () => {
const navigate = useNavigate();
  const handleBlogClick =(blogId)=> {
navigate (`/blog-content/${blogId}`)
  }
  return (
    <div>
    <GuestNavbar/>
    <div className='py-5 px-3 px-md-5 mt-5'>
      <div className='d-flex flex-column gap-3  justify-content-md-center align-items-center mb-lg-5 '>
      <div className="d-flex gap-2 align-items-center about justify-content-md-center" >  
  <NavLink className='nav-link' activeclassname='active'  to="/">Home</NavLink>
  <i className="bi bi-chevron-right" style={{fontSize:'0.8rem'}}></i>
      <NavLink activeclassname='active' className='nav-link'  to="/blog">Blog </NavLink>
      </div>
      <h2>Blog Posts</h2>
      <h6 style={{color:'#898989',maxWidth:'40rem', lineHeight:'25px'}} className='text-center'>With our integrated CRM, project management, collaboration and invoicing capabilities, you can manage your business in one secure platform. </h6>
      <Button>View all Posts</Button>
      </div>
    
    

    </div>
  <section className='px-3 px-md-5'>
    <Row>
      {blogPosts.map((blog)=>(
        <Col xs={6} md={4} className='mb-3' key={blog.id}>
          <Card style={{border:'none'}}>
            <Card.Img src={blog.blogImage} onClick={() => handleBlogClick(blog?.id)}/>
            <Card.Body className='ps-0'>
              <h6 style={{color:'#556987', fontWeight:'500'}}>{blog.blogName}• {blog.blogDate}</h6>
              <Card.Text style={{color:'#333F51',  fontWeight:'700'}}>{blog.blogHeading}</Card.Text>
              <h5 style={{color:'#8896AB', fontWeight:'500'}} className='mb-3'>{blog.blogText}</h5>
              <div style={{ backgroundColor: '#DCFCE7', borderRadius: '15px', width: '110px' }} className="d-flex justify-content-center py-1 px-2">
            <p style={{ color: '#22C55E' }} className="my-auto">{blog.industry}</p>
          </div>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>

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

export default Blog
