import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody,
     CardSubtitle } from 'reactstrap';
import StarRatingComponent from 'react-star-rating-component';
class Item extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 

       
        const {item}=this.props
        return ( <div>
            
        <Card className="card">
        <CardImg top width="320px" height="420px" src={item.article}alt="Card image cap" />
        <CardBody>
         
          <CardSubtitle>{item.title}</CardSubtitle>
          <CardText><StarRatingComponent 
          name="rate" 
          starCount={10}
          value={item.rating}
         
        /></CardText>

        </CardBody>
      </Card>
      
        </div> );
    }
}
 
export default Item;