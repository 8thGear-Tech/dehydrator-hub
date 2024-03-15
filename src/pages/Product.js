import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { millableProducts, dehydrationMachine, hydrationProducts } from '../data';
import { Button, Card, Col, Row } from 'react-bootstrap';
import GuestNavbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer';

const shuffleArray = (array) => {
    const arr = array.slice();
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]]; // Swap elements
    }
    return arr;
  };

const Product = () => {

    let { productId } = useParams();
    const [category, id] = productId.split('-');
    const [product, setProduct] = useState(null);
    const [selectedImage, setSelectedImage] = useState('');
    const [images, setImages] = useState([]);
    const [relatedProducts, setRelatedProducts] = useState([]);
    const [selectedButton, setSelectedButton] = useState(0);
      const navigate = useNavigate()
   
  useEffect(() => {
    // Extracting category and id from productId
   
    let selectedProduct, potentialRelatedProducts;

    switch (category) {
      case 'millable':
        selectedProduct = millableProducts.find(p => p.id === parseInt(id));
        potentialRelatedProducts = millableProducts.filter(p => p.id !== selectedProduct.id);
        break;
      case 'hydration':
        selectedProduct = hydrationProducts.find(p => p.id === parseInt(id));
        potentialRelatedProducts = hydrationProducts.filter(p => p.id !== selectedProduct.id);
        break;
      case 'dehydrationMachine':
        selectedProduct = dehydrationMachine.find(p => p.id === parseInt(id));
        potentialRelatedProducts = dehydrationMachine.filter(p => p.id !== selectedProduct.id);
        break;
      default:
        console.warn('Unknown category:', category);
        return;
    }

    if (selectedProduct) {
      setProduct(selectedProduct);
      setSelectedImage(selectedProduct.productImage);
      setImages([selectedProduct.productImage, ...(selectedProduct.productPictures || [])]);
      setRelatedProducts(shuffleArray(potentialRelatedProducts).slice(0, 6)); // Shuffling and picking first 4 as related
    }
  }, [productId]);

      const handleImageClick = (img) => {
        console.log(`Selected image: ${img}`);
        setSelectedImage(img);
      };
      
     
      const handleButtonClick = (buttonIndex) => {
        setSelectedButton(buttonIndex);

      };
      const imageContainerStyle = {
        borderRadius: '5px',
        cursor: 'pointer',
        padding: '5px',
      };

    
      const inactiveStyle = {
        border: '1px solid #DEE2E7', // Example inactive border color
      };
       // Active image style
  const activeStyle = {
    border: '2px solid #505050', 
  };
    if (!product) {
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
        <div className='px-3 px-md-5 mx-xl-5 py-5'>
       
       {product ? (
         <div>
         <div className='mb-3 p-2' style={{border:'1px solid #DEE2E7',borderRadius:'5px'}}>
         <Row>
             <Col xs={12} md={6} lg={5} className='mb-3'>
             <div className='mb-3 p-3' style={{border:'1px solid #DEE2E7', borderRadius:'5px'}}>
             <Card.Img src={selectedImage} />
           </div>
           {/* Thumbnails */}
           <div className='d-flex gap-2 flex-wrap' >
             {images.map((img, index) => (
                <div
                key={index}
                style={{
                  ...imageContainerStyle,
                  ...(selectedImage === img ? activeStyle : inactiveStyle),
                }}
                onClick={() => handleImageClick(img)}
              >
               <img
                 key={index}
                 src={img}
                 alt={`Product view ${index}`}
                 style={{ height: '48px', width: '48px', cursor: 'pointer'}}
                 
               />
               </div>
             ))}
           </div>
             </Col>
             <Col xs={12} md={6} lg={4} className='mb-3'>
                <div className='d-flex gap-1 align-items-center' style={{color:'#00B517'}}><i className='bi bi-check' style={{color:'#00B517', fontSize:'1.5rem'}}></i><h6 className='mt-1' style={{color:'#00B517'}}>Available</h6></div>
                <h4 className='mb-md-5 pb-lg-5'>{product?.productName}</h4>
                <div className='mt-5  d-flex align-items-center justify-content-between px-3 py-2' style={{border:'1px solid #BDC1C8', backgroundColor:'#FFF0DF'}}>
                    <div className='align-items-center'>
                        <h5 style={{color:"#FA3434", fontWeight:'600'}}>${product?. productPrice1kg}</h5>
                        <p style={{color:"#606060"}}> 1-4kg</p>
                    </div>
                    <div style={{borderLeft:'1.5px solid #BDC1C8'}} className='px-3'>
                        <h5 style={{color:"#1C1C1C", fontWeight:'600'}} className=''>${product?. price5kg}</h5>
                        <p style={{color:"#606060"}}> 5-9kg</p>
                    </div>
                    <div style={{borderLeft:'1.5px solid #BDC1C8'}} className='px-3'>
                        <h5 style={{color:"#1C1C1C", fontWeight:'600'}} >${product?. price10kg}</h5>
                        <p style={{color:"#606060"}}> 10-20kg</p>
                    </div>
                </div>
                <div className='my-2'>
                    <div className='row py-1' style={{borderBottom:'1px solid #E0E0E0'}}>
                        <h6 className='col-4' style={{color:'#8B96A5'}}>Price:</h6>
                        <h6 className='col-8' style={{color:'#505050'}}>Negotiable</h6>
                    </div>
                    <div style={{borderBottom:'1px solid #E0E0E0'}} className='py-1'>
                    <div className='row py-1' >
                        <h6 className='col-4' style={{color:'#8B96A5'}}>Type:</h6>
                        <h6 className='col-8' style={{color:'#505050'}}>{product?.productType}</h6>
                    </div>
                    <div className='row py-1' >
                        <h6 className='col-4' style={{color:'#8B96A5'}}>Material:</h6>
                        <h6 className='col-8' style={{color:'#505050'}}>{product?.productMaterial}</h6>
                    </div>
                    <div className='row py-1' >
                        <h6 className='col-4' style={{color:'#8B96A5'}}>Design:</h6>
                        <h6 className='col-8' style={{color:'#505050'}}>{product?.productDesign}</h6>
                    </div>

                    </div>
                    <div style={{borderBottom:'1px solid #E0E0E0'}} className='py-1'>
                    <div className='row py-1' >
                        <h6 className='col-4' style={{color:'#8B96A5'}}>Customization:</h6>
                        <h6 className='col-8' style={{color:'#505050'}}>{product?.productCustomization}</h6>
                    </div>
                    <div className='row py-1' >
                        <h6 className='col-4' style={{color:'#8B96A5'}}>Protection:</h6>
                        <h6 className='col-8' style={{color:'#505050'}}>Refund Policy</h6>
                    </div>
                    <div className='row py-1' >
                        <h6 className='col-4' style={{color:'#8B96A5'}}>Warranty:</h6>
                        <h6 className='col-8' style={{color:'#505050'}}>{product?.warranty}</h6>
                    </div>

                    </div>
                </div>
             </Col>
             <Col xs={12} md={6} lg={3}>
             <div className='p-2' style={{border:'1px solid #DEE2E7', borderRadius:'5px', boxShadow: '0px 1px 2px 0px #38383814'
}}>
             <div className="row g-3">
 
 <div className="col-6">
   <div className="d-flex align-items-center gap-1 rounded">
     <div className="flex-shrink-0">
       <div style={{backgroundColor:'#C6F3F1', borderRadius:'4px', padding:'8px 14px', color:'#4CA7A799'}}><h3 style={{fontWeight:'600', color:'#4CA7A799'}}>{ product.sellerName[0].toUpperCase()}</h3></div>
     </div>
     <div className="">
    
         <h6 className="mb-0" style={{ fontWeight: "600" }}>{product?.sellerName}</h6>
         <h6 className="text-truncate ">Verified Dehydrator Hub</h6>
       
     </div>
   </div>
 </div>

       
           </div>
           <div className='d-flex flex-column my-3 gap-2'>
            <div className='d-flex gap-3 align-items-center'>
                <i className='bi bi-geo-alt' style={{color:'#8B96A5'}}></i>
                <h6 style={{color:'#8B96A5'}} className='my-auto'> {product?.sellerLocation}</h6>
            </div>
            <div className='d-flex gap-3 align-items-center'>
                <i className='bi bi-shield-check' style={{color:'#8B96A5'}}></i>
                <h6 style={{color:'#8B96A5'}} className='my-auto'> Verified Seller</h6>
            </div>
            <div className='d-flex gap-3 align-items-center'>
                <i className='bi bi-globe' style={{color:'#8B96A5'}}></i>
                <h6 className='my-auto' style={{color:'#8B96A5'}}> {product?.shipping} shipping only</h6>
            </div>
           </div>
           <Button className='btn-primary w-100' onClick={()=> navigate('/form/produce')}>Send inquiry</Button>
             </div>
             <div className='my-4 d-flex gap-2 align-items-center text-center justify-content-center'>
                <i className='bi bi-heart' style={{color:'#81AC29', fontSize:'1rem'}}></i>
                <h6 style={{color:'#81AC29'}} className='my-auto'> Save for later</h6>
             </div>
             </Col>
 
         </Row>
           
         </div>
        <div>
         <Row className='mb-3'>
         <Col xs={12} md={9} className='' style={{border:'1px solid #DEE2E7',borderRadius:'5px'}}>
         <div className="d-flex flex-wrap px-1 gap-2 gap-xxl-5 gap-lg-3 gap-sm-3 align-items-center " style={{borderBottom:'1px solid #DEE2E7'}}>
                    <button
                      onClick={() => handleButtonClick(0)}
                      className={
                        selectedButton === 0
                          ? "active-text-outline btn"
                          : "btn btn-text"
                      }
                    >
                      Description
                    </button>
                    <button
                      onClick={() => handleButtonClick(1)}
                      className={
                        selectedButton === 1
                          ? "active-text-outline btn"
                          : "btn btn-text"
                      }
                    >
                      Reviews
                    </button>
                    <button
                      onClick={() => handleButtonClick(2)}
                      className={
                        selectedButton === 2
                          ? "active-text-outline btn"
                          : "btn btn-text"
                      }
                    >
                     Shipping
                    </button>
                    <button
                      onClick={() => handleButtonClick(3)}
                      className={
                        selectedButton === 3
                          ? "active-text-outline btn"
                          : "btn btn-text"
                      }
                    >
                     About seller
                    </button>
                  
        </div> 
        {selectedButton === 0 && (
        <div className='py-3 px-3'>
            <h6 style={{color:'#505050'}}>{product?.productDescription}</h6>
            <div className='my-3 ps-2 pe-3' style={{border:'1px solid #E0E7E9', maxWidth:'40rem'}}>
            <div className='px-0 mx-0' style={{}}>
                <div className='row ' style={{borderBottom:'1px solid #E0E7E9'}}>
                    <div className='col-5 py-1' style={{backgroundColor:'#EFF2F4'}}>
                        <h6 style={{color:'#505050'}}>Model</h6>
                    </div>
                    <div className='col-7 py-1' style={{borderLeft:'1px solid #E0E7E9'}}>
                    <h6 style={{color:'#505050'}}>{product?.productModel}</h6>
                    </div>
                </div>
                <div className='row ' style={{borderBottom:'1px solid #E0E7E9'}}>
                    <div className='col-5 py-1' style={{backgroundColor:'#EFF2F4'}}>
                        <h6 style={{color:'#505050'}}>Style</h6>
                    </div>
                    <div className='col-7 py-1' style={{borderLeft:'1px solid #E0E7E9'}}>
                    <h6 style={{color:'#505050'}}>{product?.productStyle}</h6>
                    </div>
                </div>
                <div className='row ' style={{borderBottom:'1px solid #E0E7E9'}}>
                    <div className='col-5 py-1' style={{backgroundColor:'#EFF2F4'}}>
                        <h6 style={{color:'#505050'}}>Certificate</h6>
                    </div>
                    <div className='col-7 py-1' style={{borderLeft:'1px solid #E0E7E9'}}>
                    <h6 style={{color:'#505050'}}>{product?.productCertificate}</h6>
                    </div>
                </div>
                <div className='row' style={{borderBottom:'1px solid #E0E7E9'}}>
                    <div className='col-5 py-1' style={{backgroundColor:'#EFF2F4'}}>
                        <h6 style={{color:'#505050'}}>Size</h6>
                    </div>
                    <div className='col-7 py-1' style={{borderLeft:'1px solid #E0E7E9'}}>
                    <h6 style={{color:'#505050'}}>{product?.productSize}</h6>
                    </div>
                </div>
                <div className='row ' >
                    <div className='col-5 py-1' style={{backgroundColor:'#EFF2F4'}}>
                        <h6 style={{color:'#505050'}}>Memory</h6>
                    </div>
                    <div className='col-7 py-1' style={{borderLeft:'1px solid #E0E7E9'}}>
                    <h6 style={{color:'#505050'}}>{product?.productMemory}</h6>
                    </div>
                </div>
                
            </div>
            </div>
            <div className='d-flex flex-column gap-1'>
                {product?.productFeatures.map((feature) => (
                    <div className='d-flex gap-2 align-items-center' key={feature.id}>
                        <i className='bi bi-check' style={{color:'#E0E7E9', fontSize:'1.2rem'}}></i>
                        <h6 style={{color:'#505050'}} className='my-auto'>{feature.feature}</h6>
                    </div>
                ))}
            </div>
        </div>
       )}  
       {selectedButton === 1 && (
        <div className='p-3'>
              <div className='d-flex flex-column gap-1'>
                {product?.productReviews.map((review) => (
                    <div className='d-flex gap-2 align-items-center' key={review.id}>
                        <i className='bi bi-check' style={{color:'#E0E7E9', fontSize:'1.2rem'}}></i>
                        <h6 style={{color:'#505050'}} className='my-auto'>{review.review}</h6>
                    </div>
                ))}
            </div>
        </div>
       )}
        {selectedButton === 2 && (
        <div className='p-3'>
              <div className='d-flex flex-column gap-1'>
               <h5>{product?.shipping} shipping only</h5>
            </div>
        </div>
       )}
       {selectedButton === 3 && (
        <div className='p-3'>
              <div className='d-flex flex-column gap-1'>
               <h5>{product?.sellerName}</h5>
               <h5>{product?.sellerLocation}</h5>
            </div>
        </div>
       )}
 
 
 </Col>
 <Col aria-modal={3} className='d-none d-md-flex'>
 <div className="related-products px-2 py-3" style={{border:'1px solid #DEE2E7',borderRadius:'5px'}}>
        <h6 className='mb-3' style={{fontWeight:'600'}}>You may like</h6>
        <div >
          {relatedProducts.map((prod) => (
          
                <Row className='mb-3 g-2'>
              <Col xs={5}className=' h-100' >
                <Card className='p-2 h-100' style={{border:'1px solid #DEE2E7',borderRadius:'5px'}}><img src={prod.productImage} style={{}} /></Card>
                
                
                  

                  {/* Other product details */}
              
              </Col>
              <Col xs={7}>
              <p style={{color:'#505050', fontWeight:'600'}} className='word-wrap'>{prod.productName}</p>
                  <p style={{color:'#8B96A5'}}>${prod.productPrice1kg}</p>
              </Col>
              </Row>
            
          ))}
        </div>
      </div></Col>
            
         </Row>
         </div>
         <div className="related-products p-3" style={{border:'1px solid #DEE2E7',borderRadius:'5px'}}>
        <h4 className='mb-4' style={{fontWeight:'600'}}>Related Products</h4>
        <Row>
          {relatedProducts.map((prod) => (
            <Col key={prod.id} xs={6} sm={6} md={4} lg={2} className='mb-3'>
              <Card className='h-100'>
                <Card.Img variant="top" src={prod.productImage} style={{backgroundColor:'#8B96A5'}} className='p-2' />
                <Card.Body className='px-2 pt-1 pb-0'>
                  <h6 style={{color:'#505050', fontWeight:'600'}}>{prod.productName}</h6>
                  <h6 style={{color:'#8B96A5'}}>${prod.productPrice1kg}</h6>

                  {/* Other product details */}
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
         </div>
       ) : (
         <p>Product not found.</p>
       )}
     </div>
     <section className='my-3 px-3  my-md-5 py-lg-4'>
          
          <Card className='border-0 my-3' style={{background:'#000000', borderRadius:'15px'}}>
            

            <Row className='px-3 py-5 px-md-5 align-items-center'>
              
              <Col xs={12} md={7} className='mb-3' >
                <h2 className='mb-3 text-white'>We love your feedback</h2>
                <h5 className='text-white' style={{fontWeight:'400'}}>Dehydrator Hub is built on the back of excellent customer service and delivery to our customers. In order to improve our delivery to you, please share your feedback. We need to know what works. </h5>

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
        <Footer/>
    </div>
  
  )
}

export default Product
