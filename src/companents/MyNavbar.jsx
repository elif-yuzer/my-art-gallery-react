import React from 'react'
import { NavDropdown,Navbar,Nav,Container,NavbarBrand } from 'react-bootstrap'
import { Link,NavLink } from 'react-router-dom'



const MyNavbar = () => {
    const linkStyle=({isActive})=>({
    color: isActive ? "#0dcaf0" : "white",
    fontWeight: isActive ? "bold" : "normal"

})
  return (
     <Navbar expand="lg" bg='dark' variant='dark'   >
      <Container >

        <Navbar.Brand as={Link} to="/" className='text-light'><span className='fw-bold fs-3 text-white' style={{letterSpacing:"2px"}}>COLOR OF SENSE</span><span className='text-info'>.</span>
        </Navbar.Brand>
      
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">


          <Nav className="ms-auto">
            <Nav.Link as={NavLink} to="/" style={linkStyle}>Home</Nav.Link>
            <Nav.Link as={NavLink} to="/gallery" style={linkStyle}>Gallery</Nav.Link>
            <Nav.Link as={NavLink} to="/artists" style={linkStyle}>Artists</Nav.Link>
            
            <NavDropdown   title="About" id="basic-nav-dropdown" >
              <NavDropdown.Item as={Link} to='/about/history' >History</NavDropdown.Item>
              <NavDropdown.Item as={Link} to='/about/our-services'>
               Our Services
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to='/about/location'>Location</NavDropdown.Item>
              <NavDropdown.Divider />
            </NavDropdown>
            <Nav.Link as={NavLink} to="/contact" style={linkStyle}>Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default MyNavbar