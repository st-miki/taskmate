import React from 'react';
import '../../Pages/Styles/Login.css';

import illustration from '../../assets/Images/Illustration.jpg';

const LoginDescription = () => {
  return (
    <div className="description">
     <h2>Your trusted partner, providing tailored solutions for your <span style={{color: '#2B4FEB'}}>Tasky</span> needs</h2>
     <img src={illustration} alt="Illustration" style={{width:"500px"}}/>
    </div>
  );
};

export default LoginDescription;
