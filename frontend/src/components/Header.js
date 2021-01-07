import React from 'react'
import { Navbar, Nav, Form, FormControl, Button, Image } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

const Header = () => {
  return (
    <Navbar
      bg='light'
      variant='light'
      sticky='top'
      collapseOnSelect
      expand='lg'
      className='px-5'
    >
      <LinkContainer to='/'>
        <Navbar.Brand>
          <Image className='logo mr-5' src='/logo.png' />
        </Navbar.Brand>
      </LinkContainer>

      <Navbar.Toggle aria-controls='responsive-navbar-nav' />
      <Navbar.Collapse>
        <Form inline>
          <FormControl
            type='text'
            placeholder='Search'
            className=' my-2 mr-sm-2 navbar-searchbox'
            style={{ width: 400 }}
          />
          <Button className='btn btn-primary my-2 my-sm-0 navbar-btn'>
            Search
          </Button>
        </Form>
        <Nav className='ml-auto'>
          <LinkContainer to='/login'>
            <Nav.Link>
              <i className='fas fa-user mr-2'></i>
              <strong>Login</strong>
            </Nav.Link>
          </LinkContainer>
          <LinkContainer to='/my_wishlist'>
            <Nav.Link>
              <i className='fas fa-heart mr-2'></i>
              <strong>Wishlist</strong>
            </Nav.Link>
          </LinkContainer>
          <LinkContainer to='/cart'>
            <Nav.Link>
              <i className='fas fa-shopping-cart mr-2'></i>
              <strong>Cart</strong>
            </Nav.Link>
          </LinkContainer>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default Header
