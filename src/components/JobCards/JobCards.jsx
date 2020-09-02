import React  from 'react';
import * as ReactBootStrap from 'react-bootstrap';
import Axios from 'axios';
import { withRouter } from 'react-router-dom';

const JobCards = (props) => (
        <div className="App">
          <br/>
        <ReactBootStrap.Card  className="App">

        <ReactBootStrap.Card.Body>
         
          <ReactBootStrap.Card.Text><strong>Venue ID: </strong>{props.venueId}</ReactBootStrap.Card.Text>
          <ReactBootStrap.Card.Text><strong>Venue Name: </strong>{props.venueName}</ReactBootStrap.Card.Text>
          <ReactBootStrap.Card.Text><strong>Equipment Id: </strong>{props.equipmentId}</ReactBootStrap.Card.Text>
          <ReactBootStrap.Card.Text><strong>Quantity: </strong>{props.qty}</ReactBootStrap.Card.Text>
          <ReactBootStrap.Button 
            variant="primary" 
            onClick= {() => {
              {
                search(props.inputSearchData);
                sessionStorage.getItem("LoggedIn")==="true"
              ?
              props.history.push(`/confirmOrder/${props.equipmentId}/${props.venueId}/${props.venueName}/${props.qty}/${sessionStorage.getItem("userId")}`):
              props.history.push(`/loginz/${props.equipmentId}/${props.venueId}/${props.venueName}/${props.qty}`)
              }
            }}>
              Order Now</ReactBootStrap.Button>
        </ReactBootStrap.Card.Body>
      </ReactBootStrap.Card>
        </div>
);

function search(search) {
  Axios.post('https://cors-anywhere.herokuapp.com/http://ec2-34-225-29-83.compute-1.amazonaws.com:5000/search', {
    venueName:search
  },[])
  .then(res => {
  })
}


export default withRouter(JobCards);