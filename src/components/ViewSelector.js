import React from 'react';
import { NavLink} from 'react-router-dom';


const Nav = props => {

  //Put the linkies
  return(
    <div className="sub-navBar sub-navContainer">      
      <NavLink to="/">List view</NavLink>
      <NavLink to="map">Map view</NavLink>

    </div>
  )
  
}

export default Nav;
