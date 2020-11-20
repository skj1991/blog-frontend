import React from 'react'
import {Link} from 'react-router-dom'

const Homepage = (props) => {

  return (
    <div>
        <header class="w3-container w3-center w3-padding-32"> 
            <h1><b>WANDERS ARCHIVES</b></h1>
            <p>Welcome to the blog of exploration</p>
        </header>
      {/* <Link to='/posts' style={{paddingRight: '10px'}}>View Posts</Link>
      <Link to='/posts/new'> Create Post</Link> */}
    </div>

  )
}

export default Homepage