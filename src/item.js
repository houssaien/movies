import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody,
     CardSubtitle } from 'reactstrap';
     import { Button } from 'reactstrap';
import StarRatingComponent from 'react-star-rating-component';
class Item extends Component {
    constructor(props) {
        super(props);
        this.state = {
          }
    }

    render() { 

       
        const {item,remove,id}=this.props
        return ( <div>
            
        <Card className="card">
        <CardImg  className="pic" src={item.article}alt="Card image cap" />
        <CardBody>
         
          <CardSubtitle>{item.title}</CardSubtitle>
          <CardText><StarRatingComponent 
          name="rate" 
          starCount={10} 
          value={item.rating}

        /></CardText>
        <Button color="danger" onClick={()=>remove(id)}>Delete</Button>
        </CardBody>
      </Card>
      
        </div> );
    }
}
 
export default Item;
