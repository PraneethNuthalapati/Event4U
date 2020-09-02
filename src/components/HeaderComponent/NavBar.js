import React from 'react';
import {Link} from 'react-router-dom';
import ToggleHeader from './ToggleHeader';
import './NavBar.scss';
import Axios from 'axios';

class NavBar extends React.Component {
  constructor(){
    super();
    this.state = {
      jobs:[],
      inputSearchData: "",
      showDetails: false
    }
  }
  componentDidMount() {
  Axios.get('https://4sktkl5zug.execute-api.us-east-1.amazonaws.com/dev/getalljobs')
            .then(res => {
                 this.setState({jobs: res.data});
                 
            })
            .catch(err => {
                this.setState({loading: false});
            })
  }



  inputEvent =  e =>{
    console.log('Event'+ e.target.value);
    e.preventDefault();
    this.setState({ inputSearchData : e.target.value});
  }

  logout = () => {
    sessionStorage.setItem("LoggedIn", "false");
    sessionStorage.setItem("userId","");
  };

  render(){

    console.log("Navbar:"+sessionStorage.getItem("LoggedIn"));
        return(
          <div>
            <nav className="navbar navbar-light navbar-expand-lg bg-dark">
            <ToggleHeader></ToggleHeader>

  <div className="collapse navbar-collapse" id="header">
    <ul className="navbar-nav">
      <li className="nav-item active">
      <Link className="nav-link text-white ml-5 mt-2 mr-5"  to='/' >Home&nbsp;<i class="fas fa-home"></i> <span className="sr-only">(current)</span></Link>
      </li>
      <li className="nav-item active">
      <Link className="nav-link text-white ml-5 mt-2 mr-5"  to='/companyx' >Valiant Venues&nbsp;<span className="sr-only">(current)</span></Link>
      </li>
      <li className="nav-item active">
      <Link className="nav-link text-white ml-5 mt-2 mr-5"  to='/companyy' >Lights N Stuff&nbsp;<span className="sr-only">(current)</span></Link>
      </li>
      <li className="nav-item active">
      <Link className="nav-link text-white ml-5 mt-2 mr-5"  to='/companyz' >Events 4U<span className="sr-only">(current)</span></Link>
      </li>
      
    </ul>
    <ul class="nav justify-content-end ml-auto">
      {sessionStorage.getItem("LoggedIn") === "true"?
        <li className="nav-item active  my-2 my-lg-0">
        <Link className="nav-link text-white ml-5 mt-2 "  to='/' onClick={this.logout} >Logout<span className="sr-only">(current)</span></Link>
        </li>
        :null
        }     
    </ul>
  </div>
</nav>
</div>
        )
}
};

export default NavBar;