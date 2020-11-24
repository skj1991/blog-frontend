import React from 'react';
import Post from './Post'
import { Route, Link } from 'react-router-dom'
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'

const Posts = (props) => {
    
    return(
     <div>
        {props.posts.map(post => 
            <div key={post.id}> 
            <CardDeck> 
                <Card className="bg-dark text-white">
                <Card.Img src={post ? post.image : null} alt="Card image" />
                <Card.ImgOverlay>
                    <Card.Title>{post.title}</Card.Title>
                    <Card.Footer>
                        <Link to={`/posts/${post.id}`}>
                            <Card.Text>See more...</Card.Text>
                        </Link>
                    </Card.Footer>
                </Card.ImgOverlay>
                </Card>
            </CardDeck>
                 {/* <Link to={`/posts/${post.id}`}>
                    {post.title}
                    <img src="{post ? post.image : null}" alt='Cannot Load!' width="500" height="600"/>
                 </Link> */}
            </div>
            )}
     </div>
    )
}

export default Posts

