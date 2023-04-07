import React from 'react';
import { Link } from 'react-router-dom';

const Error500 = () => {
  return (
    <>
        <div className="error-page">
        {/* <div id="global-loader" >
            <div className="whirly-loader"> </div>
        </div> */}
        {/* Main Wrapper  */}
        <div className="main-wrapper">
            <div className="error-box">
				<h1>500</h1>
				<h3 className="h2 mb-3"><i className="fas fa-exclamation-circle"></i> Oops! Something went wrong</h3>
				<p className="h4 font-weight-normal">The page you requested was not found.</p>
				<Link to="/home" className="btn btn-primary">Back to Home</Link>
			</div>
        </div>
        {/* /Main Wrapper      */}
        </div>    </>
  )
}

export default Error500