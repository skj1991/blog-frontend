import React from 'react'
import {Link} from 'react-router-dom'
import {Button} from 'react-bootstrap'

const NavBar = (props) => {

  return (
    <div>
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