import React from 'react'

const ForgetPassword = () => {
  return (
    <>
        <div className="account-page">
        {/* Main Wrapper */}
        <div className="main-wrapper">
			<div className="account-content">
				<div className="login-wrapper">
                    <div className="login-content">
                        <div className="login-userset ">
                            <div className="login-logo">
                                <img src="assets/img/logo.png" alt="img" />
                            </div>
                            <div className="login-userheading">
                                <h3>Forgot password?</h3>
                                <h4>Don’t warry! it happens. Please enter the address <br />
                                    associated with your account.</h4>
                            </div>
                            <div className="form-login">
                                <label>Email</label>
                                <div className="form-addons">
                                    <input type="text" placeholder="Enter your email address" />
                                    <img src="assets/img/icons/mail.svg" alt="img" />
                                </div>
                            </div>
                            <div className="form-login">
                                <a className="btn btn-login" href="signin.html">Submit</a>
                            </div>
                        </div>
                    </div>
                    <div className="login-img">
                        <img src="assets/img/login.jpg" alt="img" />
                    </div>
                </div>
			</div>
        </div>
		{/* Main Wrapper */}
        </div>
    </>
  )
}

export default ForgetPassword