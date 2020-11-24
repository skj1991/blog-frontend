import React from 'react'
import {Link} from 'react-router-dom'
import {Button} from 'react-bootstrap'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

const NavBar = (props) => {

  return (
    <div>
      {/* <Navbar bg="light" variant="light">
        <Navbar.Brand href="#home">WANDER'S ARCHIVES</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/posts">View Posts</Nav.Link>
          <Nav.Link href="/posts/new">Create Post</Nav.Link>
        </Nav>
      </Navbar> */}
      <Link to='/' style={{paddingRight: '10px'}}>
        <Button>
          Homepage
        </Button>
      </Link>
      <Link to='/posts' style={{paddingRight: '10px'}}>
        <Button>
          View Posts
        </Button>
      </Link>
      <Link to='/posts/new'> 
        <Button>
          Create Post
        </Button>
      </Link>
    </div>

  )
}



export default NavBar