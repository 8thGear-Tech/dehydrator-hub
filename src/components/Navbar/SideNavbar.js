import React, { useRef, useState, useEffect } from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';


const navLinks = [
  { id: 1, title: 'Services', url: '/services' },
  { id: 2, title: 'Milling', url: '/milling' },
  { id: 3, title: 'Hydration', url: '/hydration' },
  { id: 4, title: 'Packaging', url: '/packaging' },
  { id: 5, title: 'Machinery', url: '/machinery' },
  { id: 6, title: 'Dry products', url: '/dry-products' },
 
];


const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
  });

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
      });
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowSize;
};

export const ServicesNavbar = () => {
  const { width } = useWindowSize();
  const breakpoints = { xs: 576, sm: 768, md: 992 };

  let linksPerSlide = navLinks.length; // Default to all links for md and above
  if (width < breakpoints.xs) {
    linksPerSlide = 3; // XS screens display 3 links per slide
  } else if (width >= breakpoints.xs && width < breakpoints.md) {
    linksPerSlide = 5; // SM screens display 5 links per slide
  }

  const linkGroups = [];
  for (let i = 0; i < navLinks.length; i += linksPerSlide) {
    linkGroups.push(navLinks.slice(i, i + linksPerSlide));
  }

  const [activeGroupIndex, setActiveGroupIndex] = useState(0);

  const handlePrevClick = () => {
    setActiveGroupIndex(Math.max(activeGroupIndex - 1, 0));
  };

  const handleNextClick = () => {
    setActiveGroupIndex(Math.min(activeGroupIndex + 1, linkGroups.length - 1));
  };

  return (
    <Navbar className='px-3 px-md-5 py-1 py-3'>
      <Nav className="d-flex align-items-center">
        {width < breakpoints.md && (
          <button className="btn btn-secondary" onClick={handlePrevClick} disabled={activeGroupIndex === 0}>
            &lt;
          </button>
        )}
        <div className="navbar-nav flex-row overflow-auto">
          {linkGroups[activeGroupIndex] && linkGroups[activeGroupIndex].map((link) => (
            <Nav.Link href={link.url} className='nav-link text-dark' key={link.id}>{link.title}</Nav.Link>
          ))}
        </div>
        {width < breakpoints.md && (
          <button className="btn btn-secondary" onClick={handleNextClick} disabled={activeGroupIndex === linkGroups.length - 1}>
            &gt;
          </button>
        )}
      </Nav>
    </Navbar>
  );
};



const SidebarNavbar = () => {
  return (
   
    <Nav className=" sidebar " id="navbar-example2" >
        <Nav.Link className='nav-link text-dark' style={{backgroundColor:'#E5F1FF', fontWeight:'500'}}>Services</Nav.Link>
        <Nav.Link href="#scrollspyHeading1"className='nav-link text-dark'>Prepping</Nav.Link>
        <Nav.Link href="#scrollspyHeading1" className='nav-link text-dark'>Milling</Nav.Link>
        <Nav.Link  href="#scrollspyHeading2" className='nav-link text-dark'>Dehydration</Nav.Link>
        <Nav.Link  href="#scrollspyHeading3" className='nav-link text-dark'>Packaging</Nav.Link>
        <Nav.Link  className='nav-link text-dark'>Marketplace</Nav.Link>
       
    </Nav>
  );
};

export default SidebarNavbar;
