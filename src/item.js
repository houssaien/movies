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

    remove=(id)=>
    {
        this.setState({
          news:this.state.news.filter((el,index)=>(index!==id))
        })
    }
    render() { 

       
        const {item}=this.props
        return ( <div>
            
        <Card className="card">
        <CardImg top width="200px" height="300px" src={item.article}alt="Card image cap" />
        <CardBody>
         
          <CardSubtitle>{item.title}</CardSubtitle>
          <CardText><StarRatingComponent 
          name="rate" 
          starCount={10} 
          value={item.rating}

        /></CardText>
        <Button color="danger"   onChange={id=>item.remove(id)}>Delete</Button>
        </CardBody>
      </Card>
      
        </div> );
    }
}
 
export default Item;
