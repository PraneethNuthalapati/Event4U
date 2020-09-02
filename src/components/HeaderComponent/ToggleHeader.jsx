import React from 'react';
import {Link} from 'react-router-dom';

const ToggleHeader = () =>{
    return(
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#header" aria-controls="header" aria-expanded="false" aria-label="Toggle navigation"> 
    <span className="navbar-toggler-icon"></span>
    <Link className="navbar-brand" to="/"></Link>
  </button>
    )
};

export default ToggleHeader;