import React, { Component } from 'react';

     import StarRatingComponent from 'react-star-rating-component';
class Rating extends Component {
    constructor() {
        super();
     
        this.state = {
          rating: 1
        };
      }
     
      onStarClick(nextValue) {
        this.setState({rating: nextValue});
        this.props.serachrating1(nextValue);
      }
     
      render() {
        const { rating } = this.state;
        
        return (                
          <div>
            
            <StarRatingComponent 
              name="rate" 
              starCount={10}
              value={rating}
              onStarClick={this.onStarClick.bind(this)}
            />
          </div>
        );
      }
}
 
export default Rating;