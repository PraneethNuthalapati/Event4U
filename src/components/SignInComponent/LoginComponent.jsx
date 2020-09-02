import React, { Component } from 'react';
import * as ReactBootStrap from 'react-bootstrap';
import Axios from 'axios';
import NavBar from '../HeaderComponent/NavBar';

class LoginComponent extends Component {
  constructor(props){
      super();
      this.state = {
            userEmailId:"",
            userPassword:"",
            equipmentId:"",
            venueId:"",
            venueName: "",
            qty:"",
            errorMessage: false
      }
  }

  componentWillMount() {
    const param=[this.props.match.params];
    // ${props.equipmentId}/${props.venueId}/${props.venueId}/${props.qty}
    Object.keys(param)
            .map(pKey => {
              return [...Array(param[pKey])]
              .map((i,j)=>{
                this.setState({
                  equipmentId:i.equipmentId,
                  venueId:i.venueId,
                  venueName: i.venueName,
                  qty: i.qty
                })
                return true;
              })
            })
  }


  onEmailChange = (e) =>{
     this.setState({userEmailId: e.target.value}) 
  }

  onPasswordChange = (e) =>{
      this.setState({userPassword: e.target.value}) 
   }





  onFormSubmit =  e => {
      e.preventDefault();
      Axios.post('https://cors-anywhere.herokuapp.com/http://ec2-34-225-29-83.compute-1.amazonaws.com:5000/loginUser', {
      username: this.state.userEmailId,
      password: this.state.userPassword
    },[])
    .then(res => {
      console.log(res)
         if(res.data.message === "Success")
         {
          sessionStorage.setItem("LoggedIn", "true");
          sessionStorage.setItem("userId",this.state.userEmailId);
          this.props.history.push(`/confirmOrder/${this.state.equipmentId}/${this.state.venueId}/${this.state.venueName}/${this.state.qty}/${this.state.userEmailId}`)
         }
         else
         {
          //  alert("Invalid User")
           this.setState({errorMessage: true})
          //  this.props.history.push(`/`);
         }
    })
    .catch(err => {
        console.log(err);
    })
  }

  render() {
    const errorMessage= this.state.errorMessage ? (
      <div class="alert alert-danger" style={{width: "50%"}} role="alert" onAnimationEndCapture={this.updateErrorHandler}>
          Invalid Username or Password
      </div>
    ):null;
    return (
      <center>
        <div>
          <NavBar/>
          <br/>
          <h1>Enter Login credentials</h1>
          {errorMessage}
          <div style={{paddingTop: '6rem'}}>
          <ReactBootStrap.Card style={{width:'30rem', height:'18rem', borderRadius: '10px', boxShadow:'0 4px 5px #ccc', paddingTop:'20px'}}>
          <br/>
            <ReactBootStrap.Card.Body >
              <ReactBootStrap.Form onSubmit={this.onFormSubmit}>
              <ReactBootStrap.Form.Group controlId="formBasicEmail">
                <ReactBootStrap.Form.Control type="text" required placeholder="Username" onChange={this.onEmailChange}/>
              </ReactBootStrap.Form.Group>
            
              <ReactBootStrap.Form.Group controlId="formBasicPassword">
                <ReactBootStrap.Form.Control type="password" required placeholder="Password" onChange={this.onPasswordChange} />
              </ReactBootStrap.Form.Group>
              <ReactBootStrap.Button variant="primary" type="submit">
                LOGIN
              </ReactBootStrap.Button>
                </ReactBootStrap.Form>
            </ReactBootStrap.Card.Body>

          </ReactBootStrap.Card>
          </div>

        </div>
      </center>
    );
  }
}



export default LoginComponent;