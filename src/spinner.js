import React from 'react'
import './movie.css';
import { Spinner } from 'reactstrap';


/**
 * Spinner 
 * 
 * This is a functional component that renders an image element with a spinner 
 * gif as its source
 */

const Spinner1 = () => <Spinner className="spi" style={{ width: '3rem', height: '3rem' }} />


// Export the Spinner component for use in the app
export default Spinner1