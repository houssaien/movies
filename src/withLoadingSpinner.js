import React, { PureComponent } from 'react'
import Spinner from './spinner'


const withLoadingSpinner = (dataLoader) => (OriginalComponent) => {



  class EnhancedComponent extends PureComponent {

   
    state = {
      isLoading: true, // an isLoading flag
      data: null       // the data loaded
    }


    componentWillMount() {
      dataLoader().then(data => this.setState({
        isLoading: false,
        data
      }))
    }

  
    render() {
      return this.state.isLoading ? <Spinner /> : <OriginalComponent {...this.props} data={this.state.data} />
    }

  }


  
  return EnhancedComponent

}



export default withLoadingSpinner
