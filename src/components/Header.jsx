import PropTypes from 'prop-types';
import React from 'react';
const Header = ({text,bgColor,textColor}) => {

const headerStyles = {
  backgroundColor: bgColor,
  color: textColor
}


  return (
    <header style={headerStyles}>

<div className="container">
  <h2>{text}</h2>
</div>
    </header>
  )
}

Header.defaultProps = {
  text:'Feedback App',
  bgColor:'rgba(0,0,0,0.4)',
  textColor:'#00acee'
}

Header.propTypes = {
  text: PropTypes.string,
  bgColor: PropTypes.string,
  color: PropTypes.string
}

export default Header