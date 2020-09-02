import React from 'react';
import './homepage.scss';
import NavBar from '../components/HeaderComponent/NavBar';

class HomePage extends React.Component {
   
    
    render(){
        // console.log("Home Page: "+sessionStorage.getItem("LoggedIn"))
        return( 
            <div>
                <NavBar/>
                <div className="HomePage">
                    <h1> Group 25 Project </h1>
                    <img src="https://cdn.dribbble.com/users/1261045/screenshots/11391612/hello-welcome.gif"
                    height="350px"
                    width="50%"></img>
                </div>
            </div>
        );
    }
   
  }

export default HomePage;