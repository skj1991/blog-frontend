import React from 'react'
import {Link} from 'react-router-dom'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'

const Homepage = (props) => {

  return (
    <div>
      <Container className="p-3">
        <Jumbotron >
          <h1 className="header"><b>THE WANDER'S ARCHIVES</b></h1>
          <img src="https://149349300.v2.pressablecdn.com/wp-content/uploads/2020/01/shutterstock_144112840.jpg" alt='Cannot Load!'/>
          <p>Welcome to the blog of exploration</p>
          {/* <Link to='/posts' style={{paddingRight: '10px'}}>View Posts</Link>
          <Link to='/posts/new'> Create Post</Link> */}
        </Jumbotron>
      </Container>
    </div>

  )
}

export default Homepage