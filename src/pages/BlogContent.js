
import React, { useState } from 'react'
import GuestNavbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer'
import { NavLink, useNavigate, useParams } from 'react-router-dom'

import { Card, Row, Col, Button , Form, Accordion} from 'react-bootstrap'
import { blogPosts } from '../data'
const BlogContent = () => {
    const {blogId} = useParams();
    const blog = blogPosts.find(blog => blog.id.toString() === blogId);

    if (!blog) {
        <div
        className="justify-content-center align-items-center text-center"
        style={{ padding: "150px" }}
      >
        <div className="spinner-border text-secondary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
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
      <h6 style={{color:'#81AC29', fontWeight:'500'}}>{blog.blogName} • {blog.blogDate}</h6>
      <h2>Lorem ipsum dolor sit amet</h2>
      <h6 style={{color:'#898989'}} className='text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </h6>
      <div style={{ backgroundColor: '#DCFCE7', borderRadius: '15px', width: '110px' }} className="d-flex justify-content-center py-1 px-2">
            <p style={{ color: '#22C55E' }} className="my-auto">{blog.industry}</p>
          </div>
      </div>
    
    

    </div>
    <section className='px-3 px-md-5 mx-lg-5'>
        <Card className='' style={{border:"none"}}>
            <Card.Img src={blog.blogImage} style={{maxHeight:'640px'}}/>
            <h4 style={{color:'#556987', fontWeight:'500'}} className='text-center my-3'>{blog.blogText}</h4>
        </Card>
       
        
        
        <div className='mx-5 px-xxl-5'>
        <div className='my-5 d-flex flex-column gap-2 px-lg-5'>
            <h2 style={{color:'#333F51'}}>Header 1</h2>
            <h4 style={{color:'#556987'}}>{blog.blogText}</h4>
            <div style={{borderLeft:'2px solid #22C55E'}} className='px-3 py-3'>
                <Card.Text style={{color:'#333F51', fontWeight:'500'}}>{blog.blogHeading}</Card.Text>
                <h5>- {blog.blogName}, CEO & Founder</h5>
            </div>
            <h5 style={{color:'#556987'}} className='mt-1'>{blog.blogText}</h5>
            <Card.Img src={blog.blogImage} style={{maxHeight:'420px'}}/>
        </div>
        <div className='pb-5'style={{borderBottom:'1px solid #D5DAE1'}}>
        <h2 style={{color:'#333F51'}}>Header 1</h2>
            <h4 style={{color:'#556987'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ullamcorper mattis lorem non. Ultrices praesent amet ipsum justo massa. Eu dolor aliquet risus gravida nunc at feugiat consequat purus. Non massa enim vitae duis mattis. Vel in ultricies vel fringilla.
Donec fermentum ac libero a pretium. Nulla nisl sem, euismod ut eros vitae, egestas scelerisque enim. Vivamus id pharetra massa. Nulla aliquet erat elit, a gravida dui efficitur vel. Sed pulvinar diam sed neque ullamcorper semper. Nulla elementum arcu lacus, quis porta nisl posuere varius. Quisque tempus libero sed urna posuere hendrerit.</h4>
        </div>
        <div className='d-flex gap-3 justify-content-center text-center my-5'>
            <div className=' d-flex gap-1 px-3 py-auto my-auto' style={{color:'#556987', border:'1px solid #D5DAE1',borderRadius:'6px', height:'25px'}}>
            <i className="bi bi-copy" style={{color:'#BBC3CF'}}></i> <p style={{color:'#556987'}}>Copy Link</p>
            </div>
            <div className='d-flex gap-1'>
          

            <i className='bi bi-facebook px-1 py-auto my-auto' style={{color:'#556987', border:'1px solid #D5DAE1',borderRadius:'6px', height:'25px'}}></i>
            <i className='bi bi-twitter px-1 py-auto my-auto' style={{color:'#556987', border:'1px solid #D5DAE1',borderRadius:'6px', height:'25px'}}></i>
            <i className='bi bi-instagram px-1 py-auto my-auto' style={{color:'#556987', border:'1px solid #D5DAE1',borderRadius:'6px', height:'25px'}}></i>
            </div>

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

export default BlogContent
