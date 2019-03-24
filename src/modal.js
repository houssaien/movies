import React, { Component } from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { Form, FormGroup, Input } from 'reactstrap';

class Modal1 extends Component {
    
 
  
  
  constructor(props) {
 
        super(props);
        this.state = { 
           value1:'',
           value2:'',
           value3:1,
        
           
            modal: false,
            
         };
         this.toggle = this.toggle.bind(this);
    }
    handleChange=(event)=>
 {
      this.setState({ [event.target.name] : event.target.value
  
      })
 }

 addmyMovie=()=>{
  this.props.addMovie({

   title:this.state.value1,
   article:this.state.value2,
   rating:this.state.value3
   } )
}

  

   

    toggle() {
        this.setState(prevState => ({
          modal: !prevState.modal
        }));
      }
    render() { 
        return ( <div>
            <Button color="danger" onClick={this.toggle}>{this.props.buttonLabel}Add Movie</Button>
            <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
              <ModalHeader toggle={this.toggle}>Add new movie</ModalHeader>
              <ModalBody>
              <Form>
        <FormGroup>
         
          <Input type="text" name="value1"  placeholder="name of movie" onChange={this.handleChange} value={this.state.title}/>
         <br/>
          <Input type="text" name="value2"  placeholder="picture of movie"onChange={this.handleChange} value={this.state.article}/>
          <br/>
          <Input type="text" name="value3"  placeholder="rating of movie" onChange={this.handleChange} value={this.state.rating}/>
        </FormGroup>
        </Form>
              </ModalBody>
              <ModalFooter>
                <Button color="primary" onClick={this.addmyMovie}>Add Movie</Button>
                <Button color="secondary" onClick={this.toggle}>Cancel</Button>
              </ModalFooter>
            </Modal>
          </div> );
    }
}
 
export default Modal1;