import React from 'react'
import SignUpForm from '../Components/Signup/SignupForm'
import Description from '../Components/Signup/SignupDescription'


const Signup = () => {
  return (
    <div className="signup-page">
      <div className="signup-form-container">
        <SignUpForm />
      </div>
      <div className="description-container">
        <Description />
      </div>
    </div>
  )
}

export default Signup
