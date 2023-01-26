import React from "react";
import '../stylesheets/Logo.css'

function Logo(props) {
  return (
    <div className='freecodecamp-logo-contenedor'>
      <img
      src={ require(`../images/freecodecamp-logo.jpg`)}
      className='freecodecamp-logo'
      alt='Logo de freeCodeCamp' 
    />
    </div>
  );
}

export default Logo;